"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavLinkProps = {
    item: {
        name: string,
        path: string,
        icon: React.ReactNode
    }
}
export default function NavLink({ item }: NavLinkProps) {
    const pathName = usePathname()
    return (
        <Link
            href={item.path}
            className={`w-full px-2 inline-flex space-x-2 items-center rounded-lg py-3 text-white shadow transition-all
        ${pathName === item.path
                    ? "bg-gradient-to-r from-[#2a2a2a] to-[#1c1c1c]"
                    : "hover:bg-gradient-to-r hover:from-[#2a2a2a] hover:to-[#1c1c1c]"
                }`}
        >

            <div className='w-4 h-4 mr-2' aria-hidden="true" >{item.icon}</div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5">{item.name}</span>
            </div>
        </Link>
    )
}
