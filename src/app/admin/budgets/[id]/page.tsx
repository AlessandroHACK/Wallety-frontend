import BudgetSummary from '@/src/components/budgets/BudgetSummary'
import AddExpenseButton from '@/src/components/expense/AddExpenseButton'
import FeatureExpenseCard from '@/src/components/expense/FeatureExpenseCard'
import Heading from '@/src/components/ui/Heading'
import ModalContainer from '@/src/components/ui/ModalContainer'
import { getBudgetById } from '@/src/services/budgetService'
import { Metadata } from 'next'

type BudgetPageProps = {
  params: { id: string }
}

export async function generateMetadata({ params }: BudgetPageProps): Promise<Metadata> {
  const { id } = await params
  const budget = await getBudgetById(id)

  return {
    title: `Wallety - ${budget.name}`,
    description: `Wallety - ${budget.name}`
  }
}

export default async function BudgetPage({ params }: BudgetPageProps) {
  const { id } = await params
  const budget = await getBudgetById(id)
  const totalSpent = budget.expenses.reduce((total, expense) => +expense.amount + total, 0)
  const totalAvailable = +budget.amount - totalSpent
  const percentage = +((totalSpent / +budget.amount) * 100).toFixed(2)


  return (
    <div className="w-full">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Heading>{budget.name}</Heading>
        <AddExpenseButton />
      </div>

      <BudgetSummary
        percentage={percentage}
        totalAmount={+budget.amount}
        totalAvailable={totalAvailable}
        totalSpent={totalSpent}
      />

      {budget.expenses.length ? (
        <div className="mt-10">
          <h2 className='text-2xl font-bold'>Gastos del Presupuesto: {budget.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {budget.expenses.map((expense) => (
              <FeatureExpenseCard key={expense.id} expense={expense} />
            ))}
          </div>
        </div>
      ) : (
        <div className='text-center py-20'>
          <p>No hay presupuestos aun</p>
        </div>
      )}
      <ModalContainer />
    </div>
  )
}
