"use client"

import { useEffect, useState } from "react"
import { motion, animate } from "framer-motion"
import { formatCurrency } from "@/src/utils"

type AmountProps = {
  label: string
  amount: number
}

export default function Amount({ label, amount }: AmountProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(displayValue, amount, {
        duration: 1.0,
        ease: "easeOut",
        onUpdate: (value) => setDisplayValue(value),
      })
      return () => controls.stop()
    }, 1000) 

    return () => clearTimeout(timeout)
  }, [amount])

  return (
    <motion.p
      className="text-base font-bold flex flex-col md:flex-row md:items-center "
      layout
      transition={{ duration: 1 }}
    >
      {label}:{" "}
      <motion.span
        key={amount}
        className="text-emerald-400 ml-2"
      >
        {formatCurrency(displayValue)}
      </motion.span>
    </motion.p>
  )
}
