function SpinnerIcon({ className = 'h-10 w-10 text-navy-800' }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" className="opacity-25" />
      <path d="M12 2a10 10 0 0 1 10 10" className="opacity-75" strokeLinecap="round" />
    </svg>
  );
}

function LoadingSpinner({ fullPage = false, className }) {
  const label = 'Loading...';

  if (fullPage) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/80"
        role="status"
        aria-live="polite"
        aria-label={label}
      >
        <SpinnerIcon />
      </div>
    );
  }

  return (
    <span role="status" aria-live="polite" aria-label={label}>
      <SpinnerIcon className={className ?? 'h-5 w-5 text-blue-900'} />
    </span>
  );
}

/** In-flow placeholder for Suspense — reserves space between navbar and footer. */
export function PageLoadingFallback() {
  const label = 'Loading...';

  return (
    <div
      className="flex flex-1 min-h-[50vh] items-center justify-center py-16"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <SpinnerIcon />
    </div>
  );
}

export default LoadingSpinner;
