'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HomeBannerProps {
  title: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

const HomeBanner = ({ title, buttonText, buttonLink }: HomeBannerProps) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    // Set video start time to 10 seconds
    if (videoRef.current) {
      videoRef.current.currentTime = 10;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 700;
      setScrollOpacity(Math.max(newOpacity, 0.2));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        transform: `translateY(${isVisible ? '0' : '20px'})`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out'
      }}
      role="banner"
      aria-label="Home banner"
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-black bg-opacity-60 z-10"
          style={{ opacity: 0.7 + (0.3 * (1 - scrollOpacity)) }}
          aria-hidden="true"
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 10.1;
            }
          }}
          className="absolute object-cover w-full h-full"
          style={{ 
            transform: `scale(${1 + (1 - scrollOpacity) * 0.1})`,
            transition: 'transform 0.3s ease-out',
            opacity: 0.9
          }}
          aria-hidden="true"
        >
          <source src="/videos/homepage_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        style={{ 
          opacity: scrollOpacity,
          transform: `translateY(${(1 - scrollOpacity) * 100}px)`,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
        }}
      >
        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          style={{ 
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
            transitionDelay: '0.2s'
          }}
        >
          {title}
        </h1>
        
        <Link 
          href={buttonLink}
          className="inline-block bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:scale-105 hover:shadow-lg mt-8"
          style={{ 
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out, background-color 0.3s, transform 0.3s',
            transitionDelay: '0.6s'
          }}
          aria-label={buttonText}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner; 