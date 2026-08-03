import { useNavigate } from "react-router-dom"
import { Reveal } from "./Reveal"

export const NotFoundSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-8 flex flex-col items-center justify-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-light">
              Opps, <span className="opacity-0 text-primary animate-fade-in [animation-delay:0.2s]">You are lost!</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xl text-foreground">
              Your travelling too far, this page isn't part of our galaxy.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button onClick={() => navigate(-1)} className="text-xl cosmic-button w-40 gap-2"> Go Back</button>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
