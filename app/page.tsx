import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import ThemeToggle from "@/components/theme-toggle"
import Education from "@/components/education"
import FloatingResume from "@/components/floating-resume"
import BackToTop from "@/components/back-to-top"
import StarCounter from "@/components/star-counter"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 md:top-6 right-4 md:right-6 z-50">
        <ThemeToggle />
      </div>
      <FloatingResume />
      <BackToTop />
      <StarCounter />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

