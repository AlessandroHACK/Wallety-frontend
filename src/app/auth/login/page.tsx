import LoginForm from "@/src/components/auth/LoginForm" 
import { Metadata } from "next"

export const metadata: Metadata = {
 title: "Iniciar Sesión - Wallety | Accede a tu Gestión Financiera Personal",
  description: "Accede a tu cuenta de Wallety para administrar tus gastos, presupuestos y expenses. Controla tus finanzas personales y alcanza tus metas financieras.",
  keywords: "iniciar sesión wallety, acceso cuenta, login, finanzas personales, administrar gastos, presupuestos, expenses, ahorro, dinero, wallety",
}
export default function LoginPage() {
    return (
        <>
            <h1 className=' text-white font-black text-4xl'>Inicia sesión</h1>
            <p className='text-2xl font-bold text-patina-200'>Controla tus <span className='text-breaker-bay-500'>gastos</span></p>
            <LoginForm />
        </>
    )
}
 