import { ArrowDown, FileText } from "lucide-react"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

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
                <span className="text-primary opacity-0 animate-fade-in [animation-delay:0.15s]">
                  Daisaq
                </span>
              </h1>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 opacity-0 animate-fade-in [animation-delay:0.25s]">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-background/35 p-3 text-foreground/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/10 hover:text-foreground">
                    <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="truncate text-sm font-medium">{link.username}</span>
                  </a>
                )
              })}
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
            <div className="relative flex aspect-square items-center justify-center rounded-full border border-white/10 bg-background/35 backdrop-blur-xl">
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-primary/20" />
              <div className="absolute left-1/2 top-10 h-px w-px rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              <div className="absolute bottom-20 right-14 h-1 w-1 rounded-full bg-primary shadow-[0_0_14px_rgba(139,92,246,0.9)]" />
              <div className="absolute left-14 top-1/3 h-1 w-1 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.7)]" />

              <div className="relative z-10 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-background text-4xl font-semibold text-primary">
                  D
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-foreground">Daisaqha</h2>
                <p className="mt-2 text-sm text-muted-foreground">Backend · API · Database</p>
              </div>
            </div>
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
