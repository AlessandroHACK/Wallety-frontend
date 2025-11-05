"use client"

import { DrfatExpense } from "@/src/schemas";
import { DialogTitle } from "@headlessui/react";
import { useParams, useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "@/src/actions/edit-expense-action";
import { toast } from "react-toastify";

export default function EditExpenseForm({ closeModal }: { closeModal: () => void }) {
  const [expense, setExpense] = useState<DrfatExpense>()
  const { id: budgetId } = useParams()
  const searchParams = useSearchParams()
  const expenseId = searchParams.get('editExpenseId')
  const editExpenseWithBudgetId = editExpense.bind(null, {
    budgetId: +budgetId!,
    expenseId: +expenseId!
  })
  const [state, dispatch] = useActionState(editExpenseWithBudgetId, {
    errors: [],
    success: ''
  })


  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_URL}/admin/api/budgets/${budgetId}/expenses/${expenseId}`
    fetch(url)
      .then(res => res.json())
      .then(data => setExpense(data))
  }, [])

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
      <DialogTitle
        as="h3"
        className="font-black text-3xl text-white"
      >
        Editar Gasto
      </DialogTitle>
      <p className="text-base font-medium text-patina-200">
        Editar gasto
      </p>
      <form
        className=" rounded-lg p-10 mt-10"
        noValidate
        action={dispatch}
      >
        <ExpenseForm expense={expense} />
        <input
          type="submit"
          className="w-full mt-5 bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
          value='Guardar Cambios'
        />
      </form>
    </>
  )
}