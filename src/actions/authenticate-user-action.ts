"use server"
import { redirect } from "next/navigation"
import { ErrorSchema, LoginSchema } from "../schemas"
import { cookies } from "next/headers"

type ActionStateType = {
    errors: string[]

}
const API_KEY = process.env.EXPRESS_API_KEY
export async function authenticate(prevState: ActionStateType, formData: FormData) {


    if (!API_KEY) {
        throw new Error('Error: API key no definida')
    }

    const loginData = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    //validate
    const auth = LoginSchema.safeParse(loginData)
    if (!auth.success) {
        const errors = auth.error.issues.map(error => error.message)
        return {
            errors
        }
    }

    try {
        //login user
        const url = `${process.env.API_URL}/auth/login`
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify({
                email: auth.data.email,
                password: auth.data.password
            }),
            credentials: 'include'

        })
        //get cookie from headers
        const setCookieHeader = req.headers.get('set-cookie');
        if (setCookieHeader) {

            const cookieValue = setCookieHeader.split(';')[0];
            const tokenValue = cookieValue.split('=')[1];

            const cookieStore = await cookies();
            cookieStore.set('access_token', tokenValue, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60
            });
        }

        const json = await req.json()
        if (!req.ok) {
            const { error } = ErrorSchema.parse(json)
            return {
                errors: [error],
            }
        }



    } catch (error) {
        console.log('Hubo un error en el servidor', error)
        return { errors: ["Error al conectar con el servidor."], success: "" }
    }
    redirect('/admin')
}