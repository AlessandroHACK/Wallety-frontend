"use server"

import { ErrorSchema, RegisterSchema, SuccessSchema } from "@/src/schemas"

type ActionStateType = {
    errors: string[]
    success: string
}

 const API_KEY = process.env.EXPRESS_API_KEY
export async function register(prevState: ActionStateType, formData: FormData) {
   

    if (!API_KEY) {
        throw new Error('Error: API key no definida')
    }
    const registerData = {
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    }

    // validar
    const register = RegisterSchema.safeParse(registerData)
    if (!register.success) {
        const errors = register.error.issues.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }

    try {
        // registrar el usuario
        const url = `${process.env.API_URL}/auth/create-account`
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify({
                username: register.data.username,
                password: register.data.password,
                email: register.data.email
            }),
            credentials: 'include'
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