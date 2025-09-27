export default function Navbar({ theme, toggleTheme }) {
    return (
        <header>
            <nav>
                {/* THEME TOGGLE FEATURE: Wrapped logo and title in div for better layout control */}
                <div className="nav-brand">
                    <img src="/images/react-logo.png" alt="React logo" />
                    {/* Changed from <span> to <span className="brand-text"> for CSS variable styling */}
                    <span className="brand-text">ReactFacts</span>
                </div>
                
                {/* THEME TOGGLE FEATURE: New theme switcher button */}
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme} // Function passed down from App component
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} // Accessibility label
                >
                    {/* Dynamic button text and emoji based on current theme */}
                    {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                </button>
            </nav>
        </header>
    )
}