//valida que el token sea válido y redirige si no lo es.
import "server-only"
import { cache } from 'react'
import { redirect } from "next/navigation"
import { UserSchema } from "../schemas"
import { getAccessToken } from "./authHelpers"


export const verifySession = cache( async () => {
        const API_KEY = process.env.EXPRESS_API_KEY

    if (!API_KEY) {
        throw new Error('Error: API key no definida')
    }
    const token = await getAccessToken()
    if(!token) {
        redirect('/auth/login')
    }

    const url = `${process.env.API_URL}/auth/user`
    const req = await fetch(url, {
        headers: {
            Cookie: `access_token=${token}`,
            'x-api-key': API_KEY,
        }
    })

    const session = await req.json()
    const result = UserSchema.safeParse(session)

    if(!result.success) {
        redirect('/auth/login')
    }

    return {
        user: result.data,
        isAuth: true
    }
})