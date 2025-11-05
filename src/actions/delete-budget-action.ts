"use server"

import { Budget, ErrorSchema, PasswordValidationSchema, SuccessSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"
import { fetchWithAuth } from "../lib/api"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function deleteBudget(budgetId: Budget['id'], prevState: ActionStateType, formData: FormData) {
    const currentPassword = PasswordValidationSchema.safeParse(formData.get('password'))
    if (!currentPassword.success) {
        return {
            errors: currentPassword.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    try {
        // check password

        const checkPasswordUrl = `/auth/check-password`
        const checkPasswordReq = await fetchWithAuth(checkPasswordUrl, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: currentPassword.data
            })
        })

        const checkPasswordJson = await checkPasswordReq.json()
        if (!checkPasswordReq.ok) {
            const { error } = ErrorSchema.parse(checkPasswordJson)
            return {
                errors: [error],
                success: ''
            }
        }

        // delete budget
        const deleteBudgetUrl = `/budgets/${budgetId}`
        const deleteBudgetReq = await fetchWithAuth(deleteBudgetUrl, {
            method: 'DELETE',

        })

        const deleteBudgetJson = await deleteBudgetReq.json()

        if (!deleteBudgetReq.ok) {
            const { error } = ErrorSchema.parse(deleteBudgetJson)
            return {
                errors: [error],
                success: ''
            }
        }

        revalidatePath('/admin')

        const success = SuccessSchema.parse(deleteBudgetJson)

        return {
            errors: [],
            success
        }
    } catch (error) {
        console.log('Hubo un error en el servidor', error)
        return { errors: ["Error al conectar con el servidor."], success: "" }
    }
}