import { BookOpen, Coffee, Gamepad2, Globe } from "lucide-react"

export default function About() {
  const hobbies = [
    { name: "Exploring new technologies", icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { name: "Gaming", icon: <Gamepad2 className="h-4 w-4 mr-1" /> },
    { name: "Reading", icon: <Coffee className="h-4 w-4 mr-1" /> },
    { name: "Travelling", icon: <Globe className="h-4 w-4 mr-1" /> },
  ]

  return (
    <section id="about" className="py-12 md:py-16 border-t border-border/40">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">About Me</h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-muted-foreground">
            Experienced Front-End Software Engineer with 5+ years of expertise in building scalable, user-centric web
            applications using modern technologies like React.js, Next.js, and TypeScript.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            I have a proven track record of delivering high-quality software in fast-paced environments, with a passion
            for creating intuitive SaaS platforms and driving innovation.
          </p>

          <div className="pt-4">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {hobbies.map((hobby) => (
                <span
                  key={hobby.name}
                  className="px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 rounded-full text-primary flex items-center text-xs md:text-sm"
                >
                  {hobby.icon}
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

