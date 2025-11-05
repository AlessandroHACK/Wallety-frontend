"use client"

import { updateUser } from "@/src/actions/update-user-action"
import { User } from "@/src/schemas"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

type ProfileFormProps = {
    user: User
}

export default function ProfileForm({user} : ProfileFormProps) {
    const [state, dispatch] = useActionState(updateUser, {
        errors: [],
        success: ''
    })

  //toast notification
  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error))
    }
    if (state.success) {
      toast.success(state.success)
    }
  }, [state])

  return (
    <form
      className="mt-8 space-y-4"
      noValidate
      action={dispatch}
    >
      {/* Nombre de usuario */}
      <div className="space-y-1">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-patina-200"
        >
          Nombre de Usuario
        </label>
        <input
          id="username"
          type="name"
          name="username"
          defaultValue={user.username}
          placeholder="Ingresa tu nombre de usuario"
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md 
                     focus:ring-1 focus:ring-patina-500 focus:border-patina-500 
                     transition-colors duration-200"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-patina-200"
        >
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={user.email}
          placeholder="Ingresa tu correo electrónico"
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md 
                     focus:ring-1 focus:ring-patina-500 focus:border-patina-500 
                     transition-colors duration-200"
        />
      </div>

      {/* Botón de guardar */}
      <button
        type="submit"
        className="w-full bg-patina-600 hover:bg-patina-700 text-white 
                   py-2 px-4 rounded-md text-sm font-medium 
                   transition-colors duration-200 
                   focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
      >
        Guardar Cambios
      </button>
    </form>
  )
}
