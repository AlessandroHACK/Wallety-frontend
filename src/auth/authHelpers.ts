"use server"
import { cookies } from "next/headers"

/**
 * get access_token
 * @returns string | null
 */
export async function getAccessToken(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("access_token")?.value || null
  return token
}
