"use server"

import { ErrorSchema, ResetPasswordSchema, SuccessSchema } from "../schemas"

type ActionStateType = {
    errors: string[]
    success: string
}

  const API_KEY = process.env.EXPRESS_API_KEY
export async function resetPassword(token: string, prevState: ActionStateType, formData: FormData) {
      if (!API_KEY) {
    throw new Error('Error: API key no definida')
  }
    const resetPasswordInput = {
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }

    const resetPassword = ResetPasswordSchema.safeParse(resetPasswordInput)
    if (!resetPassword.success) {
        const errors = resetPassword.error.issues.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }

    try {
        const url = `${process.env.API_URL}/auth/reset-password/${token}`
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify(resetPassword.data),
            credentials: 'include',
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