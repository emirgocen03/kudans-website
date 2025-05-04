'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FestivalCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}

const FestivalCard = ({ id, title, date, description, imageSrc }: FestivalCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 relative">
      <div className="relative h-96 w-full">
        {/* Date badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-black bg-opacity-80 px-3 py-1 rounded-full border border-white shadow-md">
            <span className="text-white font-semibold tracking-wider">{date}</span>
          </div>
        </div>
        
        {/* Display festival poster image */}
        <Image
          src={imageSrc}
          alt={`${title} Festival Poster`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
        
        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 transition-all">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          
          <p className="text-gray-200 mb-2 line-clamp-2">{description}</p>
          
          <Link 
            href={`/festivals/${id}`} 
            className="inline-block text-white font-medium border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FestivalCard; 