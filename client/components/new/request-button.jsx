"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { fetchWithTimeout } from "../../lib/utils"

export function RequestButton({ url, method = "GET", body, onSuccess, onError, children, ...props }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await fetchWithTimeout(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      })
      if (response.ok) {
        onSuccess && onSuccess(await response.json())
      } else {
        onError && onError(await response.text())
      }
    } catch (error) {
      onError && onError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isLoading} {...props}>
      {isLoading ? "Loading..." : children}
    </Button>
  )
}

