import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"
import { useLocation } from "react-router-dom"

const navItems = [
  { name: "Home", href: "/" },
  // {name: "About", href: "/#about"},
  // { name: "Blogs", href: "/blogs" },
  { name: "Projects", href: "/projects" },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href) => {
    const hashPath = location.href ?? ""
    const currentPath = location.pathname + hashPath

    return currentPath === href + "/" || currentPath === href
  }

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-40 w-full bg-transparent pointer-events-none">
        <div
          className={cn(
            "mx-auto transition-all duration-700 ease-[cubic-bezier(0.20,1,0.36,1)]",
            "pointer-events-auto will-change-[width,max-width,margin-top,padding,border-radius,background-color,border-color,box-shadow,backdrop-filter]",
            isScrolled
              ? "mt-4 w-[calc(100%-1rem)] max-w-3xl rounded-full bg-background/65 py-3 px-6 inset-ring-[0.5px] inset-ring-primary backdrop-blur-xl"
              : "mt-0 w-full max-w-7xl rounded-none bg-transparent py-6 px-8 shadow-none gradient-navbar",
          )}
        >
          <div className="flex items-center justify-between">
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
        </div>
      </nav>

      <div className={cn("fixed inset-0 bg-background/95 z-30 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-8 text-5xl">
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
