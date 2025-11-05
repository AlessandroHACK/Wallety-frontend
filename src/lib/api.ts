//fetchWithAuth is responsible for adding the token to the requests.

import { redirect } from "next/navigation"
import { getAccessToken } from "../auth/authHelpers"


const API_KEY = process.env.EXPRESS_API_KEY
export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  if (!API_KEY) {
      console.error("EXPRESS_API_KEY no está configurada. Fallará la comunicación server-to-server.");
  }
  const token = await getAccessToken()

  if (!token) {
    redirect("/auth/login")
  }

  const newOptions: RequestInit = { ...options }


  newOptions.headers = new Headers(options.headers || {})
if (API_KEY) {
    newOptions.headers.set('x-api-key', API_KEY)
  }
  newOptions.headers.set('Cookie', `access_token=${token}`, )

  if (!newOptions.credentials) {
    newOptions.credentials = 'include'
  }

  const reqUrl = `${process.env.API_URL}${url}`

  const req = await fetch(reqUrl, newOptions)

  return req
}