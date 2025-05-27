import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/kudans_team.jpg"
          alt="KUDANS Koç University Dance Club Team Photo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white text-center px-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300">KUDANS</span>
          </h1>
        </div>
      </div>

      {/* Content Section with Gradient Overlay */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column - Description */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Our Story
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  KUDANCE, (Koç University Dance Club) was founded in 1999 and it is the most rooted club of Koç University. It has started organizing festivals in the year of 2000. KUDANCE has the biggest student community in the university, as it has the highest number of members. As well as hosting the biggest dance festival among universities in Turkey and teaching professional dance techniques; we are organizing off-school activities and joining national/international competitions.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="lg:col-span-5 bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mt-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    24+
                  </div>
                  <div className="text-gray-400">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-400">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    20+
                  </div>
                  <div className="text-gray-400">Annual Festivals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    6
                  </div>
                  <div className="text-gray-400">Dance Styles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              KUDANS is dedicated to fostering a vibrant dance community at Koç University, promoting artistic expression through various dance styles, and organizing events that celebrate the joy of movement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 