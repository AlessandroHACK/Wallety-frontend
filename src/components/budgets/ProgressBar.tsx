"use client"

import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

type ProgressBarProps = {
  percentage: number
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  const [displayedPercentage, setDisplayedPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayedPercentage(percentage)
    }, 1000)

    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="flex justify-center h-40 w-40">
      <CircularProgressbar
        value={displayedPercentage}
        text={`${displayedPercentage}% Gastado`}
        styles={buildStyles({
          pathColor: displayedPercentage >= 100 ? '#DC2626' : '#8dbbad',
          textColor: displayedPercentage >= 100 ? '#DC2626' : '#00d492',
          textSize: 8,
          pathTransitionDuration: 1,
        })}
      />
    </div>
  )
} 
