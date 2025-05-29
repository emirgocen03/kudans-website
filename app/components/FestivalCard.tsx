'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface FestivalCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}

const FestivalCard = ({ id, title, date, description, imageSrc }: FestivalCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 relative">
      <div className="relative h-96 w-full">
        {/* Date badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-black bg-opacity-80 px-3 py-1 rounded-full border border-white shadow-md">
            <span className="text-white font-semibold tracking-wider">{date}</span>
          </div>
        </div>
        
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Display festival poster image */}
        <Image
          src={imageError ? '/images/placeholder-festival.png' : imageSrc}
          alt={`${title} Festival Poster`}
          fill
          className={`object-cover object-top transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={id === '2025-carnaval'} // Only prioritize the latest festival
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        />
        
        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 transition-all">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          
          <p className="text-gray-200 mb-2 line-clamp-2">{description}</p>
          
          <Link 
            href={`/festivals/${id}`} 
            className="inline-block text-white font-medium border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors"
            aria-label={`View details for ${title} festival`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FestivalCard; 