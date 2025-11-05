"use client"

import { Budget } from "@/src/schemas";
import BudgetForm from "./BudgetForm";
import { useActionState, useEffect } from "react";
import { editBudget } from "@/src/actions/edit-budget-action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type EditBudgetFormProps = {
  budget: Budget
}

export default function EditBudgetForm({ budget }: EditBudgetFormProps) {
  const router = useRouter()
  const editBudgetWithId = editBudget.bind(null, budget.id)
  const [state, dispatch] = useActionState(editBudgetWithId, {
    errors: [],
    success: ''
  })

  //toast notification
  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error))
    }
        if(state.success) {
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
      <BudgetForm budget={budget} />
      <input
        type="submit"
        className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
        value='Guardar cambios'
      />

    </form>
  )
}
