import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Github, HeartHandshake, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-border/40">
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <HeartHandshake className="h-6 w-6" />
        Get In Touch
      </h2>

      <div className="max-w-2xl mx-auto px-4">
        <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2 text-center">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">I'm always open to discussing new projects and opportunities</p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Contact details in a clean, consistent layout */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 justify-center">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:felixghislain@yahoo.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  felixghislain@yahoo.com
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+447472846992" className="text-muted-foreground hover:text-primary transition-colors">
                  (+44) 07472846992
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <Github className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://github.com/felixghislaindev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/felixghislaindev
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">London, UK</span>
              </div>
            </div>

            {/* Social buttons in a clean row */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center">
              <Button asChild size="sm" className="rounded-full">
                <a
                  href="mailto:felixghislain@yahoo.com?subject=Portfolio%20Inquiry&body=Hi%20Felix,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>

              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a
                  href="https://linkedin.com/in/felixghislain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a
                  href="https://www.instagram.com/felixxlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

