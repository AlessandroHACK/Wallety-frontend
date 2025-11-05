import ConfirmAccountForm from "@/src/components/auth/ConfirmAccountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirmar Cuenta - Wallety | Activa tu Acceso Seguro",
  description:
    "Confirma tu cuenta en Wallety para activar todas las funciones de gestión financiera. Asegura tu acceso y comienza a administrar tus gastos, presupuestos y finanzas personales.",
  keywords:
    "confirmar cuenta wallety, activar cuenta, verificación de cuenta, acceso seguro, finanzas personales, administrar gastos, presupuestos, ahorro, dinero, wallety",
}

export default function ConfirmAccountPage() {
    return (
        <>
            <h1 className=' text-white font-black text-4xl'>Confirma tu cuenta</h1>
            <p className='text-2xl font-bold text-patina-200'>Ingresa el código que recibiste <span className='text-breaker-bay-500'>por email</span></p>
            <ConfirmAccountForm/>
        </>
    )
}
