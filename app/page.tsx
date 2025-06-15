import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import HomeBanner from './components/HomeBanner';
import SocialMediaLinks from './components/SocialMediaLinks';

// Dynamically import PreviousFestivalsSection
const DynamicPreviousFestivals = dynamic(() => import('./components/PreviousFestivalsSection'), {
  // You can add a loading component here if desired
  // loading: () => <p>Loading festivals...</p>,
});

export const metadata = {
  title: "KUDANS - Koç University Dance Club",
  description: "KUDANS, Koç University Dance Club, is Istanbul's premier collegiate dance community. Since 2001, we've been inspiring artistic excellence through international ballroom, Latin, hip-hop, and modern dance. Join our award-winning performances, workshops, and festivals that shape Turkey's dance culture.",
  openGraph: {
    title: "KUDANS - Koç University Dance Club",
    description: "KUDANS, Koç University Dance Club, is Istanbul's premier collegiate dance community. Since 2001, we've been inspiring artistic excellence through international ballroom, Latin, hip-hop, and modern dance. Join our award-winning performances, workshops, and festivals that shape Turkey's dance culture.",
    url: "https://kudans.co",
    siteName: "KUDANS",
    locale: "tr_TR",
    type: "website",
  },
};

const festivalSchedule = [
  {
    day: 1,
    date: "May 6",
    color: "purple",
    events: [
      { time: "10:30 - 11:30", title: "Music Start" },
      { time: "11:30 - 12:30", title: "Morning Yoga" },
      { time: "12:45 - 13:00", title: "Science Gate Announcement" },
      { time: "13:00 - 13:30", title: "Social Dance" },
      { time: "13:30 - 15:00", title: "Fair Games" },
      { time: "15:00 - 16:00", title: "Ümit Sönmezler Hip-hop Workshop" },
      { time: "16:00 - 17:00", title: "Cha Cha Workshop" },
      { time: "20:00", title: "SHOW TIME (Doors open at 19:30)", isShow: true }
    ]
  },
  {
    day: 2,
    date: "May 7",
    color: "pink",
    events: [
      { time: "10:30 - 11:30", title: "Music Start" },
      { time: "11:30 - 12:15", title: "Social Dance" },
      { time: "12:00", title: "BIZ Atölye (With Kaldans in Sports Hall)" },
      { time: "12:00 - 12:45", title: "Emir Göcen Tap Workshop" },
      { time: "12:45 - 13:00", title: "Science Gate Announcement" },
      { time: "13:30 - 14:30", title: "Nazlıhan Vardarlı High Heels Workshop" },
      { time: "14:30 - 16:00", title: "Game Time" },
      { time: "16:00", title: "İlayda Deringör & Gökdağ Yalçın (Tango)" },
      { time: "19:00", title: "SHOW TIME (Doors open at 18:30)", isShow: true }
    ]
  },
  {
    day: 3,
    date: "May 8",
    color: "indigo",
    events: [
      { time: "10:30 - 11:30", title: "Music Start" },
      { time: "11:45 - 12:40", title: "Bora Aktaş & İlbilge Acır (Swing Workshop)" },
      { time: "12:45 - 13:00", title: "Science Gate Announcement" },
      { time: "13:00 - 14:00", title: "Social Dance & Fair Games" },
      { time: "14:00 - 14:50", title: "Tuana & Selena (Hip-hop Workshop)" },
      { time: "15:00 - 16:00", title: "Emek & Büşra Yeter" },
      { time: "16:00 - 17:30", title: "Soul Train" },
      { time: "19:00", title: "SHOW TIME (Doors open at 18:30)", isShow: true }
    ]
  }
];

const previousFestivals = [
  {
    title: "Nightmare 2024",
    imageSrc: "/images/festivals/2024_Nightmare/2024poster.png",
    link: "/festivals/2024-nightmare"
  },
  {
    title: "Awards 2023",
    imageSrc: "/images/festivals/2023_Awards/2023poster.png",
    link: "/festivals/2023-awards"
  },
  {
    title: "Galaxy 2022",
    imageSrc: "/images/festivals/2022_Galaxy/2022poster.png",
    link: "/festivals/2022-galaxy"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HomeBanner 
        title={
          <div className="w-full max-w-[1500px] mx-auto">
            <Image 
              src="/images/CARNAVAL_banner.png" 
              alt="KUDANS Carnaval Festival 2025 Banner" 
              width={1500} 
              height={400} 
              priority 
              className="w-full h-auto"
            />
          </div>
        } 
        buttonText="Learn More" 
        buttonLink="https://www.instagram.com/kudans/" 
      />

      {/* Festival Schedule */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 relative overflow-hidden" aria-labelledby="schedule-heading">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 id="schedule-heading" className="text-3xl font-bold text-center text-white relative inline-block">
              <span className="relative inline-block">
                Festival Schedule
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
              </span>
            </h2>
            <div className="relative">
              <span className="animate-ping absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-bold bg-red-600 text-white shadow-lg shadow-red-500/30">
                PAST
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {festivalSchedule.map((day) => (
              <div key={day.day} className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Day {day.day}</h3>
                  <span className={`bg-${day.color}-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>{day.date}</span>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {day.events.map((event, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-r from-gray-900 to-black p-3 sm:p-4 rounded-lg ${
                        event.isShow ? `from-${day.color}-900 to-${day.color}-800` : ''
                      }`}
                    >
                      <span className={`text-${day.color}-400 font-semibold text-xs sm:text-sm uppercase tracking-wider`}>
                        {event.time}
                      </span>
                      <h4 className="text-white font-bold mt-1 mb-1 sm:mb-2 text-base sm:text-lg">
                        {event.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container-custom py-20 relative overflow-hidden" aria-labelledby="mission-heading">
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gray-800 rounded-full opacity-20"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gray-800 rounded-full opacity-20"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 id="mission-heading" className="text-3xl font-bold mb-8 text-white relative inline-block">
            Our Mission
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white"></span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            KUDANS is dedicated to fostering a vibrant dance community at Koç University, 
            promoting artistic expression through various dance styles, and organizing 
            events that celebrate the joy of movement.
          </p>
          <div className="mt-10">
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxECip1tq0q5OaSZYCpRgo6_7N6Fa-2JzkFqZIOe01Sb5-xA/viewform?usp=dialog" 
              className="inline-block bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300 hover:scale-105 hover:shadow-lg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Festival Preview - Now dynamically loaded */}
      <DynamicPreviousFestivals previousFestivals={previousFestivals} />

      {/* Social Media */}
      <section className="container-custom py-20 relative overflow-hidden" aria-labelledby="social-heading">
        <div className="absolute top-40 right-10 w-64 h-64 bg-gray-800 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gray-800 rounded-full opacity-10 blur-2xl"></div>
        
        <h2 id="social-heading" className="text-3xl font-bold mb-12 text-center text-white relative inline-block mx-auto w-full">
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