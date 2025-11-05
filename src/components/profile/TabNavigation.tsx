'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// React Icons
import { IoPersonSharp, IoLockClosed } from 'react-icons/io5'; 

// Las rutas que engloba tu layout de administración
const tabs = [
    { name: 'Ajustes', href: '/admin/profile/settings', icon: IoPersonSharp },
    { name: 'Password', href: '/admin/profile/password', icon: IoLockClosed },
];

export function TabNavigation() {
    const pathname = usePathname();

    return (
        <div className="flex justify-center  border-b border-patina-400 mb-5 shadow-lg"> 

            {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                const baseClasses = "flex items-center space-x-2 px-6 py-3 font-medium text-sm transition-all duration-200 border-b-2";
                const activeClasses = "text-emerald-400 border-emerald-400";
                const inactiveClasses = "text-white border-transparent hover:text-emerald-400 hover:border-emerald-400/50"; 

                return (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                    >
                        <tab.icon className="h-5 w-5" />
                        <span>{tab.name}</span>
                    </Link>
                );
            })}
        </div>
    );
}