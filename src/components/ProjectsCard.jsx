import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "../data/projects"

export const ProjectsCard = () => {
  const maxStackCount = 5

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentProjects = projects.slice(firstIndex, lastIndex)

  return (
    <div className="relative py-28 md:py-24 z-10 bg-transparent justify-center items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left text-3xl md:text-4xl font-bold tracking-light mb-10">
          <h1 className="text-foreground opacity-0 animate-fade-in">
            My <span className="text-primary">Projects </span>Collection.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProjects.map((projects, key) => (
            <div key={key} className="group bg-card rounded-2xl overflow-hidden shadow-xs card-hover gradient-border flex flex-col h-full opacity-0 animate-fade-in" style={{ animationDelay: `${(key * 0.2) + 0.1}s` }}>
              <div className="h-48 overflow-hidden shrink-0">
                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
              </div>
              <div className="p-5 text-left flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.stack.map((stack, index) => {
                    if (index < maxStackCount) {
                      return (<span key={index} className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                        {stack}
                      </span>)
                    } else {
                      return (<span key={index} className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                        ...
                      </span>)
                    }
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <a href={(projects.url != "#" && projects.id != 4) ? "View Project" : projects.id == 4 ? "You're Here!" : ""}> {projects.title != "" ? projects.title : "Coming Soon"} </a>
                </h3>
                <div className="mt-auto">
                  <a className="inline-block text-foreground/80 font-semibold hover:text-primary hover: transition-all duration-300" target={projects.id == 4 ? "" : "_blank"} href={projects.url_github} >
                    {(projects.url_github != "#" && projects.id != 4) ? "View Project" : ""}
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                  </a>
                  <a className="inline-block text-foreground/80 font-semibold hover:text-primary hover: transition-all duration-300" target={projects.id == 4 ? "" : "_blank"} href={projects.id == 4 ? "#" : projects.url_demo} >
                    {(projects.url_demo != "#" && projects.id != 4) ? "View Demo" : projects.id == 4 ? "You're Here!" : ""}
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-lg space-x-6 mt-16 flex flex-cols justify-center">
          <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
            <ChevronLeft className="hover:text-primary" />
          </button>
          <div>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)} style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal", margin: "0 6px", }}>
                {i + 1}
              </button>
            ))}
          </div>
          <button onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalPages}>
            <ChevronRight className="hover:text-primary" />
          </button>
        </div>
      </div>
    </div>


  )
}