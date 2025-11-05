import { verifySession } from "@/src/auth/dal";
import SideBar from "@/src/components/ui/SideBar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user } = await verifySession();

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] via-[#121212] to-[#1a1a1a] w-screen min-h-screen antialiased text-gray-100 selection:bg-gray-700 selection:text-white p-6">
      

      <div className="flex">
        <SideBar user={user} />
        <main className="flex-1 w-full lg:ml-64 p-8 text-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
