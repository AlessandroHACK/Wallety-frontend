"use client"
import React, { useState, useTransition, Fragment } from 'react' 
import Logo from './Logo' 
import { IoLogOutOutline, IoPersonSharp, IoMenu, IoClose, IoHomeSharp, IoSettings } from "react-icons/io5";
import Link from 'next/link';
import NavLink from './NavLink'; 
import { User } from '@/src/schemas'; 

import { Transition, Dialog } from '@headlessui/react';
import { logout } from '@/src/actions/logout-user-action'; 

interface PathItem {
    name: string;
    path: string;
    icon: React.ReactNode;
}

type SideBarProps = {
    user: User,
}


type StartTransition = React.TransitionStartFunction;

interface SidebarContentProps {
    user: User;
    isPending: boolean;
    startTransition: StartTransition;
    paths: PathItem[];
}

export default function SideBar({ user }: SideBarProps) {
    const paths: PathItem[] = [
        { name: 'admin', path: '/admin', icon: <IoHomeSharp />},
        {name: 'ajustes', path: '/admin/profile/settings', icon: <IoSettings />}
    ]
    // Use the 'isOpen' state for the mobile sidebar control
    const [isOpen, setIsOpen] = useState(false)
    const [isPending, startTransition] = useTransition()

    return (
        <div className="flex">
         
            <button
                className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md text-gray-200"
                onClick={() => setIsOpen(true)} // opne menu
            >
                <IoMenu className="w-6 h-6" />
            </button>

            {/* sidebar desktop */}
            <div
                className={`
                    bg-gradient-to-b from-[#0f0f0f] via-[#121212] to-[#1a1a1a]
                    text-gray-300 w-64 fixed top-0 left-0 h-screen shadow-lg backdrop-blur-md flex flex-col justify-between
                    lg:translate-x-0 transition-transform duration-300 ease-in-out
                    hidden lg:flex z-10 
                `}
            >
                {/* sidebar content */}
                <SidebarContent user={user} isPending={isPending} startTransition={startTransition} paths={paths} />
            </div>

            {/*sidebar mobil */}
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setIsOpen(false)}>
                    
                    {/* Overlay */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-300"
                            enterFrom="-translate-x-full" 
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-300"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel 
                                className={`
                                    bg-gradient-to-b from-[#0f0f0f] via-[#121212] to-[#1a1a1a]
                                    text-gray-300 w-64 h-screen shadow-xl flex flex-col justify-between
                                `}
                            >
                                {/* close button */}
                                <button
                                    type="button"
                                    className="absolute top-4 left-2 p-2 text-gray-200" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IoClose className="w-6 h-6" />
                                </button>
                                
                                {/* sidebar content */}
                                <SidebarContent user={user} isPending={isPending} startTransition={startTransition} paths={paths} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

// Helper component for the content, using the typing defined above
function SidebarContent({ user, isPending, startTransition, paths } : SidebarContentProps) {
    return (
        <>
            <div>
               
                <div id="logo" className="my-4 px-6 mx-auto w-max lg:mx-0 lg:w-full">
                    <Logo width={100} height={50} />
                </div>

                <div id="profile" className="px-6 py-10">
                    <Link href="/profile" className="inline-flex space-x-2 items-center">
                        <IoPersonSharp className='w-4 h-4 mr-2' aria-hidden="true" />
                        <span className="text-sm md:text-base font-bold text-gray-200">
                            {user.username}
                        </span>
                    </Link>
                </div>

                <div id="nav" className="w-full px-6 space-y-1">
                    {paths.map((item: PathItem) => (
                        <NavLink key={item.name} item={item} />
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 border-t border-emerald-900">
                <button
                    onClick={() => {
                        startTransition(() => logout())
                    }}
                    disabled={isPending}
                    className="w-full px-2 inline-flex space-x-2 items-center rounded-lg py-3 text-white shadow transition-all hover:bg-gradient-to-r hover:from-[#2a2a2a] hover:to-[#1c1c1c] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <IoLogOutOutline className="w-5 h-5 " />
                    <span>{isPending ? "Cerrando..." : "Cerrar sesión"}</span>
                </button>
            </div>
        </>
    );
}