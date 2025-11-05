import { verifySession } from "@/src/auth/dal";
import ProfileForm from "@/src/components/profile/ProfileForm";
import Heading from "@/src/components/ui/Heading";

export default async function EditProfilePage() {
  const {user} = await verifySession()
  return (
    <div className="w-full">
        <Heading>Actualizar Perfil</Heading>
        <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl text-white mt-10">
        <ProfileForm user={user}/>
        </div>
    </div>
  )
}