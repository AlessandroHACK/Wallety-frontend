"use server"

import { revalidatePath } from "next/cache"
import { fetchWithAuth } from "../lib/api"
import { Budget, DrfatExpenseSchema, ErrorSchema, SuccessSchema } from "../schemas"

type ActionSatetType = {
    errors: string[],
    success: string
}

export async function createExpense(budgetId: Budget['id'], prevState: ActionSatetType, formData: FormData) {
    const expense = DrfatExpenseSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount')
    })

    if (!expense.success) {
        const errors = expense.error.issues.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }
    try {
        //create expense
        const url = `/budgets/${budgetId}/expenses`
        const req = await fetchWithAuth(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: expense.data.name,
                amount: expense.data.amount
            })
        })

        const json = await req.json()
        if(!req.ok){
            const {error} = ErrorSchema.parse(json)
            return {
                errors: [error],
                success: ''
            }
        }

         const success = SuccessSchema.parse(json)
         revalidatePath(`/admin/budgets/${budgetId}`)
        return {
            errors: [],
            success
        }
    } catch (error) {
        console.log('Hubo un error en el servidor', error)
        return { errors: ["Error al conectar con el servidor."], success: "" }
    }

}