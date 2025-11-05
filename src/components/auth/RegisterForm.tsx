"use client"

import { register } from "@/src/actions/create-account-action"
import Link from "next/link"
import {  useActionState} from "react"
import ErrorMessage from "../ui/ErrorMessage"
import SuccessMessage from "../ui/SuccessMessage"
export default function RegisterForm() {
    const [state, dispatch] = useActionState(register, {
        errors: [],
        success: ''

    })


    return (
        <form
            className="mt-4 space-y-4"
            noValidate
            action={dispatch}
        >
            {state.errors?.map(error => (
                <ErrorMessage key={error}>{error}</ErrorMessage>
            ))}

          {state.success && <SuccessMessage>{state.success}</SuccessMessage>}
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
                    htmlFor="username"
                >
                    Nombre Completo
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
                    name="username"
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
                    placeholder="Crea una contraseña segura"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
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
                    placeholder="Repite tu contraseña"
                    className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md focus:ring-1 focus:ring-patina-500 focus:border-patina-500 transition-colors duration-200"
                    name="password_confirmation"
                />
            </div>



            <button
                type="submit"
                className="w-full bg-patina-600 hover:bg-patina-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500 mt-2"
            >
                Crear Cuenta
            </button>

            <div className="text-center pt-2">
                <p className="text-sm text-white">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/auth/login" className="font-medium text-emerald-300 hover:text-emerald-400">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </form>
    )
}
