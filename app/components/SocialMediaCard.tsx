'use client';

import Link from 'next/link';

interface SocialMediaCardProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  handle: string;
  bgColor: string;
}

export function SocialMediaCard({ name, url, icon, description, handle, bgColor }: SocialMediaCardProps) {
  return (
    <Link 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white bg-opacity-5 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
      aria-label={`Visit our ${name} page`}
    >
      <div className={`h-48 ${bgColor} flex items-center justify-center`}>
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-500 transition-colors">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center text-purple-500 font-medium">
          <span>{handle}</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
} 