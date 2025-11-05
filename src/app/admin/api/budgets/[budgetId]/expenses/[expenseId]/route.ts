
import { NextRequest, NextResponse } from "next/server"
import { verifySession } from "@/src/auth/dal"
import { fetchWithAuth } from "@/src/lib/api"

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ budgetId: string; expenseId: string }> }
) {

  const { budgetId, expenseId } = await context.params

  await verifySession()

  const url = `/budgets/${budgetId}/expenses/${expenseId}`
  const req = await fetchWithAuth(url)
  const json = await req.json()

  if (!req.ok) {
    return NextResponse.json(json.error, { status: 403 })
  }

  return NextResponse.json(json)
}
