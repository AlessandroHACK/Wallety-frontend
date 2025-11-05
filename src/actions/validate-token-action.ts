"use server"

import { ErrorSchema, SuccessSchema, TokenSchema } from "../schemas"
type ActionStateType = {
    errors: string[]
    success: string
}
const API_KEY = process.env.EXPRESS_API_KEY
export async function validateToken(token: string, prevState: ActionStateType) {
      if (!API_KEY) {
    throw new Error('Error: API key no definida')
  }
     const resetPasswordToken = TokenSchema.safeParse(token)
    if (!resetPasswordToken.success) {
        const errors = resetPasswordToken.error.issues.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }
    try {
        //validate token
        const url = `${process.env.API_URL}/auth/validate-token`
        const req = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json',
                    'x-api-key': API_KEY
             },
            body: JSON.stringify({
                token: resetPasswordToken.data
            }),
            credentials: 'include',

        })
            const json = await req.json()
    if(!req.ok) {
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