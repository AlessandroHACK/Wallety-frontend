import Logo from "@/src/components/ui/Logo";


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="min-h-screen flex bg-gradient-to-br from-black via-patina-950 to-emerald-900 relative overflow-hidden">

                <div className="absolute top-10 -left-10 w-80 h-80 bg-patina-200 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 -right-10 w-96 h-96 bg-emerald-300 rounded-full opacity-15 blur-3xl animate-pulse-slower"></div>

               
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full px-6 sm:px-12 lg:px-20 py-12">

     
                    <div className="hidden lg:flex flex-col justify-center text-white pr-12">
                        <Logo />
                        <h2 className="text-5xl font-bold mt-10 mb-6 tracking-wide">¡Bienvenido!</h2>
                        <p className="text-blue-100 text-xl max-w-md leading-relaxed font-medium">
                            Administra tus gastos y mejora tus ahorros de forma{" "}
                            <span className="text-patina-300 font-semibold">segura</span> y{" "}
                            <span className="text-patina-300 font-semibold">eficiente</span>.
                        </p>
                    </div>

         
                    <div className="flex flex-col items-center justify-center w-full px-4">
           
                        <div className="lg:hidden flex justify-center mb-6">
                            <Logo />
                        </div>

 
                        <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl text-white">
                            {children}
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    );
}
