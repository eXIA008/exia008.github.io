import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"
import { useLocation } from "react-router-dom"

const navItems = [
    { name: "Home", href: "/" },
    // {name: "About", href: "/#about"},
    { name: "Blogs", href: "/blogs" },
    // {name: "Projects", href: "/#projects"},
    { name: "Projects", href: "/projects" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
                setIsMenuOpen(false);
            } else {
                setIsHidden(false);
            }
            setLastScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 10);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const isActive = (href) => {
        const currentPath = location.pathname + location.hash
        if (href === "/#hero" && location.pathname === "/" && location.hash === "") {
            return true
        }
        return currentPath === href
    }

    return (
        <>
            <nav className={cn("fixed w-full z-40 transition-transform duration-300 py-6 gradient-navbar",
                isScrolled && isHidden ? "-translate-y-full " : "translate-y-0",
            )}>
                <div className="container flex items-center justify-between">
                    <a className="text-2xl font-bold text-primary flex items-center" href="/">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">daisaqha</span>.
                        </span>
                    </a>
                    {/* desktop nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href}
                                className={cn("text-foreground font-bold hover:text-primary duration-300",
                                    isActive(item.href) && "text-primary"
                                )}>
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* mobile nav */}

                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div className={cn("fixed inset-0 bg-background/95 z-30 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-3xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href}
                            className={cn("text-foreground/80 hover:text-primary font-bold transition-all duration-300",
                                isActive(item.href) && "text-primary"
                            )}
                            onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}
