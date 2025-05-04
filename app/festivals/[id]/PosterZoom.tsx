'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PosterZoomProps {
  imageSrc: string;
  title: string;
}

export default function PosterZoom({ imageSrc, title }: PosterZoomProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      {/* Clickable poster */}
      <div 
        className="relative w-full shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gray-800 cursor-pointer"
        onClick={toggleZoom}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/70 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
            </svg>
          </div>
        </div>
        <Image 
          src={imageSrc}
          alt={`${title} Festival Poster`}
          width={400}
          height={600}
          className="object-contain object-top bg-gray-900 w-full h-auto"
          priority
        />
      </div>

      {/* Zoom modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={toggleZoom}
        >
          <div className="absolute top-4 right-4 z-10">
            <button 
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div 
            className="relative max-w-3xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={imageSrc}
              alt={`${title} Festival Poster`}
              width={800}
              height={1200}
              className="object-contain w-full h-auto max-h-[90vh]"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
} 