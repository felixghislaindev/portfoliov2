"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// In a real application, you would fetch this from a database
// For this demo, we'll simulate some initial stars
const INITIAL_STARS = 42

export default function StarCounter() {
  const [stars, setStars] = useState(INITIAL_STARS)
  const [hasStarred, setHasStarred] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Load stars from localStorage on component mount
  useEffect(() => {
    const savedStars = localStorage.getItem("portfolio-stars")
    const userStarred = localStorage.getItem("user-starred") === "true"

    if (savedStars) {
      setStars(Number.parseInt(savedStars, 10))
    } else {
      // If no saved stars, initialize with our simulated count
      localStorage.setItem("portfolio-stars", INITIAL_STARS.toString())
    }

    if (userStarred) {
      setHasStarred(true)
    }
  }, [])

  const handleStar = () => {
    if (!hasStarred && !isAnimating) {
      setIsAnimating(true)

      // Animate star count up
      const newStarCount = stars + 1
      setShowThanks(true)
      setHasStarred(true)

      // Animate the counter incrementing
      setTimeout(() => {
        setStars(newStarCount)

        // Save to localStorage
        localStorage.setItem("portfolio-stars", newStarCount.toString())
        localStorage.setItem("user-starred", "true")
      }, 300)

      // Hide thanks message after 2 seconds
      setTimeout(() => {
        setShowThanks(false)
        setIsAnimating(false)
      }, 2000)
    }
  }

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-40">
      <div
        className={`flex items-center gap-2 pr-2 pl-3 py-2 rounded-l-full shadow-lg backdrop-blur-sm border border-r-0 
          ${
            hasStarred
              ? "bg-primary/90 border-primary/50 text-white"
              : "bg-background/90 border-primary/20 hover:bg-primary/10"
          } transition-all duration-300 ${!hasStarred ? "cursor-pointer" : ""} group`}
        onClick={handleStar}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="relative"
          animate={hasStarred ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.5, times: [0, 0.5, 1] }}
        >
          <Star
            className={`h-5 w-5 md:h-6 md:w-6 ${hasStarred ? "fill-white text-white" : "fill-none text-primary"} 
              transition-all duration-300 ${isHovering && !hasStarred ? "scale-110" : ""}`}
          />

          {isHovering && !hasStarred && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded"
            >
              Star this portfolio!
            </motion.div>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {(isHovering || hasStarred) && (
            <motion.div
              key={showThanks ? "thanks" : "count"}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {!hasStarred ? (
                <span className="text-sm whitespace-nowrap">Like what you see?</span>
              ) : showThanks ? (
                <span className="text-sm whitespace-nowrap">Thanks!</span>
              ) : (
                <motion.span
                  className="text-sm whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={stars}
                >
                  {stars} {stars === 1 ? "star" : "stars"}
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

