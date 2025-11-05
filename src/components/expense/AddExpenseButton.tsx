"use client"

import { useRouter } from "next/navigation"

export default function AddExpenseButton() {
    const router = useRouter()

  return (
    <button
    type="button"
    className="text-center inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-patina-600 to-patina-700 hover:from-patina-700 hover:to-patina-800 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
    onClick={() => router.push('?addExpense=true&showModal=true')}
    >
      Agregar Gasto
    </button>
  )
}
