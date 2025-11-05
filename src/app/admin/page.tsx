
import DeleteBudgetModal from '@/src/components/budgets/DeleteBudgetModal'
import FeatureCard from '@/src/components/budgets/FeatureBudgetCard'
import Heading from '@/src/components/ui/Heading'
import { getBudgets } from '@/src/services/budgetService'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Panel de Administración - Wallety | Gestiona tus Presupuestos',
    description: 'Accede al panel de administración de Wallety para gestionar y administrar tus presupuestos de manera eficiente. Crea, edita y supervisa tus finanzas personales con facilidad.',
    keywords: 'panel de administración wallety, gestionar presupuestos, administrar finanzas, finanzas personales, crear presupuestos, editar presupuestos, supervisar gastos, wallety',
}



export default async function AdminPage() {
    const budgets = await getBudgets()

    return (
        <div className='w-full'>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
                <Heading >
                    Maneja y administra tus <span className="text-patina-400">presupuestos</span>
                </Heading>

                <Link
                    href={"/admin/budgets/new"}
                    className="text-center inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-patina-600 to-patina-700 hover:from-patina-700 hover:to-patina-800 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out"
                >
                    Crear Presupuesto
                </Link>
            </div>
            {budgets.length ? (
              <>
                <div className="grid grid-cols-12 gap-6 mt-10">
                    {budgets.map((budget) => (
                        <FeatureCard
                            key={budget.id}
                            budget={{ ...budget, expenses: [] }}
                        />
                    ))}
                </div>
                <DeleteBudgetModal/>
              </>
            ) : (
                <div className='text-center py-20'>
                    <p>No hay presupuestos aun</p>
                    <Link
                        href={"/admin/budgets/new"}
                        className='text-patina-400 font-bold'
                    >
                        Comienza creando uno
                    </Link>
                </div>
            )}
        </div>
    )
}
