import { ArrowRight } from "lucide-react"
import { projects } from "../data/contents"

export const ProjectSection = () => {

    const maxTagsCount = 5;

    return <section id="projects" className="relative py-24 z-10 bg-transparent items-center justify-center">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">
                Featured<span className="text-primary"> Projects</span>
            </h2>

            <p className="text-left text-muted-foreground mb-12">
                Here are some of my projects. Each project is my part of my learning progress
                to have better understanding in web and software development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((projects, key) => {
                    if (projects.featured) {
                        return (
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover gradient-border">
                                <div className="h-48 overflow-hidden">
                                    <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-6 text-left">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects.stack.map((stack, index) => {
                                            if (index < maxTagsCount) {
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
                                        {projects.title != "" ? projects.title : "Coming Soon"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {projects.desc}
                                    </p>
                                    <a className="text-foreground/80 hover:text-primary transition-all duration-300" target={projects.id == 4 ? "" : "_blank"} href={projects.url} >
                                        {(projects.url != "#" && projects.id != 4) ? "View Project" : projects.id == 4 ? "You're Here!" : ""}
                                    </a>
                                </div>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/eXIA008">
                    Check my other Projects <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>
}