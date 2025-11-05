"use server"

import { revalidatePath } from "next/cache"
import { fetchWithAuth } from "../lib/api"
import { Budget, ErrorSchema, Expense, SuccessSchema } from "../schemas"

type BudgetAndExpenseId = {
    budgetId: Budget['id'],
    expenseId: Expense['id']
}

type ActionSatetType = {
    errors: string[],
    success: string
}

export async function deleteExpense({ budgetId, expenseId }: BudgetAndExpenseId, prevState: ActionSatetType) {
    try {
        const url = `/budgets/${budgetId}/expenses/${expenseId}`
        const req = await fetchWithAuth(url, {
            method: 'DELETE'
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