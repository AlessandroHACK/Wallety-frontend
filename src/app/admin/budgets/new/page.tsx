import CreateBudgetForm from "@/src/components/budgets/CreateBudgetForm";
import Heading from "@/src/components/ui/Heading";


export default function CreateBudgetPage() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
          <div>
            <Heading >
              Nuevo presupuesto
            </Heading >
            <p className="text-xl text-patina-400 font-bold mt-2">
              Llena el formulario y crea un nuevo presupuesto
            </p>
          </div>

        </div>
      </div>

      <div className="p-10 mt-10 bg-white/10 backdrop-blur rounded-2xl">
      <CreateBudgetForm/>
      </div>
    </>
  );
}
