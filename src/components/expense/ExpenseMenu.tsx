"use client"

import { Expense } from '@/src/schemas'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { Fragment } from 'react'
import { HiEllipsisVertical } from 'react-icons/hi2'

type ExpenseMenuProps = {
    expenseId: Expense['id']
}
export default function ExpenseMenu({ expenseId }: ExpenseMenuProps) {
    const router = useRouter()
    return (
        <>
            <Menu as="div" className="relative flex-none">
                <MenuButton className="-m-2.5 block p-2.5 text-patina-400 hover:text-patina-600">
                    <span className="sr-only">opciones</span>

                    <HiEllipsisVertical className="h-5 w-5" aria-hidden="true" />

                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black border  py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">

                        <MenuItem>
                            <button
                                type='button'
                                className='block px-3 py-1 text-sm text-left leading-6 text-white hover:bg-gradient-to-r hover:from-[#2a2a2a] hover:to-[#1c1c1c] w-full'
                                onClick={() => router.push(`?showModal=true&editExpenseId=${expenseId}`)}
                            >
                                Editar Gasto
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button
                                type='button'
                                className='w-full block px-3 py-1 text-sm text-left leading-6 text-red-500 hover:bg-gradient-to-r hover:from-[#2a2a2a] hover:to-[#1c1c1c]'
                                onClick={() => router.push(location.pathname + `?showModal=true&deleteExpenseId=${expenseId}`)}
                            >
                                Eliminar Gasto
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>
        </>
    )
}
