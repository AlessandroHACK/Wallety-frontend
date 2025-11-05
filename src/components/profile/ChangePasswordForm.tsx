"use client"

import { updatePassword } from "@/src/actions/update-password-action"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function ChangePasswordForm() {
  const [state, dispatch] = useActionState(updatePassword, {
    errors: [],
    success:''
  })
  //toast notification
  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error))
    }
    if (state.success) {
      toast.success(state.success)
      //Router.push('/admin')
    }
  }, [state])
  return (
    <form
      className="mt-8 space-y-4"
      noValidate
      action={dispatch}
    >
      {/* Password actual */}
      <div className="space-y-1">
        <label
          className="block text-sm font-medium text-patina-200"
          htmlFor="currentPassword"
        >
          Contraseña Actual
        </label>
        <input
          id="currentPassword"
          type="password"
          name="currentPassword"
          placeholder="Ingresa tu contraseña actual"
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md 
                     focus:ring-1 focus:ring-patina-500 focus:border-patina-500 
                     transition-colors duration-200"
        />
      </div>

      {/* Nuevo password */}
      <div className="space-y-1">
        <label
          className="block text-sm font-medium text-patina-200"
          htmlFor="newPassword"
        >
          Nueva Contraseña
        </label>
        <input
          id="newPassword"
          type="password"
          name="newPassword"
          placeholder="Ingresa tu nueva contraseña"
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md 
                     focus:ring-1 focus:ring-patina-500 focus:border-patina-500 
                     transition-colors duration-200"
        />
      </div>

      {/* Confirmar nuevo password */}
      <div className="space-y-1">
        <label
          className="block text-sm font-medium text-patina-200"
          htmlFor="password_confirmation"
        >
          Confirmar Nueva Contraseña
        </label>
        <input
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          placeholder="Repite tu nueva contraseña"
          className="w-full px-3 py-2 text-sm border border-patina-200 rounded-md 
                     focus:ring-1 focus:ring-patina-500 focus:border-patina-500 
                     transition-colors duration-200"
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-patina-600 hover:bg-patina-700 text-white 
                   py-2 px-4 rounded-md text-sm font-medium 
                   transition-colors duration-200 
                   focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-patina-500"
      >
        Cambiar Contraseña
      </button>
    </form>
  )
}
