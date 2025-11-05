"use server"

import { ErrorSchema, ForgotPasswordSchema, SuccessSchema } from "../schemas"

type ActionStateType = {
  errors: string[]
  success: string
}
 const API_KEY = process.env.EXPRESS_API_KEY
export async function forgotPassword(prevState: ActionStateType, formData: FormData) {
      if (!API_KEY) {
        throw new Error('Error: API key no definida')
    }
  const email = formData.get("email")

  const forgotPasswordData = ForgotPasswordSchema.safeParse({ email })
  if (!forgotPasswordData.success) {
    const errors = forgotPasswordData.error.issues.map(error => error.message)
    return { errors, success: prevState.success }
  }

  try {
    const url = `${process.env.API_URL}/auth/forgot-password`
    const req = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json",
         'x-api-key': API_KEY,
       },
      body: JSON.stringify({ email: forgotPasswordData.data.email }),
      credentials: "include"
    })

    const json = await req.json()

    if (!req.ok) {
      const { error } = ErrorSchema.parse(json)
      return { errors: [error], success: "" }
    }

    const success = SuccessSchema.parse(json)
    return { 
        errors: [],
        success 
    }

  } catch(error) {
    console.log('Hubo un error en el servidor', error)
    return { errors: ["Error al conectar con el servidor."], success: "" }
  }
}
