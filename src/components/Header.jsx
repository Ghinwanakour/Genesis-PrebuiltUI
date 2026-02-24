import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import logo from '../assets/image/logo.svg' 

function Header() {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [Scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-all duration-300 ${
        Scrolled ? 'bg-white/15 backdrop-blur-lg' : ''
      }`}>
        <Link to="/">
          <img src={logo} alt="logo" className="h-8.5 w-auto" />  
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/" className="hover:text-gray-300">Agents</Link>
          <Link to="/" className="hover:text-gray-300">Use Cases</Link>
          <Link to="/" className="hover:text-gray-300">Pricing</Link>
          <Link to="/" className="hover:text-gray-300">Docs</Link>
          <Button className="border! border-white/30!">Sign Up</Button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
          </svg>
        </button>
      </nav>

      {MenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-black/20 backdrop-blur-2xl transition duration-300 md:hidden translate-x-0">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>Agents</Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>Use Cases</Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>Docs</Link>
          <Button className='border! border-white/30!'>Sign Up</Button>
          
          <button 
            className="glass p-2 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default Header