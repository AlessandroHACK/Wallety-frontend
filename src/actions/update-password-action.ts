"use server"

import { fetchWithAuth } from "../lib/api"
import { ErrorSchema, SuccessSchema, UpdatePasswordSchema } from "../schemas"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function updatePassword(prevState: ActionStateType, formData: FormData) {
    const userPassword = UpdatePasswordSchema.safeParse({
        currentPassword: formData.get('currentPassword'),
        newPassword: formData.get('newPassword'),
        password_confirmation: formData.get('password_confirmation'),

    })

    if (!userPassword.success) {
        const errors = userPassword.error.issues.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }

    try {
        //update password
        const url = `/auth/update-password`
        const req = await fetchWithAuth(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentPassword: userPassword.data.currentPassword,
                newPassword: userPassword.data.newPassword
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
        return {
            errors: [],
            success
        }
    } catch (error) {
        console.log('Hubo un error en el servidor', error)
        return { errors: ["Error al conectar con el servidor."], success: "" }
    }
}