// THEME TOGGLE FEATURE: Added React hooks for state management
import { useState, useEffect } from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
    // THEME TOGGLE FEATURE: State to track current theme (dark/light)
    // Uses lazy initial state to check localStorage on first render only
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('reactfacts-theme')
        return savedTheme || 'dark' // Default to dark theme if no saved preference
    })

    // THEME TOGGLE FEATURE: Effect to apply theme changes to DOM and persist to localStorage
    useEffect(() => {
        // Set data-theme attribute on document root for CSS variable switching
        document.documentElement.setAttribute('data-theme', theme)
        // Save theme preference to browser's localStorage for persistence
        localStorage.setItem('reactfacts-theme', theme)
    }, [theme]) // Re-run when theme state changes

    // THEME TOGGLE FEATURE: Function to switch between themes
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            {/* THEME TOGGLE FEATURE: Pass theme state and toggle function to Navbar */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Main />
        </>
    )
}