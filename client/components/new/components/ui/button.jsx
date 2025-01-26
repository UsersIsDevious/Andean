import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { useState } from "react"
import { api } from "../../services/api"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/50",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/50",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/50",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      width: {
        default: "",
        full: "w-full",
        auto: "w-auto",
        fifth: "w-1/5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "fifth",
    },
  },
)

const handleScoreClick = async () => {
  try {
    const response = await fetch("/getScore")
    const data = await response.json()
    const scoreText = `${data.score}`
    await navigator.clipboard.writeText(scoreText)
    alert("Score copied to clipboard!")
  } catch (error) {
    console.error("Failed to fetch or copy score:", error)
    alert("Failed to fetch or copy score")
  }
}

const Button = React.forwardRef(
  (
    { className, variant, size, width, asChild = false, isMatchmakingButton = false, isScoreButton = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"
    const [isMatchmaking, setIsMatchmaking] = useState(false)
    const [isReady, setIsReady] = useState(false)

    const handleClick = async (event) => {
      if (isMatchmakingButton) {
        try {
          const newStatus = !isMatchmaking
          await api.setMatchmaking(newStatus)
          setIsMatchmaking(newStatus)
        } catch (error) {
          console.error("Failed to set matchmaking status:", error)
        }
      } else if (isScoreButton) {
        await handleScoreClick()
      }

      if (props.onClick) {
        props.onClick(event)
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width, className }))}
        ref={ref}
        {...props}
        onClick={handleClick}
      >
        {isMatchmakingButton
          ? isMatchmaking
            ? "Stop Matchmaking"
            : "Start Matchmaking"
          : isScoreButton
            ? "Copy Score"
            : props.children}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }