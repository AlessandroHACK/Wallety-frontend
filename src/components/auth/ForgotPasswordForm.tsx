"use client"

import { forgotPassword } from "@/src/actions/forgot-password-action"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"


export default function ForgotPasswordForm() {
    const [state, dispatch] = useActionState(forgotPassword, {
        errors: [],
        success: ''
    })

        //toast notification
        useEffect(()=>{
            if(state.errors){
                state.errors.forEach(error => toast.error(error))
            }
            if(state.success){
                toast.success(state.success)
            }
        }, [state])
    return (
        <form
            className="mt-4 space-y-4 "
            noValidate
            action={dispatch}
        >
            <div className="space-y-1">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-patina-200"
                >
                    Correo Electrónico
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="tu.email@ejemplo.com"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
                    name="email"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
            >
                Enviar Instrucciones
            </button>
        </form>
    )
}
