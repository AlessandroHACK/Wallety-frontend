import { FiTrendingUp, FiPieChart, FiShield, FiArrowRight } from "react-icons/fi";
import Heading from "../components/ui/Heading";
import Logo from "../components/ui/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-patina-950 to-emerald-900 text-white relative overflow-hidden px-6 py-12">

      <div className="mb-8">
        <Logo />
      </div>

      <Heading>
        Administra tus gastos con <span className="text-patina-400">Wallety</span>
      </Heading>


      <p className="mt-4 max-w-2xl text-lg text-gray-300 text-center">
        Wallety te ayuda a tomar el control de tus finanzas personales. Registra, analiza y planea tus presupuestos con facilidad y estilo.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl">
        <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center backdrop-blur-sm hover:bg-white/20 transition-all">
          <FiTrendingUp className="text-patina-400 text-4xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Monitorea tu progreso</h3>
          <p className="text-sm text-gray-300">
            Visualiza tus gastos y metas financieras con gráficos claros e intuitivos.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center backdrop-blur-sm hover:bg-white/20 transition-all">
          <FiPieChart className="text-patina-400 text-4xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Organiza tu presupuesto</h3>
          <p className="text-sm text-gray-300">
            Divide tus ingresos por categorías y mantén el control mes a mes.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-center backdrop-blur-sm hover:bg-white/20 transition-all">
          <FiShield className="text-patina-400 text-4xl mb-3" />
          <h3 className="text-lg font-semibold mb-2">Tu seguridad primero</h3>
          <p className="text-sm text-gray-300">
            Tus datos están cifrados y protegidos con tecnología de nivel bancario.
          </p>
        </div>
      </div>


      <Link href={'/auth/login'} className="mt-12 flex items-center gap-2 bg-patina-400 hover:bg-patina-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-emerald-900/50">
        Comienza ahora <FiArrowRight className="text-xl" />
      </Link>


      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_70%)]" />
    </div>
  );
}
