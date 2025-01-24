import * as React from "react"
import { useState, useEffect } from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, value: propValue, onChange, ...props }, ref) => {
  const [localValue, setLocalValue] = useState(propValue)

  useEffect(() => {
    setLocalValue(propValue)
  }, [propValue])

  const handleChange = (e) => {
    const newValue = e.target.value
    setLocalValue(newValue)
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm shadow-blue-500/20",
        className,
      )}
      ref={ref}
      value={localValue}
      onChange={handleChange}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }

