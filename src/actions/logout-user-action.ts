"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { ErrorSchema } from "../schemas"
  const API_KEY = process.env.EXPRESS_API_KEY
export async function logout() {


  if (!API_KEY) {
    throw new Error('Error: API key no definida')
  }
  const cookieStore = await cookies()
  const token = cookieStore.get("access_token")?.value

  try {

    // if (!token) {
    //   cookieStore.delete("access_token")
    //   return redirect("/auth/login")
    // }

    // Call to the backend to invalidate the session
    const res = await fetch(`${process.env.API_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `access_token=${token}`,
        'x-api-key': API_KEY,
      },

    })

    const json = await res.json()
    if (!res.ok) {

      const { error } = ErrorSchema.parse(json)
      console.error("Error al invalidar sesión en backend:", error)
    }

    // Delete the cookie in Next (independientemente del éxito del backend)
    cookieStore.delete("access_token")

    //redirect("/auth/login")
  } catch (error) {
    console.error("Logout error (network or parsing):", error)
    cookieStore.delete("access_token")
    redirect("/auth/login")
  }
}