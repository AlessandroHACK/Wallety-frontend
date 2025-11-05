import { Expense } from '@/src/schemas'
import React from 'react'
import ExpenseMenu from './ExpenseMenu'
import { formatCurrency, formatDate } from '@/src/utils'
import { IoCash } from 'react-icons/io5'

type FeatureBudgetCardProps = {
    expense: Expense
}

export default function FeatureExpenseCard({ expense }: FeatureBudgetCardProps) {
    return (


        <div
            key={expense.id}
            className="bg-white/5 border border-patina-700/30 backdrop-blur-sm 
           rounded-2xl p-5 hover:shadow-lg hover:shadow-patina-500/10 
           transition-all duration-300"
        >
            <div className="absolute top-3 right-1 z-10">
                <ExpenseMenu expenseId={expense.id} />
            </div>
            <p className="text-xs text-gray-400 mb-2">
                Última actualización:{' '}
                <span className="font-semibold text-white">
                    {formatDate(expense.updatedAt)}
                </span>
            </p>

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <IoCash className="text-emerald-400 text-xl" />
                    <h3 className="text-lg font-semibold text-white">{expense.name}</h3>
                </div>
                {expense.amount && (
                    <p className="text-white font-medium text-sm">
                        Monto: <span className="text-emerald-400 font-bold">{formatCurrency(+expense.amount)}</span>
                    </p>
                )}
            </div>
        </div>

    )
}
