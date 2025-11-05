import RegisterForm from "@/src/components/auth/RegisterForm"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro - Wallety | Únete a la Plataforma de Gestión Financiera",
  description: "Crea tu cuenta en Wallety y comienza a administrar tus gastos, presupuestos y expenses de forma intuitiva. Regístrate gratis y toma el control de tus finanzas personales.",
  keywords: "registro wallety, crear cuenta, finanzas personales, administrar gastos, presupuestos, expenses, ahorro, dinero, wallety",

};
export default function RegsiterPage() {

    return (
        <>
        <h1 className='text-white font-black text-4xl'>Crea una cuenta</h1>
        <p className='text-2xl font-bold text-patina-200'>Controla tus <span className='text-breaker-bay-500'>gastos</span></p>
       
        <RegisterForm/>
        </>
    )
}
