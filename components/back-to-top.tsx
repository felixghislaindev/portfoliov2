"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {showButton && (
        <div className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-40 transition-all duration-300 ease-in-out transform translate-y-0">
          <Button
            size="icon"
            variant="secondary"
            onClick={scrollToTop}
            className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 h-8 w-8 md:h-10 md:w-10"
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      )}
    </>
  )
}

