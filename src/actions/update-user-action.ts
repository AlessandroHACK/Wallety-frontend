"use server"

import {  ErrorSchema, ProfileFormSchema, SuccessSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"
import { fetchWithAuth } from "../lib/api"

type ActionStateType = {
    errors: string[]
    success: string
}

export async function updateUser(prevState: ActionStateType, formData: FormData) {

    const profile = ProfileFormSchema.safeParse({
        username: formData.get('username'),
        email: formData.get('email')
    })
    if (!profile.success) {
        return {
            errors: profile.error.issues.map(issue => issue.message),
            success: ''
        }
    }


    const url = `/auth/user`
    const req = await fetchWithAuth(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: profile.data.username,
            email: profile.data.email,
        })
    })
    const json = await req.json()

    if(!req.ok) {
        const { error } = ErrorSchema.parse(json)
        return {
            errors: [error],
            success: ''
        }
    }

    revalidatePath('/admin/profile/settings')
    const success = SuccessSchema.parse(json)
    return {
        errors: [],
        success
    }

}