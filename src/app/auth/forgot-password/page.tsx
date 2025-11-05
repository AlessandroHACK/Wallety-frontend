
import ForgotPasswordForm from "@/src/components/auth/ForgotPasswordForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Recuperar Contraseña - Wallety | Recupera el Acceso a tu Cuenta",
    description: "¿Olvidaste tu contraseña de Wallety? Recupera el acceso a tu cuenta y continúa administrando tus gastos, presupuestos y expenses.",
    keywords: "recuperar contraseña wallety, olvidé contraseña, resetear contraseña, acceso cuenta, finanzas personales, administrar gastos, wallety",
}
export default function LoginPage() {
    return (
        <>
            <h1 className='text-white font-black text-4xl'>¿Olvidaste tu contraseña? </h1>
            <p className='text-2xl font-bold text-patina-200'>Recupera el acceso <span className='text-breaker-bay-500'>a tu cuenta</span></p>
            <ForgotPasswordForm />
        </>
    )
}
