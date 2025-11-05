import { Budget } from '@/src/schemas'
import { formatCurrency, formatDate } from '@/src/utils'
import Link from 'next/link'
import { IoCheckmarkCircleOutline, IoArrowForwardOutline } from 'react-icons/io5'
import BudgetMenu from './BudgetMenu'

type FeatureBudgetCardProps = {
  budget: Budget
}

const FeatureCard = ({ budget }: FeatureBudgetCardProps) => (
  <div className="relative flex flex-col justify-between border bg-white/5 border-patina-700/30 backdrop-blur-sm 
 rounded-2xl p-5 hover:shadow-lg hover:shadow-patina-500/10 
 transition-all duration-300  max-w-xs col-span-12 xl:p-7 lg:col-span-3 md:col-span-6">


    <div className="absolute top-3 right-1 z-10">
      <BudgetMenu budgetId={budget.id} />
    </div>


    <div className="flex items-center gap-2 mb-4">
      <IoCheckmarkCircleOutline size={30} className="text-emerald-400" />
      <p className="text-xs text-gray-400">
        Última actualización{' '}
        <span className="font-semibold text-white">
          {formatDate(budget.updatedAt)}
        </span>
      </p>
    </div>


    <p className="text-lg font-bold text-white mb-2 leading-snug line-clamp-2">
      {budget.name}
    </p>


    <p className="text-2xl font-semibold text-emerald-400 mb-4">
      {formatCurrency(+budget.amount)}
    </p>


    <Link
      href={`/admin/budgets/${budget.id}`}
      className="group inline-flex items-center gap-2 text-sm font-medium text-patina-400 hover:text-patina-300 transition-all duration-300"
    >
      Ver detalles
      <IoArrowForwardOutline
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  </div>
)

export default FeatureCard
