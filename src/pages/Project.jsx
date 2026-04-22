import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectsCard } from "../components/ProjectsCard";

export const Project = () => {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden font-roboto">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main>
                <ProjectsCard />
            </main>

            <Footer />
        </div>
    )
};
