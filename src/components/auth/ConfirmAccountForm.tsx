"use client"
import { confirmAccount } from "@/src/actions/confirm-account-action"
import { PinInput, PinInputField } from "@chakra-ui/pin-input"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useState, useTransition } from "react"
import { toast } from "react-toastify"

export default function ConfirmAccountForm() {
    const router = useRouter()
    // Maneja el estado local del PIN y si se ha completado.
    const [isComplete, setIsComplete] = useState(false)
    const [token, setToken] = useState('')

    // Prepara una transición para no bloquear el UI durante la acción del servidor.
    const [isPending, startTransition] = useTransition()
    const confirmAccountWithToken = confirmAccount.bind(null, token)
    const [state, dispatch] = useActionState(confirmAccountWithToken, {
        errors: [],
        success: ''
    })

    // Ejecuta la acción cuando el PIN está completo.
    useEffect(() => {
        if (isComplete) {
            startTransition(() => {
                dispatch()
            })
        }
    }, [isComplete, dispatch])

    //manejo de toast 
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
    // Actualiza el token mientras el usuario escribe.
    const handleChange = (token: string) => {
        setIsComplete(false)
        setToken(token)
    }

    // Marca el PIN como completo.
    const handleComplete = () => {
        setIsComplete(true)
    }

    return (
        <div className="flex justify-center gap-2 lg:gap-5 my-10">
            {/* Muestra los mensajes de error o éxito según el estado de la acción. */}
            <PinInput value={token} onChange={handleChange} onComplete={handleComplete}>
                <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
                <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
                <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
                <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
                <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
                <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
            </PinInput>
        </div>
    )
}