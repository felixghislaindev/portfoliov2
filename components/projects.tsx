import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ExternalLink, FolderGit2, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "NextGen Web Solutions",
      description:
        "Built a modern, responsive website using Next.js, React.js, and TypeScript to showcase innovative web solutions for businesses. Implemented SEO optimization, server-side rendering (SSR), and static site generation (SSG) for fast load times and improved search engine visibility. Integrated contact forms and analytics to enhance user engagement and track performance.",
      liveUrl: "https://www.nextgenwebsolutions.co.uk/",
      githubUrl: "#",
      techStack: ["Next.js", "React.js", "TypeScript", "SSR", "SSG", "SEO", "Analytics"],
    },
    {
      title: "HireReady",
      description:
        "A SaaS platform designed to help job seekers, starting with tech professionals, match their skills to job descriptions, understand company culture, and ace their interviews! Think of it as your personal job coach and career guide — all in one platform.",
      liveUrl: "#",
      githubUrl: "https://github.com/felixghislaindev/HireReady",
      techStack: ["Next.js", "React", "TypeScript", "SaaS"],
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16 border-t border-border/40">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-2">
        <FolderGit2 className="h-5 w-5 md:h-6 md:w-6" />
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col h-full border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardHeader className="px-4 md:px-6 pt-4 md:pt-6 pb-2 md:pb-3">
              <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow px-4 md:px-6 py-0">
              <p className="text-muted-foreground mb-4 text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-xs rounded-full text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 md:gap-4 pt-4 px-4 md:px-6 pb-4 md:pb-6">
              {project.githubUrl !== "#" && (
                <Button variant="outline" size="sm" asChild className="h-8 text-xs md:text-sm">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </Link>
                </Button>
              )}
              {project.liveUrl !== "#" && (
                <Button size="sm" asChild className="h-8 text-xs md:text-sm">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Site
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

