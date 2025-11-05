"use client"

import { authenticate } from "@/src/actions/authenticate-user-action"
import Link from "next/link"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function LoginForm() {
    const [state, dispatch] = useActionState(authenticate, {
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
            className="mt-4 space-y-4"
            noValidate
            action={dispatch}
        >
            <div className="space-y-1">
                <label
                    className="block text-sm font-medium text-patina-200"
                    htmlFor="email"
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

            <div className="space-y-1">
                <label
                    className="block text-sm font-medium text-patina-200"
                    htmlFor="password"
                >
                    Contraseña
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
                    name="password"
                />

            </div>

            <button
                type="submit"
                className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
            >
                Iniciar Sesión
            </button>

            <div className="text-center pt-2">
                <p className="text-sm text-white">
                    ¿No tienes cuenta?{" "}
                    <Link href="/auth/register" className="font-medium text-emerald-300 hover:text-emerald-400">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
            <div className="text-center ">
                <Link href="/auth/forgot-password" className="text-sm text-emerald-300 hover:text-emerald-400">
                    ¿Olvidaste tu contraseña?
                </Link>
            </div>
        </form>
    )
}