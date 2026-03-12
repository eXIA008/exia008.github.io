import { useNavigate } from "react-router-dom"

export const NotFoundSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto z-10">
        <div className="space-y-8 flex flex-col items-center justify-center"> 
          <h2 className="opacity-0 text-3xl md:text-5xl font-bold text-center mb-4 tracking-light animate-fade-in"> 
            Opps, <span className="opacity-0 text-primary animate-fade-in [animation-delay:0.2s]">You are lost!</span>
          </h2>
          <p className="opacity-0 text-xl text-foreground animate-fade-in [animation-delay:0.4s]">
            Your travelling too far, this page isn’t part of our galaxy. 
          </p>
          <button onClick={() => navigate(-1)} className="opacity-0 text-xl cosmic-button w-40 gap-2 animate-fade-in [animation-delay:0.6s]"> Go Back</button>
        </div>

      </div>
    </section>
  )
}
