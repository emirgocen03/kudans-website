import Image from 'next/image';
import Link from 'next/link';
import HomeBanner from './components/HomeBanner';
import FestivalPreview from './components/FestivalPreview';
import SocialMediaLinks from './components/SocialMediaLinks';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HomeBanner 
        title={<Image src="/images/CARNAVAL_banner.png" alt="CARNAVAL Festival Logo" width={1500} height={400} priority style={{margin: '0 auto'}} />} 
        buttonText="Learn More" 
        buttonLink="https://www.instagram.com/kudans/" 
      />

      {/* Festival Schedule */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-white relative inline-block mx-auto w-full">
            <span className="relative inline-block">
              Festival Schedule
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {/* Day 1 */}
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Day 1</h3>
                <span className="bg-purple-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">May 6</span>
              </div>
              
              <div className="space-y-3 sm:space-y-5">
                <div className="bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg">
                  <span className="text-purple-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Morning (10:00 - 13:00)</span>
                  <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">The Awakening</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">A mysterious beginning to our journey... <span className="text-purple-400">What will be revealed?</span></p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg">
                  <span className="text-purple-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Evening (19:00 - 22:00)</span>
                  <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">Shadows and Light</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">As darkness falls, the boundaries between <span className="text-purple-400">reality and illusion blur</span></p>
                </div>
              </div>
            </div>
            
            {/* Day 2 */}
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Day 2</h3>
                <span className="bg-pink-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">May 7</span>
              </div>
              
              <div className="space-y-3 sm:space-y-5">
                <div className="bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg">
                  <span className="text-pink-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Morning (11:00 - 14:00)</span>
                  <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">The Hidden Path</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Discover secret techniques and <span className="text-pink-400">forgotten movements</span> in this enigmatic gathering</p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg">
                  <span className="text-pink-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Evening (19:00 - 22:00)</span>
                  <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">Enigma Variations</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">A sequence of <span className="text-pink-400">cryptic performances</span> that challenge perception and expectation</p>
                </div>
              </div>
            </div>
            
            {/* Day 3 */}
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Day 3</h3>
                <span className="bg-indigo-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">May 8</span>
              </div>
              
              <div className="space-y-3 sm:space-y-5">
                <div className="bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg">
                  <span className="text-indigo-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Morning (10:00 - 13:00)</span>
                  <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">The Convergence</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">All paths <span className="text-indigo-400">meet at the crossroads</span> in this pivotal moment of revelation</p>
                </div>
                
                <div className="bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg">
                  <span className="text-indigo-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Evening (20:00 - 23:00)</span>
                  <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">The Grand Unveiling</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">The final <span className="text-indigo-400">transformation</span> where all secrets will be revealed in a spectacular display</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container-custom py-20 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gray-800 rounded-full opacity-20"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gray-800 rounded-full opacity-20"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Our Mission
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white"></span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            KUDANS is dedicated to fostering a vibrant dance community at Koç University, 
            promoting artistic expression through various dance styles, and organizing 
            events that celebrate the joy of movement.
          </p>
          <div className="mt-10">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfxECip1tq0q5OaSZYCpRgo6_7N6Fa-2JzkFqZIOe01Sb5-xA/viewform?usp=dialog" className="inline-block bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg" target="_blank" rel="noopener noreferrer">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Festival Preview */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-16 text-center text-white relative inline-block mx-auto w-full">
            <span className="relative inline-block">
              Previous Festivals
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            <FestivalPreview
              title="Nightmare 2024"
              imageSrc="/images/festivals/2024_Nightmare/2024poster.png"
              link="/festivals/2024-nightmare"
            />
            <FestivalPreview
              title="Awards 2023"
              imageSrc="/images/festivals/2023_Awards/2023poster.png"
              link="/festivals/2023-awards"
            />
            <FestivalPreview
              title="Galaxy 2022"
              imageSrc="/images/festivals/2022_Galaxy/2022poster.png"
              link="/festivals/2022-galaxy"
            />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="container-custom py-20 relative overflow-hidden">
        <div className="absolute top-40 right-10 w-64 h-64 bg-gray-800 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gray-800 rounded-full opacity-10 blur-2xl"></div>
        
        <h2 className="text-3xl font-bold mb-12 text-center text-white relative inline-block mx-auto w-full">
          <span className="relative inline-block">
            Connect With Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white"></span>
          </span>
        </h2>
        <SocialMediaLinks />
      </section>
    </div>
  );
} 