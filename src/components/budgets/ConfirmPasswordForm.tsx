import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useActionState, useEffect } from "react"
import { deleteBudget } from "@/src/actions/delete-budget-action"
import { toast } from "react-toastify"
import Heading from "../ui/Heading"

export default function ConfirmPasswordForm() {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const budgetId = +searchParams.get("deleteBudgetId")!

    const deleteBudgetWithPassword = deleteBudget.bind(null, budgetId)
    const [state, dispatch] = useActionState(deleteBudgetWithPassword, {
        errors: [],
        success: "",
    })

    const closeModal = () => {
        const hideModal = new URLSearchParams(searchParams.toString())
        hideModal.delete("deleteBudgetId")
        router.replace(`${pathname}?${hideModal}`)
    }

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
            <Heading>Eliminar Presupuesto</Heading>

            <div className="space-y-2 mb-6">
                <p className="text-base font-medium text-patina-200">
                    Ingresa tu contraseña para confirmar la eliminación del presupuesto.
                </p>
                <p className="text-sm text-gray-400">
                    <span className="text-patina-400 font-medium">
                        Nota:
                    </span>{" "}
                    Un presupuesto eliminado y sus gastos no se pueden recuperar.
                </p>
            </div>

            <form
                className="space-y-6"
                noValidate
                action={dispatch}
            >

                <div className="space-y-1 text-left">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-patina-200"
                    >
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md bg-transparent focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200 text-white"
                        name="password"
                    />
                </div>


                <div className="grid grid-cols-2 gap-3">
                    <input
                        type="submit"
                        value='Eliminar'
                        className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
                    />


                    <button
                        type="button"
                        onClick={closeModal}
                        className="w-full border border-patina-500 text-patina-200 hover:bg-white/10 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-patina-500"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </>
    )
}
