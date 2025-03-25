"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function FloatingResume() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {showButton && (
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-40 transition-all duration-300 ease-in-out transform translate-y-0">
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 h-8 md:h-9 text-xs md:text-sm"
          >
            <a
              href="https://www.dropbox.com/scl/fi/volmegxo8g7ye1oik93wj/felixscv.pdf?rlkey=vnnyl3ryw668dgjl411gym5fn&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2"
            >
              <Download className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </Button>
        </div>
      )}
    </>
  )
}

