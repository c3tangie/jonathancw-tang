import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// Placeholder logo - replace with your actual logo later
const Logo = 'https://via.placeholder.com/64x64/4299e1/ffffff?text=Logo'
// import menuIcon from "@assets/menu_icon.svg"

const Navbar = () => {
  // Keep this for subtle styling if needed, but don't use it to change navbar height.
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
      
  <div ref={navbarRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg navbar-safe-area">
      {/* Top Contact Bar - Hidden when scrolled or on small screens */}
      <div 
        className={`text-white transition-all duration-300 bg-blue-900 hidden md:block ${
          isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'py-2 opacity-100'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center lg:justify-end items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +1 (250) 797-7886
              </span>
              <span className="hidden sm:flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                info@brightwaytocanada.ca
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
        <div className="bg-white shadow-sm">
        <div className={`max-w-screen-2xl mx-auto px-4 lg:px-20 sm:px-6 transition-all duration-300 py-3 ${
          isScrolled ? 'md:py-2.5' : 'md:py-3'
        }`}>
          <div className={`flex justify-between items-center transition-all duration-300 h-12 ${
            isScrolled ? 'md:h-[4.375rem]' : 'md:h-20'
          }`}>
            
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link
                to="/"
                className={`transition-all duration-300 flex items-center group space-x-0 md:space-x-3 origin-left ${
                  isScrolled ? 'md:scale-[0.82]' : 'scale-100'
                }`}
              >
                <img 
                  src={Logo} 
                  alt="Logo" 
                  className={`transition-all duration-300 group-hover:scale-105 h-auto ${
                    'w-12 md:w-16'
                  }`}
                />
                <div className="flex flex-col transition-all duration-300 scale-90 md:scale-100">
                  <span className="font-bold font-outfit text-blue-900 leading-tight transition-all duration-300 text-xl md:text-2xl lg:text-3xl">
                    Brightway to Canada
                  </span>
                  <span className="text-red-600 font-light font-outfit tracking-wide transition-all duration-300 text-xs md:text-sm lg:text-base">
                    Education Consultant
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden xl:flex items-center">
              <nav
                className={`flex transition-all duration-300 origin-right ${
                  isScrolled ? 'scale-[0.92]' : 'scale-100'
                } space-x-12 md:space-x-14`}
              >
                <Link 
                  to="/" 
                  className="group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base md:text-lg"
                >
                  Home
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link 
                  to="/about" 
                  className="group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base md:text-lg"
                >
                  About
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link 
                  to="/projects" 
                  className="group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base md:text-lg"
                >
                  Projects
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link 
                  to="/resume" 
                  className="group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base md:text-lg"
                >
                  Resume
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 text-base md:text-lg"
                >
                  Contact
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button 
                ref={mobileMenuButtonRef}
                onClick={toggleMobileMenu}
                onTouchEnd={handleTouchEnd}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 scale-90 md:scale-100 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                  isMobileMenuOpen 
                    ? 'text-blue-900 bg-gray-100' 
                    : 'text-gray-700'
                }`}
                style={{ 
                  WebkitTapHighlightColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isMobileMenuOpen && window.matchMedia('(hover: hover)').matches) {
                    e.target.classList.add('hover-active');
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove('hover-active');
                }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="transition-all duration-300 h-6 w-auto md:h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="transition-all duration-300 h-6 w-auto md:h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`xl:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 pb-1 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              
              <Link 
                to="/projects" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              
              <Link 
                to="/resume" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
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