import { useState } from "react";
import { GRID_TECHS, SKILLS } from "../data/skillsTech"
import StackIcon from "tech-stack-icons";

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
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left opacity-0 animate-fade-in [animation-delay:0.75s]">
          Current <span className="text-primary">Tools & Skills</span>
        </h2>

        <p className="text-left text-muted-foreground mb-7 leading-relaxed opacity-0 animate-fade-in [animation-delay:0.85s]">
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

            <div className="grid grid-cols-4 gap-5 md:gap-6 justify-center place-items-center opacity-0 animate-fade-in [animation-delay:0.95s]">
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

          <div className="md:col-span-6 lg:col-span-6 flex flex-wrap gap-x-6 justify-between text-justify py-8 max-w-110 opacity-0  animate-fade-in [animation-delay:1.15s]">
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
