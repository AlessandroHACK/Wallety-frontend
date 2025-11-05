"use server"

import { revalidatePath } from "next/cache"
import { fetchWithAuth } from "../lib/api"
import { Budget, DrfatExpenseSchema, ErrorSchema, Expense, SuccessSchema } from "../schemas"

type BudgetAndExpenseId = {
    budgetId: Budget['id'],
    expenseId: Expense['id']
}

type ActionSatetType = {
    errors: string[],
    success: string
}
export async function editExpense({ budgetId, expenseId } : BudgetAndExpenseId, prevState: ActionSatetType, formData: FormData) {

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
        //edit expense
        const url = `/budgets/${budgetId}/expenses/${expenseId}`
        const req = await fetchWithAuth(url, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: expense.data.name,
                amount: expense.data.amount
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