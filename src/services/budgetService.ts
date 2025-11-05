import { cache } from "react"
import { BudgetAPIResponseSchema, BudgetsAPIResponseSchema } from "../schemas"
import { fetchWithAuth } from "../lib/api"
import { notFound} from "next/navigation"

//get all budgets
export const getBudgets = cache(async () => {
  const url = `/budgets`
  const req = await fetchWithAuth(url, {
    next: { tags: ["all-budgets"] },
  })

  if (!req.ok) {
    throw new Error(`Error ${req.status}: ${req.statusText}`)
  }

  const json = await req.json()
  const budgets = BudgetsAPIResponseSchema.parse(json)
  return budgets
})

//get budget by id
export const getBudgetById = cache(async (budgetId: string) => {
    const url = `/budgets/${budgetId}`
    const req = await fetchWithAuth(url)

    const json = await req.json()

    if (!req.ok) {
        notFound()
    }

    const budget = BudgetAPIResponseSchema.parse(json)
    return budget
})