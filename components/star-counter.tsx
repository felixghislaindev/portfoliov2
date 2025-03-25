"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient"; // Import Supabase client

export default function StarCounter() {
  const rowId = "234acb06-bb1d-40c5-9e39-c570a4a5cd34"; // Define the rowId here (replace with actual ID)
  const [stars, setStars] = useState(0);
  const [hasStarred, setHasStarred] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load star count from Supabase
  useEffect(() => {
    const fetchStars = async () => {
      const { data, error } = await supabase
        .from("stars")
        .select("count")
        .eq("portfolio_start_id", rowId)
        .single();
      console.log(data, "stars");

      if (error) {
        console.error("Error fetching stars:", error.message);
        return;
      }

      if (!data) {
        console.error("No data returned from Supabase.");
        return;
      }

      setStars(data.count || 0);
    };

    fetchStars();
  }, []); // rowId is static, so it doesn't need to be a dependency

  // Handle the star button click
  const handleStar = async () => {
    if (!hasStarred && !isAnimating) {
      setIsAnimating(true);

      const newStarCount = stars + 1;
      setShowThanks(true);
      setHasStarred(true);

      // Update database
      const { error } = await supabase
        .from("stars")
        .update({ count: newStarCount })
        .eq("portfolio_start_id", rowId);

      if (error) {
        console.error("Error updating stars:", error.message);
      } else {
        setStars(newStarCount);
      }

      setTimeout(() => {
        setShowThanks(false);
        setIsAnimating(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className={`flex items-center gap-2 pr-2 pl-3 py-2 rounded-l-full shadow-lg border border-r-0 
          ${
            hasStarred
              ? "bg-primary text-white"
              : "bg-background hover:bg-primary/10"
          }
          transition-all duration-300 cursor-pointer`}
          onClick={handleStar}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Star Icon with Animation */}
          <motion.div
            className="relative"
            animate={hasStarred ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Star
              className={`h-5 w-5 ${
                hasStarred ? "fill-white text-white" : "fill-none text-primary"
              }
              transition-all duration-300 ${
                isHovering && !hasStarred ? "scale-110" : ""
              }`}
            />
            {/* Tooltip */}
            <AnimatePresence>
              {isHovering && !hasStarred && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded"
                >
                  Star this portfolio!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Star Count + Thanks Message */}
          <AnimatePresence mode="wait">
            {(isHovering || hasStarred) && (
              <motion.div
                key={showThanks ? "thanks" : "count"}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {!hasStarred ? (
                  <span className="text-sm">Like what you see?</span>
                ) : showThanks ? (
                  <span className="text-sm">Thanks!</span>
                ) : (
                  <motion.span className="text-sm" key={stars}>
                    {stars} {stars === 1 ? "star" : "stars"}
                  </motion.span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
