import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Add CSS for hover effect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Respect iOS safe area for notches */
      .navbar-safe-area {
        padding-top: env(safe-area-inset-top);
      }

      .hover-active {
        background-color: rgb(243 244 246) !important;
        color: rgb(30 58 138) !important;
      }
      .hover-about-active {
        background-color: rgb(249 250 251) !important;
        color: rgb(30 58 138) !important;
      }
      .hover-border-active {
        border-left-color: rgb(30 58 138) !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Keep the spacer in sync with the actual rendered navbar height (mobile menu open/close).
  useEffect(() => {
    const el = navbarRef.current;
    if (!el) return;

    const update = () => {
      setNavbarHeight(el.getBoundingClientRect().height);
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener('resize', update, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
 
    // passive for smoother scrolling on mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const newMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMenuState);
    
    // If closing the menu, blur the button to remove focus/blue border
    if (!newMenuState && mobileMenuButtonRef.current) {
      setTimeout(() => {
        mobileMenuButtonRef.current.blur();
      }, 10);
    }
  };

  // Handle touch end to prevent sticky hover
  const handleTouchEnd = () => {
    // Remove any stuck hover classes on touch devices
    if (mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.classList.remove('hover-active');
      setTimeout(() => {
        mobileMenuButtonRef.current.blur();
      }, 50);
    }
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
  {/* Spacer to prevent content overlap with the fixed navbar */}
  <div aria-hidden="true" style={{ height: navbarHeight }} />
      
  <div ref={navbarRef} className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* Main Navigation */}
        <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            
            {/* Social Media Icons - Larger */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-gray-700 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-gray-700 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="mailto:your.email@example.com"
                className="w-11 h-11 flex items-center justify-center text-gray-700 hover:text-slate-700 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
              >
                Home
              </Link>
                
              <Link 
                to="/about" 
                className="px-4 py-2 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
              >
                Skills
              </Link>
                
              <Link 
                to="/projects" 
                className="px-4 py-2 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
              >
                Projects
              </Link>
                
              <Link 
                to="/experience" 
                className="px-4 py-2 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
              >
                Experience
              </Link>
                
              <Link 
                to="/resume" 
                className="px-4 py-2 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
              >
                Resume
              </Link>
                
              <Link 
                to="/contact" 
                className="px-4 py-2 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                ref={mobileMenuButtonRef}
                onClick={toggleMobileMenu}
                onTouchEnd={handleTouchEnd}
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 outline-none focus:outline-none ${
                  isMobileMenuOpen 
                    ? 'text-navy-700 bg-gray-100' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{ 
                  WebkitTapHighlightColor: 'transparent'
                }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="pb-4 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-navy-700 hover:bg-gray-50 font-medium transition-all duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-navy-700 hover:bg-gray-50 font-medium transition-all duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
              
              <Link 
                to="/projects" 
                className="block px-4 py-3 text-gray-700 hover:text-navy-700 hover:bg-gray-50 font-medium transition-all duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              
              <Link 
                to="/experience" 
                className="block px-4 py-3 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
              
              <Link 
                to="/resume" 
                className="block px-4 py-3 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-slate-700 hover:bg-gray-100 font-medium transition-all duration-200 rounded-lg"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;