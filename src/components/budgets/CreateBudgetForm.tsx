"use client"

import { createBudget } from "@/src/actions/create-budget-action"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import BudgetForm from "./BudgetForm"



export default function CreateBudgetForm() {
  const router = useRouter()
  const [state, dispatch] = useActionState(createBudget, {
    errors: [],
    success: ''
  })

  //toast notification
  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error))
    }
    if (state.success) {
      toast.success(state.success)
      router.push('/admin')
    }
  }, [state])
  return (
    <form
      className="mt-6 space-y-4"
      noValidate
      action={dispatch}
    >
      <BudgetForm />
      <input
        type="submit"
        className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
        value='Crear Presupuesto'
      />

    </form>
  )
}
