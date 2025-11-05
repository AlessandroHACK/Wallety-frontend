import ChangePasswordForm from "@/src/components/profile/ChangePasswordForm";
import Heading from "@/src/components/ui/Heading";


export default function ChangePasswordPage() {
  return (
    <div className='w-full'>
      <Heading>Cambiar Password</Heading>
      <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl text-white mt-10">
        <ChangePasswordForm />
      </div>

    </div>
  )
}
