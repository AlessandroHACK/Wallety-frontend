import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Heading from '../components/ui/Heading'
import { IoWarningSharp } from 'react-icons/io5'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Página no encontrada',
  description: 'Esta página no existe',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className='min-h-screen flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-black via-patina-950 to-emerald-900 text-white relative overflow-hidden px-6 py-12'>
         <IoWarningSharp className="text-patina-400 text-6xl" />
        <Heading>404 - Página no encontrada</Heading>
                <p className="text-gray-400 text-sm md:text-base">
          Esta página no existe
        </p>

        
      </body>
    </html>
  )
}