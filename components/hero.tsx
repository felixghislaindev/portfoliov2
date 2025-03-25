import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  // Set to true if you're open to work, false otherwise
  const openToWork = true

  return (
    <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <div className="relative">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
          <Image src="/profile.png" alt="Felix Ghislain" width={208} height={208} className="object-cover" priority />
        </div>
        {openToWork && (
          <div className="absolute -bottom-2 right-0">
            <Badge className="bg-green-500 text-white hover:bg-green-600 flex items-center gap-1.5 shadow-md text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></span>
              Open to Work
            </Badge>
          </div>
        )}
      </div>

      <div className="text-center md:text-left space-y-3 md:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Felix Ghislain</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-medium">Front-End Software Engineer</h2>
        <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
          Experienced engineer with 5+ years building scalable, user-centric web applications using React.js, Next.js,
          and TypeScript.
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start pt-2">
          <Button asChild size="sm" variant="outline" className="rounded-full text-xs sm:text-sm h-8 sm:h-9">
            <a href="mailto:felixghislain@yahoo.com" className="flex items-center gap-1 sm:gap-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              Email
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-full text-xs sm:text-sm h-8 sm:h-9">
            <Link
              href="https://github.com/felixghislaindev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2"
            >
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-full text-xs sm:text-sm h-8 sm:h-9">
            <Link
              href="https://linkedin.com/in/felixghislain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2"
            >
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-full text-xs sm:text-sm h-8 sm:h-9">
            <Link
              href="https://www.instagram.com/felixxlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2"
            >
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              Instagram
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="rounded-full text-xs sm:text-sm h-8 sm:h-9">
            <a
              href="https://www.dropbox.com/scl/fi/volmegxo8g7ye1oik93wj/felixscv.pdf?rlkey=vnnyl3ryw668dgjl411gym5fn&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2"
            >
              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

