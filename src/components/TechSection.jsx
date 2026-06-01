import { useState } from "react";
import StackIcon from "tech-stack-icons";

const GRID_TECHS = [
  { name: "c++", label: "C++", color: "#00599C" },
  { name: "python", label: "Python", color: "#3776AB" },
  { name: "go", label: "Golang", color: "#00ADD8" },
  { name: "java", label: "Java", color: "#007396" },
  { name: "php", label: "PHP", color: "#777BB4" },
  { name: "dart", label: "Dart", color: "#0175C2" },
  { name: "js", label: "JavaScript", color: "#F7DF1E" },
  { name: "typescript", label: "TypeScript", color: "#3178C6" },
  { name: "colab", label: "Google Colab", color: "#F9AB00" },
  { name: "flask", label: "Flask", color: "#FFFFFF" },
  { name: "react", label: "React", color: "#61DAFB" },
  { name: "laravel", label: "Laravel", color: "#F05340" },
  { name: "html5", label: "HTML5", color: "#E34F26" },
  { name: "tailwindcss", label: "Tailwind CSS", color: "#06B6D4" },
  { name: "azure", label: "Azure", color: "#0089D6" },
  { name: "mysql", label: "MySQL", color: "#4479A1" },
  { name: "nodejs", label: "Node.js", color: "#339933" },
  { name: "vitejs", label: "Vite", color: "#646CFF" },
  { name: "git", label: "Git", color: "#646CFF" },
  { name: "postman", label: "Postman", color: "#FF6C37" },
];

const SKILLS = [
  { label: "frontend", related: ["react", "js", "typescript", "html5", "tailwindcss", "vitejs"] },
  { label: "web development", related: ["html5", "js", "typescript", "react", "laravel", "tailwindcss", "nodejs", "mysql", "php", "vitejs"] },
  { label: "backend", related: ["mysql", "flask", "php", "go", "java", "python", "c++"] },
  { label: "mobile development", related: ["java", "react", "dart"] },
  { label: "development", related: ["js", "react", "html5", "tailwindcss", "nodejs", "vitejs", "python", "c++", "go", "java", "php"] },
  { label: "responsive design", related: ["html5", "tailwindcss"] },
  { label: "typescript", related: ["typescript", "react"] },
  { label: "javascript", related: ["js", "react", "nodejs"] },
  { label: "python scripting", related: ["python", "flask", "colab"] },
  { label: "tailwind css", related: ["tailwindcss"] },
  { label: "react hooks", related: ["react", "js"] },
  { label: "next.js routing", related: ["react", "js", "nodejs"] },
  { label: "debugging", related: ["python", "c++", "git", "postman"] },
  { label: "database integration", related: ["mysql", "nodejs", "php"] },
  { label: "android development", related: ["java", "dart"] },
  { label: "api consumption", related: ["nodejs", "postman", "nextjs"] },
  { label: "go programming", related: ["go"] },
  { label: "java applications", related: ["java"] },
  { label: "php scripting", related: ["php", "laravel", "mysql"] },
  { label: "colab notebooks", related: ["colab", "python"] },
  { label: "azure cloud", related: ["azure"] }
];

export const TechSection = () => {
  const [activeTech, setActiveTech] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const isTechHighlighted = (techName) => {
    if (activeTech) {
      if (Array.isArray(activeTech)) {
        if (activeTech.includes(techName)) return true;
      } else {
        if (activeTech === techName) return true;
      }
    }

    return false;
  };

  const isSkillHighlighted = (skill, index) => {
    if (hoveredSkill === index) return true;

    if (activeTech && skill.related) {
      if (Array.isArray(activeTech)) {
        return false;
      } else {
        if (Array.isArray(skill.related)) {
          return skill.related.includes(activeTech);
        } else {
          return skill.related === activeTech;
        }
      }
    }

    return false;
  };

  const getSkillColor = (skill) => {
    if (!skill.related) return "";
    const firstTechName = Array.isArray(skill.related) ? skill.related[0] : skill.related;
    const tech = GRID_TECHS.find(t => t.name === firstTechName);
    return tech ? tech.color : "";
  };

  const hasActive = activeTech !== null;

  return (
    <section id="toolkit" className="relative py-24 z-10 bg-transparent items-center justify-center overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
          Current <span className="text-primary">Tools & Skills</span>
        </h2>

        <p className="text-left text-muted-foreground mb-7 leading-relaxed">
          This is the current tools and language that i use to build my projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 flex flex-col justify-center items-center overflow-hidden p-5 min-h-95 md:min-h-auto relative rounded-2xl">
            <div
              className="absolute inset-0 -z-10 opacity-0 select-none pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                backgroundPosition: 'center center'
              }}
            />

            <div className="grid grid-cols-4 gap-5 md:gap-6 justify-center place-items-center">
              {GRID_TECHS.map((tech) => {
                const isHighlighted = isTechHighlighted(tech.name);

                return (
                  <div
                    key={tech.name}
                    onMouseEnter={() => setActiveTech(tech.name)}
                    onMouseLeave={() => setActiveTech(null)}
                    className="group w-15 h-15 md:w-20 md:h-20 flex items-center justify-center select-none cursor-pointer"
                  >
                    <div
                      className={`relative w-full h-full aspect-square rounded-full border transition-all duration-300 pointer-events-none ${isHighlighted
                        ? "border-transparent bg-[#0d1527] scale-105 shadow-lg"
                        : hasActive
                          ? "border-white/5 bg-[#03050c] opacity-35 scale-100"
                          : "border-white/10 bg-[#050915] group-hover:border-white/20 group-hover:bg-[#0b1126] group-hover:scale-105"
                        }`}
                      style={{
                        boxShadow: isHighlighted ? `0 0 25px -4px ${tech.color}` : 'none',
                        borderColor: isHighlighted ? tech.color : ''
                      }}
                    >
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 aspect-square transition-all duration-300 pointer-events-none ${isHighlighted ? "scale-110" : ""
                          } ${tech.name === "laravel" ? "ml-0.5 mb-0.5" : ""
                          }`}
                        style={{
                          filter: isHighlighted
                            ? `drop-shadow(0 0 8px ${tech.color}60) drop-shadow(0 4px 6px rgba(0,0,0,0.3))`
                            : ""
                        }}
                      >
                        <StackIcon
                          name={tech.name}
                          className="w-full h-full object-contain pointer-events-none block m-auto"
                          style={{
                            filter: tech.name === "flask" ? "invert(1) brightness(2)" : ""
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-6 flex flex-wrap gap-x-6 justify-between text-justify py-8 max-w-110">
            {SKILLS.map((skill, index) => {
              const isMatchingActive = isSkillHighlighted(skill, index);
              const skillColor = isMatchingActive ? getSkillColor(skill) : "";
              const hasActive = activeTech !== null;

              return (
                <span
                  key={index}
                  onMouseEnter={() => {
                    setHoveredSkill(index);
                    if (skill.related) {
                      setActiveTech(skill.related);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill(null);
                    setActiveTech(null);
                  }}
                  className={`text-lg font-semibold transition-all duration-300 whitespace-nowrap select-none cursor-pointer tracking-tight  ${isMatchingActive
                    ? "text-foreground text-glow"
                    : hasActive
                      ? "text-neutral-700 opacity-25"
                      : "text-foreground/80"
                    }`}
                  style={{
                    color: isMatchingActive ? skillColor : "",
                    textShadow: isMatchingActive ? `0 0 12px ${skillColor}50` : "none"
                  }}
                >
                  {skill.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
