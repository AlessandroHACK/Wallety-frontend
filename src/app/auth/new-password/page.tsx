import PasswordResetHandler from "@/src/components/auth/PasswordResetHandler"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reestablecer Contraseña - Wallety | Recupera el Acceso a tu Cuenta",
  description: "Introduce el código enviado a tu email para reestablecer tu contraseña y recuperar el acceso a tu cuenta de Wallety.",
  keywords: "reestablecer contraseña wallety, código reestablecer contraseña, acceso cuenta, finanzas personales, administrar gastos, wallety",
}
export default function NewPasswordPage() {

  return (
    <>
      <h1 className='text-white font-black text-4xl'>Reestablecer Password</h1>
      <p className='text-2xl font-bold text-patina-200'>Ingresa el código que recibiste <span className='text-breaker-bay-500'>por email</span></p>
    
    <PasswordResetHandler/>
    
    </>
  )
}
