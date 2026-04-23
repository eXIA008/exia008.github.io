import { projects } from "../data/projects"

export const ProjectsCard = () => {
    const maxStackCount = 5;

    return (
        <div className="relative py-28 md:py-24 z-10 bg-transparent justify-center items-center">
            <div className="container mx-auto max-w-7xl">
                <div className="text-left text-3xl md:text-4xl font-bold tracking-light mb-10">
                    <h1 className="text-foreground opacity-0 animate-fade-in">
                        This is my <span className="text-primary">Projects </span>Collection.
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((projects, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover gradient-border flex flex-col h-full opacity-0 animate-fade-in" style={{ animationDelay: `${(key * 0.15) + 0.1}s` }}>
                            <div className="h-48 overflow-hidden shrink-0">
                                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 text-left flex flex-col grow">
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
                                    {projects.title != "" ? projects.title : "Coming Soon"}
                                </h3>
                                <div className="mt-auto">
                                    <a className="inline-block text-foreground/80 hover:text-primary transition-all duration-300" target={projects.id == 4 ? "" : "_blank"} href={projects.url} >
                                        {(projects.url != "#" && projects.id != 4) ? "View Project" : projects.id == 4 ? "You're Here!" : ""}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        
    )
}