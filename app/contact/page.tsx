import Link from 'next/link';
import { SocialMediaCard } from '../components/SocialMediaCard';
import { DanceSquadCard } from '../components/DanceSquadCard';

export const metadata = {
  title: 'Contact | KUDANS - Koç University Dance Club',
  description: 'Get in touch with KUDANS - Koç University Dance Club',
};

const socialMediaLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kudans/',
    icon: (
      <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
    description: 'Follow our performances, rehearsals, and dance life',
    handle: '@kudans',
    bgColor: 'from-purple-600 to-pink-500'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@kudans',
    icon: (
      <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
    description: 'Watch our latest dance videos and short performances',
    handle: '@kudans',
    bgColor: 'bg-black'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/kudans/',
    icon: (
      <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    description: 'Connect professionally and follow our corporate updates',
    handle: 'KUDANS',
    bgColor: 'bg-blue-700'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@KUDANS/',
    icon: (
      <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    description: 'Watch our full performances and choreography videos',
    handle: '@KUDANS',
    bgColor: 'bg-red-600'
  }
];

const danceSquads = [
  {
    name: 'KUDANS Tango',
    url: 'https://www.instagram.com/kudans.tango/',
    handle: '@kudans.tango',
    bgColor: 'from-red-600 to-pink-800'
  },
  {
    name: 'KUDANS Swing',
    url: 'https://www.instagram.com/kudansswing/',
    handle: '@kudansswing',
    bgColor: 'from-amber-500 to-orange-700'
  },
  {
    name: 'KUDANS Modern',
    url: 'https://www.instagram.com/kudansmodern/',
    handle: '@kudansmodern',
    bgColor: 'from-teal-500 to-emerald-700'
  },
  {
    name: 'KUDANS Hip Hop',
    url: 'https://www.instagram.com/kudanshiphop.official/',
    handle: '@kudanshiphop.official',
    bgColor: 'from-purple-600 to-violet-900'
  },
  {
    name: 'KUDANS Int. Ballroom',
    url: 'https://www.instagram.com/kudansint.ballroom/',
    handle: '@kudansint.ballroom',
    bgColor: 'from-blue-500 to-indigo-700'
  },
  {
    name: 'KUDANS Social Latin',
    url: 'https://www.instagram.com/kudans.sociallatin/',
    handle: '@kudans.sociallatin',
    bgColor: 'from-red-500 to-yellow-600'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Connect with KUDANS through our social channels
        </p>
        
        {/* Email Feature Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-xl p-8 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-3">Business Inquiries</h2>
              <p className="text-purple-100 text-lg max-w-xl">
                For partnerships, sponsorships, or any business-related questions, 
                our team is ready to assist you.
              </p>
            </div>
            <Link 
              href="mailto:DANCE-CLUB@ku.edu.tr"
              className="bg-white hover:bg-purple-100 text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 hover:shadow-lg flex items-center gap-3"
              aria-label="Send email to DANCE-CLUB@ku.edu.tr"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              DANCE-CLUB@ku.edu.tr
            </Link>
          </div>
        </div>
        
        {/* Social Media Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center">Follow Us On Social Media</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialMediaLinks.map((social) => (
            <SocialMediaCard key={social.name} {...social} />
          ))}
        </div>
        
        {/* Dance-specific Instagram Accounts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Follow Our Dance Squads</h2>
          <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
            Follow our specialized Instagram accounts for specific dance styles
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {danceSquads.map((squad) => (
              <DanceSquadCard key={squad.name} {...squad} />
            ))}
                </div>
              </div>
              
        {/* Location Section */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 mb-16 border border-gray-800">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div className="flex items-start mb-6">
                <div className="bg-purple-800 rounded-full p-3 mr-4 shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Location</h3>
                  <p className="text-white text-lg">Koç University, Rumelifeneri Yolu, 34450 Sarıyer/İstanbul</p>
                  <p className="text-gray-400 mt-2">KUDANS activities are primarily held at the Dance Floors, Student Center and SGKM.</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48028.297947375104!2d29.035540324324238!3d41.20501774761973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409fe093fb4f1e2f%3A0xb51b89285c845350!2sKoc%20University!5e0!3m2!1sen!2str!4v1745625258395!5m2!1sen!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Koç University Location Map"
              ></iframe>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
} 