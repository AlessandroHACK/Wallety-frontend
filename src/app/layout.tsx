import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import ToastNotification from "../components/ui/ToastNotification";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Wallety - Administrador de Gastos y Presupuestos Personales",
  description: "Wallety es la aplicación web que te ayuda a administrar tus gastos, budgets y expenses de forma intuitiva. Controla tus finanzas personales y alcanza tus metas financieras.",
  keywords: "finanzas personales, administrar gastos, presupuestos, expenses, ahorro, dinero, wallety",
  authors: [{ name: "Alessandro Verdin" }],
  creator: "Alessandro Verdin",
  publisher: "Alessandro Verdin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <ToastNotification/>
      </body>
    </html>
  );
}
