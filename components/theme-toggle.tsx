"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until client-side
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-8 w-8 md:h-10 md:w-10 bg-background/80 backdrop-blur-sm border-primary/20 opacity-0"
        aria-label="Loading theme toggle"
      >
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full h-8 w-8 md:h-10 md:w-10 bg-background/80 backdrop-blur-sm border-primary/20"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 md:h-5 md:w-5" />
      ) : (
        <Moon className="h-4 w-4 md:h-5 md:w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

