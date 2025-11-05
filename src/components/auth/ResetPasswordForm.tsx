//is not necessary to use "use client" here because this is a child of a client component
import { resetPassword } from "@/src/actions/reset-password"
import { useRouter } from "next/navigation"

import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

type ResetPasswordFormProps = {
    token: string
}
export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
    const router = useRouter()
    const resetPasswordWithToken = resetPassword.bind(null, token)
    const [state, dispatch] = useActionState(resetPasswordWithToken, {
        errors: [],
        success: ''
    })

    //toast 
    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(error => {
                toast.error(error)
            })
        }
        if (state.success) {
            toast.success(state.success, {
                onClose: () => {
                    router.push('/auth/login')
                },
                onClick: () => {
                    router.push('/auth/login')
                }

            })
        }

    }, [state])

    return (
        <form
            className="mt-4 space-y-4"
            noValidate
            action={dispatch}
        >

            <div className="space-y-1">
                <label
                    className="block text-sm font-medium text-patina-200"
                    htmlFor="password"
                >
                    Nueva Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Crea una contraseña segura"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200" // Estilo unificado
                    name="password"
                />
                <p className="text-xs text-patina-400">
                    Mínimo 8 caracteres con letras, números y símbolos
                </p>
            </div>


            <div className="space-y-1">
                <label
                    className="block text-sm font-medium text-patina-200"
                    htmlFor="password_confirmation"
                >
                    Confirmar Contraseña
                </label>
                <input
                    id="password_confirmation"
                    type="password"
                    placeholder="Repite tu nueva contraseña"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200" // Estilo unificado
                    name="password_confirmation"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500 mt-2" // Estilo unificado 'patina'
            >
                Guardar Nueva Contraseña
            </button>
        </form>
    )
}