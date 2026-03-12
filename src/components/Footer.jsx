import { ArrowUp } from "lucide-react"
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si"

export const Footer = () => {
  const scrollToTop =() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
  <footer className="py-6 px-6 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Daisaq Hadya Albar
      </p>
      <div className="space-x-8 flex flex-cols items-center justify-center"> 
        <a href="https://github.com/eXIA008" className="ounded-full">
          <SiGithub className="w-6 h-6 text-muted-foreground hover:scale-[1.15] transition-transform duration-300" />
        </a>
        <a href="www.linkedin.com/in/daisaqha" className="rounded-full">
          <SiLinkedin className="w-6 h-6 text-muted-foreground hover:scale-[1.15] transition-transform duration-300" />
        </a>
        <a href="https://github.com/eXIA008" className="rounded-full">
          <SiGmail className="w-6 h-6 text-muted-foreground hover:scale-[1.15] transition-transform duration-300" />
        </a>
        <a href="https://instagram.com/daisaq_ha" className="rounded-full">
          <SiInstagram className="w-6 h-6 text-muted-foreground hover:scale-[1.15] transition-transform duration-300" />
        </a>
        <a onClick={scrollToTop} className="p-3 ml-15 md:ml-6 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
          <ArrowUp size={20}/>
        </a>
      </div>
      
  </footer> )
}