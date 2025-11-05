import ProgressBar from "@/src/components/budgets/ProgressBar"
import Amount from "../ui/Amount"

type BudgetSummaryProps = {
  percentage: number
  totalAmount: number
  totalAvailable: number
  totalSpent: number
}

export default function BudgetSummary({
  percentage,
  totalAmount,
  totalAvailable,
  totalSpent,
}: BudgetSummaryProps) {
  return (

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
          {/* Barra de progreso */}
          <div className="flex justify-center md:justify-start">
            <ProgressBar percentage={percentage} />
          </div>

          {/* Resumen de montos */}
          <div className="flex flex-col gap-3 text-sm md:text-base md:items-end text-center md:text-right ">
            <Amount label="Presupuesto total" amount={+totalAmount} />
            <Amount label="Disponible" amount={totalAvailable} />
            <Amount label="Gastado" amount={totalSpent} />
          </div>
        </div>
      </div>

  )
}
