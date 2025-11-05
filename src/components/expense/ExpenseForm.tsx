"use client"

import { DrfatExpense} from "@/src/schemas"

type EditExpenseFormProps = {
  expense? : DrfatExpense
}
export default function ExpenseForm({expense} : EditExpenseFormProps) {
  return (
    <>
      <div className="space-y-1 text-left">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-patina-200"
        >
          Nombre del Gasto
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Ej. Comida, transporte..."
          defaultValue={expense?.name}
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
        />
      </div>


      <div className="space-y-1 mt-5 text-left">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-patina-200"
        >
          Cantidad del Gasto
        </label>
        <input
          id="amount"
          type="number"
          name="amount"
          placeholder="Ej. 250"
          defaultValue={expense?.amount}
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md bg-transparent text-white placeholder-gray-400 focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
        />
      </div>
    </>
  )
}
