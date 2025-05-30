'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FestivalPreviewProps {
  title: string;
  imageSrc: string;
  link: string;
}

const FestivalPreview = ({ title, imageSrc, link }: FestivalPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Link 
        href={link} 
        className="block relative h-full"
        aria-label={`View ${title} festival details`}
      >
        {/* Container with fixed aspect ratio */}
        <div className="relative h-[24rem] sm:h-[28rem] md:h-[34rem] w-full overflow-hidden flex items-center justify-center">
          {/* Background color */}
          <div className="absolute inset-0 bg-gray-900"></div>
          
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Image container */}
          <div className="relative w-full h-full p-3">
            <Image
              src={imageError ? '/images/placeholder-festival.png' : imageSrc}
              alt={`${title} Festival Preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-contain transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ 
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
                objectPosition: 'center top'
              }}
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => {
                setImageError(true);
                setIsLoading(false);
              }}
            />
          </div>
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-500 pointer-events-none"
            style={{ opacity: isHovered ? 0.7 : 0.5 }}
            aria-hidden="true"
          />
        </div>
        
        {/* Title with semi-transparent background */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div 
            className="rounded-lg backdrop-blur-sm transition-all duration-300 border border-gray-600"
            style={{ 
              backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.6)',
              transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
              padding: isHovered ? '16px' : '12px',
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              {title}
            </h3>
            
            <div 
              className="overflow-hidden flex items-center"
              style={{ 
                opacity: isHovered ? 1 : 0.8,
                height: isHovered ? '24px' : '20px',
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <span className="text-sm font-medium text-white transition-colors duration-300">
                View Festival
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
                style={{ 
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FestivalPreview; 