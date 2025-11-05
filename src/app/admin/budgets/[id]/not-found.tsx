import Heading from "@/src/components/ui/Heading";
import Link from "next/link"

import { IoWarningSharp } from "react-icons/io5"

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center py-16 px-6">

      <div className="flex flex-col items-center gap-4">
        <IoWarningSharp className="text-patina-400 text-6xl" />
        <Heading>Presupuesto <span className="text-patina-400">no encontrado</span> </Heading>
        <p className="text-gray-400 text-sm md:text-base">
          No pudimos encontrar el presupuesto que buscas. Puedes crear uno nuevo fácilmente.
        </p>

        <Link
          href="/admin/budgets/new"
          className="mt-6 inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-patina-400 underline"
        >

          Crear Presupuesto
        </Link>
      </div>
    </div>

  );
}
