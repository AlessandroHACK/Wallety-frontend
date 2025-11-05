import { Budget } from "@/src/schemas"

type BudgetFormProps = {
    budget?: Budget
}

export default function BudgetForm({budget} : BudgetFormProps) {
    return (
        <>
            <div className="space-y-1">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-patina-200"
                >
                    Nombre del Presupuesto
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Ej. Presupuesto mensual"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md bg-transparent focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
                    name="name"
                    defaultValue={budget?.name}
                />
            </div>

            <div className="space-y-1">
                <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-patina-200"
                >
                    Cantidad del Presupuesto
                </label>
                <input
                    id="amount"
                    type="number"
                    placeholder="Ej. 1500"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md bg-transparent focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
                    name="amount"
                    defaultValue={budget?.amount}
                />
            </div>
        </>
    )
}
