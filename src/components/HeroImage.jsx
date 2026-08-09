import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

const HeroImage = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <LoadingSpinner className="h-8 w-8 text-white" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </>
  )
}

export default HeroImage
