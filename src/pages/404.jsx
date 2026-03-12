import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { NotFoundSection } from "../components/NotFoundSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden font-roboto">
            <ThemeToggle />
            <StarBackground />
            <Navbar />
            <main className="grow">
                <NotFoundSection />
            </main>
            <Footer />
        </div>
    )
}