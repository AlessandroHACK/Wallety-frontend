import EditBudgetForm from '@/src/components/budgets/EditBudgetForm'
import Heading from '@/src/components/ui/Heading'
import { getBudgetById } from '@/src/services/budgetService'
import { Metadata } from 'next'


type EditBudgetPageProps = {
  params: { id: string }
}


export async function generateMetadata({ params }: EditBudgetPageProps): Promise<Metadata> {
  const { id } = await params
  const budget = await getBudgetById(id)

  return {
    title: `Wallety - ${budget.name}`,
    description: `Wallety - ${budget.name}`
  }
}



export default async function EditBudgetPage({ params }: EditBudgetPageProps) {
  const { id } = await params
  const budget = await getBudgetById(id)

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
          <div>
            <Heading >
              Editar presupuesto: {budget.name}
            </Heading >
            <p className="text-xl text-patina-400 font-bold mt-2">
              Llena el formulario y edita el presupuesto
            </p>
          </div>

        </div>
      </div>

      <div className="p-10 mt-10 bg-white/10 backdrop-blur rounded-2xl">
        <EditBudgetForm budget={budget} />
      </div>
    </>
  )
}
