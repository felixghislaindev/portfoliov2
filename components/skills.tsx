import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, GitBranch, Users } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Languages & Frameworks",
      icon: <Code className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />,
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Vue.js",
        "Node.js",
        "TypeScript",
        "Express",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "SCSS/SASS",
      ],
    },
    {
      name: "Testing & DevOps",
      icon: <GitBranch className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />,
      skills: ["Jest", "Cypress", "Playwright", "GitHub Actions", "CI/CD pipelines"],
    },
    {
      name: "Databases & Tools",
      icon: <Database className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />,
      skills: ["PostgreSQL", "MongoDB", "Webpack", "Figma", "Storybook", "GraphQL", "REST APIs"],
    },
    {
      name: "Methodologies",
      icon: <Users className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />,
      skills: ["Agile", "Pair Programming", "Code Reviews", "Accessibility", "Responsive Design", "SEO"],
    },
  ]

  return (
    <section id="skills" className="py-12 md:py-16 border-t border-border/40">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
        {skillCategories.map((category) => (
          <Card key={category.name} className="overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary dark:text-white flex items-center">
                {category.icon}
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-primary/10 text-xs rounded-full text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

