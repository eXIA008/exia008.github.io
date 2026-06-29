import { ArrowDown, FileText } from "lucide-react"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"
import CommandOrbit from "./navigations/CommandOrbit"

const socialLinks = [
  {
    label: "GitHub",
    username: "eXIA008",
    href: "https://github.com/eXIA008",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    username: "daisaqha",
    href: "https://www.linkedin.com/in/daisaqha",
    icon: SiLinkedin,
  },
  {
    label: "Email",
    username: "daisaq.h@gmail.com",
    href: "mailto:daisaq.h@gmail.com",
    icon: SiGmail,
  },
  {
    label: "Resume",
    username: "Resume",
    href: "https://drive.google.com/file/d/1gth9RTIRjswyuhnGLs1Oyg72-WaWBFzP/view?usp=sharing",
    icon: FileText,
  },
]

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden py-28 md:py-24 flex items-center">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 md:grid-cols-[1fr_0.72fr]">
          <div className="mx-auto max-w-3xl text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-4 py-2 text-sm text-muted-foreground shadow-2xl backdrop-blur-xl opacity-0 animate-fade-in">
              C:\Backend Developer
            </div>

            <div className="space-y-3 text-5xl font-semibold tracking-tight md:text-7xl">
              <h1 className="opacity-0 animate-fade-in">Haloo,</h1>
              <h1 className="opacity-0 animate-fade-in [animation-delay:0.15s]">
                I'm{" "}
                <span className="text-primary text-glow opacity-0 animate-fade-in [animation-delay:0.15s]">
                  Daisaq
                </span>
              </h1>
            </div>

            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-foreground/75 md:text-xl">
              <p className="opacity-0 animate-fade-in [animation-delay:0.35s]">
                Undergraduate student at Telkom University majoring in Informatics.
              </p>
              <p className="opacity-0 animate-fade-in [animation-delay:0.5s]">
                Currently learning backend development, focusing on building server-side applications,
                managing databases, and designing efficient APIs.
              </p>
              <p className="opacity-0 animate-fade-in [animation-delay:0.65s]">
                Enjoy exploring how systems work behind the scenes and aim to create scalable,
                reliable, and secure solutions.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row opacity-0 animate-fade-in [animation-delay:0.8s]">
              <a href="#featured-projects" className="cosmic-button w-fit">
                View My Work
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm opacity-0 animate-fade-in [animation-delay:0.45s]">
            <CommandOrbit actions={socialLinks} radius={130} />
          </div>
        </div>
      </div>

      <a href="#toolkit" className="pointer-events-auto absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground">
        <span className="mb-2 text-sm">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  )
}
