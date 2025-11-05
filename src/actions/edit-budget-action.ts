"use server"

import { revalidatePath } from "next/cache";
import { fetchWithAuth } from "../lib/api";
import { Budget, DraftBudgetSchema, ErrorSchema, SuccessSchema } from "../schemas";
type ActionStateType = {
    errors: string[]
    success: string
}
export async function editBudget(budgetId: Budget['id'], prevState: ActionStateType, formData: FormData) {
    const budget = DraftBudgetSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount')
    })

    if (!budget.success) {
        const errors = budget.error.issues.map(error => error.message)
        return {
            errors,
            success: '' 
        }
    }

    try {
        const url = `/budgets/${budgetId}`
        const req = await fetchWithAuth(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: budget.data.name,
                amount: budget.data.amount
            })
        })

        const json = await req.json()

        if (!req.ok) {
            const { error } = ErrorSchema.parse(json)
            return {
                errors: [error],
                success: ''
            }
        }
        revalidatePath('/admin')
        const success = SuccessSchema.parse(json)
        return {
            errors: [],
            success
        }
    } catch (error) {
        console.log('Hubo un error en el servidor', error)
        return { errors: ["Error al conectar con el servidor."], success: "" }
    }
}