import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "EVC",
      role: "Front-End Engineer",
      period: "Jan 2024 – Spet 2024 contract",
      achievements: [
        "Spearheaded the redesign of the Admin Portal, enhancing user experience and boosting platform performance",
        "Developed a scalable and reusable component library, reducing development time across teams",
        "Collaborated with design teams to optimize user flows, increasing satisfaction by 20%",
        "Implemented CI/CD optimizations, reducing deployment times by 30%",
        "Collaborated with designers, product managers, and backend engineers to deliver intuitive features",
        "Implemented accessibility best practices and built responsive UI components using Tailwind CSS",
      ],
      techStack: [
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "Firebase",
        "GitHub Actions",
        "Storybook",
        "Jest",
        "Cypress",
      ],
    },
    {
      company: "PrimaryBid",
      role: "Front-End Engineer",
      period: "Apr 2022 – Aug 2023",
      achievements: [
        "Helped develop Version 2 of the PrimaryBid Platform, a Next.js-powered application enabling retail investors to access capital raises",
        "Maintained a Next.js-based component library using Storybook, ensuring consistency and reusability",
        "Optimized user interface for real-time access to equity raise opportunities with seamless broker integration",
        "Implemented regulatory-compliant features aligned with FCA regulations in the UK",
        "Integrated GraphQL and REST APIs, leveraging Next.js API routes, ISR, and SSR to optimize data-fetching",
        "Developed unit and end-to-end tests using Jest and Cypress boosting platform reliability",
        "Improved Next.js page load performance through code splitting, lazy loading, and static asset optimization",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "REST APIs",
        "Jest",
        "Cypress",
        "Tailwind CSS",
        "Storybook",
      ],
    },

    {
      company: "AND Digital",
      role: "Software Engineer",
      period: "Aug 2021 – Mar 2022",
      achievements: [
        "Delivered a Vue.js application demonstrating AI-driven receipt parsing, reducing errors in expense management systems",
        "Influenced technical tooling decisions and established best practices, improving codebase scalability",
        "Mentored junior developers, fostering growth in JavaScript and Vue.js expertise",
      ],
      techStack: [
        "Vue.js",
        "React.js",
        "JavaScript",
        "Node.js",
        "Jest",
        "Gatsby",
        "Contentful",
        "Express",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
    {
      company: "Spirable",
      role: "Software Engineer",
      period: "Feb 2019 – Mar 2021",
      achievements: [
        "Played a key role in helping the startup grow by building two core applications",
        "Upgraded a dynamic template builder from AngularJS to Vue.js, improving performance and user experience",
        "Collaborated on a workflow manager for Facebook Ads, streamlining ad campaign creation",
        "Refactored spreadsheet manipulation methods, optimizing internal tool functionalities",
        "Contributed to the company's early-stage growth by delivering scalable and maintainable solutions",
      ],
      techStack: [
        "AngularJS",
        "Vue.js",
        "JavaScript",
        "KendoUI",
        "Node.js",
        "Express",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 md:py-16 border-t border-border/40"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-2">
        <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
        Work Experience
      </h2>
      <div className="space-y-6 md:space-y-8 px-4">
        {experiences.map((exp) => (
          <Card
            key={exp.company}
            className="overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm"
          >
            <CardHeader className="pb-2 px-4 md:px-6 pt-4 md:pt-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit md:text-sm font-medium"
                >
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-2 px-4 md:px-6 pb-4 md:pb-6">
              <ul className="list-disc list-inside space-y-1 mb-4 text-muted-foreground text-sm md:text-base">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="pl-2">
                    <span className="pl-2">{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-xs rounded-full text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
