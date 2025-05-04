'use client';

import Link from 'next/link';
import { DanceStyle } from './data';

interface DancesClientProps {
  danceStyles: DanceStyle[];
}

export default function DancesClient({ danceStyles }: DancesClientProps) {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900" />
        </div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Our Dance Styles
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover the diverse dance styles we teach and perform at KUDANS
          </p>
        </div>
      </section>

      {/* Dance Styles Grid */}
      <section className="pt-0 pb-16 -mt-10 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {danceStyles.map((dance) => (
              <Link 
                key={dance.id} 
                href={`/dances/${dance.id}`}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Colorful background based on dance style */}
                <div className={`absolute inset-0 ${
                  dance.id === 'hiphop' ? 'bg-gradient-to-br from-blue-600/90 to-purple-600/90' :
                  dance.id === 'tango' ? 'bg-gradient-to-br from-red-600/90 to-pink-600/90' :
                  dance.id === 'social-latin' ? 'bg-gradient-to-br from-orange-500/90 to-red-600/90' :
                  dance.id === 'modern' ? 'bg-gradient-to-br from-teal-500/90 to-blue-500/90' :
                  dance.id === 'swing' ? 'bg-gradient-to-br from-amber-500/90 to-orange-600/90' :
                  dance.id === 'international-ballroom' ? 'bg-gradient-to-br from-indigo-600/90 to-blue-600/90' :
                  'bg-gradient-to-br from-purple-600/90 to-pink-600/90'
                }`} />
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 -ml-12 -mb-12"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight leading-tight">
                      {dance.title}
                    </h3>
                    
                    <p className="text-white/80 mb-6">
                      {dance.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/20">
                    <span className="text-sm uppercase tracking-widest text-white/70 font-medium">
                      Explore
                    </span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                {/* Hover animation overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-purple-800/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Join Our Dance Classes
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              Whether you're a complete beginner or an experienced dancer, we have classes for all levels. 
              Our passionate instructors will guide you through each step of your dance journey.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
              <Link 
                href="/schedule" 
                className="bg-white hover:bg-gray-200 text-black text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              >
                View Class Schedule
              </Link>
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfxECip1tq0q5OaSZYCpRgo6_7N6Fa-2JzkFqZIOe01Sb5-xA/viewform?usp=dialog" 
                className="bg-transparent hover:bg-white/10 border border-white text-white text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
                target="_blank" rel="noopener noreferrer"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 