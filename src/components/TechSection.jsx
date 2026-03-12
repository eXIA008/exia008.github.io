import DomeGallery from "./reactbits/DomeGallery";

export const TechSection = () => {

  return <section id="toolkit" className="relative py-24 z-10 bg-transparent items-center justify-center overflow-hidden">
    {/* Decorative background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

    <div className="container mx-auto max-w-5xl relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
        My <span className="text-primary">Current Tech Stack</span>
      </h2>

      <p className="text-left text-muted-foreground text-lg max-w-2xl mb-12 leading-relaxed">
        I leverage a modern and robust tech stack to build scalable, efficient, and user-friendly applications. 
        From frontend interactivity to backend logic and database management, here are the tools I work with.
      </p>

      <div className="relative w-full h-[500px] flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <DomeGallery
          fit={0.5}
          minRadius={200}
          maxVerticalRotationDeg={8}
          segments={22}
          dragDampening={2}
          grayscale={false}
        />
      </div>
    </div>
  </section>

};
