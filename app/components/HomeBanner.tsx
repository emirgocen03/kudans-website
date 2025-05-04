'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface HomeBannerProps {
  title: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const HomeBanner = ({ title, buttonText, buttonLink }: HomeBannerProps) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPulsing, setIsPulsing] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // This ensures the component only renders on the client to prevent hydration errors
  useEffect(() => {
    setIsClient(true);
    // Set video start time to 10 seconds
    if (videoRef.current) {
      videoRef.current.currentTime = 10;
    }
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-05-06T01:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        
        // Add pulse animation on seconds change
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 500);
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Set up interval for countdown
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 700;
      setScrollOpacity(Math.max(newOpacity, 0.2));
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Function to add leading zeros
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        transform: `translateY(${isVisible ? '0' : '20px'})`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 1s ease-out, opacity 1s ease-out'
      }}
    >
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-black bg-opacity-60 z-10"
          style={{ opacity: 0.7 + (0.3 * (1 - scrollOpacity)) }}
        />
        {isClient && (
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
          >
            <source src="/videos/homepage_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
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
          <span className="block mt-0">{title}</span>
        </h1>
        
        {/* Countdown Timer */}
        <div 
          className="mb-2"
          style={{ 
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
            transitionDelay: '0.4s'
          }}
        >
          {isClient && (
            <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-white">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold px-2 sm:px-4 py-2 rounded-lg min-w-[1.5ch] sm:min-w-[2ch] flex items-center justify-center">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 sm:mt-3 uppercase tracking-wider">DAYS</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold self-center">:</div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold px-2 sm:px-4 py-2 rounded-lg min-w-[1.5ch] sm:min-w-[2ch] flex items-center justify-center">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 sm:mt-3 uppercase tracking-wider">HOURS</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold self-center">:</div>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold px-2 sm:px-4 py-2 rounded-lg min-w-[1.5ch] sm:min-w-[2ch] flex items-center justify-center">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 sm:mt-3 uppercase tracking-wider">MINS</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold self-center">:</div>
              <div className="flex flex-col items-center">
                <span 
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold px-2 sm:px-4 py-2 rounded-lg min-w-[1.5ch] sm:min-w-[2ch] flex items-center justify-center transition-all duration-300"
                  style={{ 
                    transform: isPulsing ? 'scale(1.05)' : 'scale(1)',
                    color: isPulsing ? '#ffffff' : '#f0f0f0'
                  }}
                >
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 sm:mt-3 uppercase tracking-wider">SECS</span>
              </div>
            </div>
          )}
        </div>
        
        <Link 
          href={buttonLink}
          className="inline-block bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg mt-8"
          style={{ 
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out, background-color 0.3s, transform 0.3s',
            transitionDelay: '0.6s'
          }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner; 