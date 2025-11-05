"use client"
import { DialogTitle } from "@headlessui/react";
import { createExpense } from "@/src/actions/create-expense-action";
import { useActionState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";


export default function AddExpenseForm({closeModal} : {closeModal: () => void}) {
  const { id } = useParams()
  const createExpenseWithBudgetId = createExpense.bind(null, Number(id))
  const [state, dispatch] = useActionState(createExpenseWithBudgetId, {
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
      <DialogTitle
        as="h3"
        className="font-black text-4xl text-patina-400 my-5"
      >
        Agregar Gasto
      </DialogTitle>

      <p className="text-xl font-bold text-white">
        Llena el formulario y crea un{" "}
        <span className="text-patina-400">gasto</span>
      </p>

      <form
        className="mt-14 space-y-5"
        noValidate
        action={dispatch}
      >

        <ExpenseForm />
        <input
          type="submit"
          value="Registrar Gasto"
          className=" w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
        />


      </form>
    </>
  );
}
