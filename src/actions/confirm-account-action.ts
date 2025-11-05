"use server"

import { ErrorSchema, SuccessSchema, TokenSchema } from "../schemas"
type ActionStateType = {
    errors: string[]
    success: string
}
    const API_KEY = process.env.EXPRESS_API_KEY
export async function confirmAccount(token: string, prevState: ActionStateType) {


    if (!API_KEY) {
        throw new Error('Error: API key no definida')
    }
    const confirmToken = TokenSchema.safeParse(token)

    if (!confirmToken.success) {
        const errors = confirmToken.error.issues.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }

    try {
        //confirm user 
        const url = `${process.env.API_URL}/auth/confirm-account`
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify({
                token: confirmToken.data
            }),
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