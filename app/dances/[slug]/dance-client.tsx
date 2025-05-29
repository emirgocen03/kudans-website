'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DanceStyle } from '../data';
import { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

interface DanceClientProps {
  dance: DanceStyle;
}

export default function DanceClient({ dance }: DanceClientProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [openStates, setOpenStates] = useState<boolean[]>(dance.instructors.map(() => false));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
  }

  const toggleInstructor = (index: number) => {
    setOpenStates(prev => prev.map((state, i) => i === index ? !state : state));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black z-10" />
          {/* Gradient background based on dance style */}
          <div 
            className={`absolute inset-0 ${
              dance.id === 'hiphop' ? 'bg-gradient-to-r from-blue-600 to-purple-600' :
              dance.id === 'tango' ? 'bg-gradient-to-r from-red-600 to-pink-600' :
              dance.id === 'social-latin' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
              dance.id === 'modern' ? 'bg-gradient-to-r from-teal-500 to-blue-500' :
              dance.id === 'swing' ? 'bg-gradient-to-r from-amber-500 to-orange-600' :
              dance.id === 'international-ballroom' ? 'bg-gradient-to-r from-indigo-600 to-blue-600' :
              'bg-gradient-to-r from-purple-600 to-pink-600'
            }`}
            suppressHydrationWarning
          />
        </div>
        <div className="container-custom relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {dance.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {dance.description}
          </p>
        </div>
      </section>

      {/* Social Media - Instagram - Moved to top */}
      {dance.instagramLink && (
        <section className="py-8 bg-black">
          <div className="container-custom px-4">
            <div className="max-w-md mx-auto">
              <a 
                href={dance.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-5 rounded-xl border border-purple-500/30 hover:from-purple-800/50 hover:to-pink-800/50 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">@{dance.instagramLink.split('/').filter(Boolean).pop()}</p>
                    <p className="text-sm text-gray-400">Official Instagram Account</p>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* About the Dance */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About {dance.title}
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              {dance.longDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Class Schedule
          </h2>
          
          {/* Use a centered flex layout for any dance with 2 schedule items */}
          {dance.schedule.length === 2 ? (
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center gap-6">
              {dance.schedule.map((session, index) => (
                <div key={index} className="bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 text-center md:w-64">
                  <h3 className="font-bold text-xl mb-2">{session.day}</h3>
                  <p className="text-purple-400 text-lg mb-1">{session.time}</p>
                  <p className="text-gray-400">{session.level}</p>
                </div>
              ))}
            </div>
          ) : (
            // Original grid layout for other cases
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {dance.schedule.map((session, index) => (
                <div key={index} className="bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">{session.day}</h3>
                  <p className="text-purple-400 text-lg mb-1">{session.time}</p>
                  <p className="text-gray-400">{session.level}</p>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link 
              href="/schedule" 
              className="inline-block bg-white hover:bg-gray-200 text-black text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Meet Your Instructors
          </h2>
          <div className={`max-w-4xl mx-auto ${dance.instructors.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}`}>
            {dance.instructors.map((instructor, index) => {
              // Color for border and gradient based on dance style
              const colorMap = {
                hiphop: 'from-blue-600 to-purple-600 border-blue-500',
                tango: 'from-red-600 to-pink-600 border-red-500',
                'social-latin': 'from-orange-500 to-red-600 border-orange-500',
                modern: 'from-teal-500 to-blue-500 border-teal-500',
                swing: 'from-amber-500 to-orange-600 border-amber-500',
                'international-ballroom': 'from-indigo-600 to-blue-600 border-indigo-500',
              } as const;
              const styleKey = colorMap[dance.id as keyof typeof colorMap] || 'from-purple-600 to-pink-600 border-purple-500';
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-4 bg-gradient-to-br ${styleKey.split(' ')[0]} ${styleKey.split(' ')[1]} bg-opacity-80 border border-gray-800 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl relative`}
                  onClick={() => toggleInstructor(index)}
                >
                  <div className={`relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 ${styleKey.split(' ')[2]} shadow-lg`}>
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full flex flex-col items-center">
                    <h3 className="font-bold text-2xl mb-1 text-center">{instructor.name}</h3>
                    {instructor.instagram && (
                      <a
                        href={`https://instagram.com/${instructor.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-300 shadow-sm text-gray-900 font-mono font-bold tracking-wide rounded-full mb-2 mt-3 transition-colors text-base hover:bg-gray-100 hover:text-black"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaInstagram className="text-pink-500" />
                        {instructor.instagram}
                      </a>
                    )}
                    <button
                      className="flex items-center gap-2 mt-2 text-sm text-gray-200 focus:outline-none"
                      tabIndex={-1}
                      type="button"
                      onClick={e => { e.stopPropagation(); toggleInstructor(index); }}
                    >
                      <span>{openStates[index] ? 'Hide Bio' : 'Show Bio'}</span>
                      <FiChevronDown className={`transition-transform duration-300 ${openStates[index] ? 'rotate-180' : ''}`} />
                    </button>
                    <div className="w-full border-t border-white/20 my-3"></div>
                    <div
                      className={`transition-all duration-300 overflow-y-auto w-full ${openStates[index] ? 'opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                      {instructor.bio && (
                        <p className="text-gray-100 text-center text-sm px-4 py-2 leading-relaxed">
                          {instructor.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            See {dance.title} in Action
          </h2>
          <div className="max-w-4xl mx-auto aspect-video relative rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={dance.videoUrl}
              title={`${dance.title} Dance Video`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom px-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-purple-800/30 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Try {dance.title}?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us for a class and discover the joy of {dance.title.toLowerCase()} dance. No prior experience needed - just bring your enthusiasm!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 max-w-md mx-auto">
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfxECip1tq0q5OaSZYCpRgo6_7N6Fa-2JzkFqZIOe01Sb5-xA/viewform?usp=dialog" 
                className="bg-white hover:bg-gray-200 text-black text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
                target="_blank" rel="noopener noreferrer"
              >
                Join a Class
              </Link>
              <Link 
                href="/dances" 
                className="bg-transparent hover:bg-white/10 border border-white text-white text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              >
                Explore Other Styles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 