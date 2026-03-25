import { Moon , Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    // ini bakal ngedetect kira-kira theme terakhir yang ke store di local itu apa biar di apply di pagenya kalo buka di newtab
    useEffect (() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "light") {
            setIsDarkMode(false)
            document.documentElement.classList.add("light")
        } else {
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    
    }, []) 

    const toggleTheme = () => {
        if (!isDarkMode) {
            document.documentElement.classList.remove("light")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        } else {
            document.documentElement.classList.add("light")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
    }
    return <button onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden top-5 right-10 z-50 p-2 rounded-full transition-all duration-300",
            "focus:outline-hidden"
        )}> 
        {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300"/> 
         ) : (
         <Moon className="h-6 w-6 text-blue-900"/>  
        )}</button>
}