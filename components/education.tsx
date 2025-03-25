import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master of Arts in Web Design and Content Planning",
      institution: "Greenwich University, London",
    },
    {
      degree: "Bachelor of Science in Computer Science (2:1)",
      institution: "Middlesex University, London",
    },
  ]

  return (
    <section id="education" className="py-12 md:py-16 border-t border-border/40">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-2">
        <GraduationCap className="h-5 w-5 md:h-6 md:w-6" />
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
        {education.map((edu) => (
          <Card key={edu.degree} className="border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-start gap-3 md:gap-4 pb-2 px-4 md:px-6 pt-4 md:pt-6">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-base md:text-lg">{edu.degree}</h3>
              </div>
            </CardHeader>
            <CardContent className="px-4 md:px-6 pb-4 md:pb-6 pt-0 pl-[52px] md:pl-[64px]">
              <p className="text-muted-foreground text-sm md:text-base">{edu.institution}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

