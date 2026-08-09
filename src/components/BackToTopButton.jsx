import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPageLong, setIsPageLong] = useState(false);

  const handleScroll = () => {
    const quarterHeight = document.documentElement.scrollHeight / 4;
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollPos > quarterHeight);
  };

  const checkPageLength = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    // Less restrictive viewport heights
    setIsPageLong(pageHeight > viewportHeight * 1.2);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    checkPageLength();
    handleScroll();

    // Add both scroll and touchmove listeners for mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    window.addEventListener('resize', checkPageLength);
    
    // Force check on mount
    const checkTimer = setInterval(() => {
      handleScroll();
      checkPageLength();
    }, 500);
    
    setTimeout(() => clearInterval(checkTimer), 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('resize', checkPageLength);
      clearInterval(checkTimer);
    };
  }, []);

  const shouldShow = isVisible && isPageLong;

  return (
    <div className="scroll-to-top">
      <button 
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
        className={`z-[99] back-to-top fixed bottom-6 right-6 md:bottom-8 md:right-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white/90 text-gray-700 shadow-sm transition-all duration-300 group hover:-translate-y-1 hover:scale-110 hover:border-slate-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        ${shouldShow 
          ? 'translate-x-0 opacity-100 visible' 
          : 'translate-x-4 opacity-0 invisible'
        } 
        `}
        style={{
          pointerEvents: shouldShow ? 'auto' : 'none',
          cursor: shouldShow ? 'pointer' : 'default'
        }}
      >
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-gray-600 opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 md:block">
          Top
        </span>

        <div className={`flex items-center justify-center transition-all duration-300
          ${shouldShow ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M6.5 10.5L12 5l5.5 5.5" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default BackToTop;