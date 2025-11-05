//is not necessary to use "use client" here because this is a child of a client component
import { validateToken } from "@/src/actions/validate-token-action";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

type ValidateTokenFormProps = {
  token: string
  setToken: Dispatch<SetStateAction<string>>
  setIsValidToken: Dispatch<SetStateAction<boolean>>
}

export default function ValidateTokenForm({ token, setToken, setIsValidToken }: ValidateTokenFormProps) {

  const [isComplete, setIsComplete] = useState(false)
  const validateTokenInput = validateToken.bind(null, token)
  const [state, dispatch] = useActionState(validateTokenInput, {
    errors: [],
    success: ''
  })
  useEffect(() => {
    if (isComplete) {
      startTransition(() => {
        dispatch()
      })
    }
  }, [isComplete, dispatch])

   //manejo de toast 
      useEffect(() => {
          if (state.errors) {
              state.errors.forEach(error => {
                  toast.error(error)
              })
          }
          if (state.success) {
              toast.success(state.success)
              setIsValidToken(true)
          }
  
      }, [state])

  const handleChange = (token: string) => {
     setIsComplete(false)
        setToken(token)
  }

  const handleComplete = () => {
 setIsComplete(true)
  }

  return (
    <div className="flex justify-center gap-2 lg:gap-5 my-10">
      <PinInput
        value={token}
        onChange={handleChange}
        onComplete={handleComplete}
      >
        <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
        <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
        <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
        <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
        <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
        <PinInputField className="h-10 w-10 text-center border border-patina-200 shadow rounded-lg placeholder-transparent" />
      </PinInput>
    </div>
  )
}