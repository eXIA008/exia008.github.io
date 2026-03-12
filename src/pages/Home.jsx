import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { TechSection } from "../components/TechSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden font-roboto">
            {/* Theme Toggle */}
            <ThemeToggle /> 
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <TechSection />
                <ProjectSection />
                {/* <ContactSection /> */}
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}