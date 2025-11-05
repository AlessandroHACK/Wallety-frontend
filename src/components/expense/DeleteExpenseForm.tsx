"use cliente"

import { useActionState, useEffect } from "react"
import Heading from "../ui/Heading"
import { deleteExpense } from "@/src/actions/delete-expense-action"
import { useParams, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"

export default function DeleteExpenseForm({ closeModal }: { closeModal: () => void }) {
  const { id: budgetId } = useParams()
  const searchParams = useSearchParams()
  const expenseId = searchParams.get('deleteExpenseId')

  const deleteExpenseWithBudgetId = deleteExpense.bind(null, {
    budgetId: +budgetId!,
    expenseId: +expenseId!
  })

  const [state, dispatch] = useActionState(deleteExpenseWithBudgetId, {
    errors: [],
    success: ''
  })

    // Toast notifications
    useEffect(() => {
      if (state.errors?.length) {
        state.errors.forEach((error) => toast.error(error))
      }
      if (state.success) {
        toast.success(state.success)
        closeModal()
      }
    }, [state])
  return (
    <>
      <Heading>Eliminar Gasto</Heading>

      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-400">
          <span className="text-patina-400 font-medium">
            Nota:
          </span>{" "}
          Un gasto eliminado no se pueden recuperar.
        </p>
      </div>

      <form
        className="space-y-6"
        noValidate
        action={dispatch}
      >

        <div className="grid grid-cols-2 gap-3">
          <input
            type="submit"
            value='Eliminar'
            className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
          />


          <button
            type="button"
            onClick={closeModal}
            className="w-full border border-patina-500 text-patina-200 hover:bg-white/10 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-patina-500"
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  )
}
