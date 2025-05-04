import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Fits | KUDANS - Koç University Dance Club',
  description: 'Exclusive KUDANS merchandise - limited edition apparel and accessories',
};

export default function FitsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 relative overflow-hidden">
      {/* Decorative Lines Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Bold Lines */}
        <div className="absolute top-[15%] left-[-5%] w-[110%] h-1.5 bg-gray-800 opacity-60 rotate-[25deg]"></div>
        <div className="absolute top-[35%] left-[-5%] w-[110%] h-2 bg-purple-900 opacity-40 rotate-[-15deg]"></div>
        <div className="absolute top-[65%] left-[-5%] w-[110%] h-1.5 bg-gray-800 opacity-50 rotate-[18deg]"></div>
        <div className="absolute top-[85%] left-[-5%] w-[110%] h-2 bg-pink-900 opacity-35 rotate-[-22deg]"></div>
        
        {/* Thin Lines */}
        <div className="absolute top-[10%] left-[-5%] w-[110%] h-0.5 bg-gray-700 opacity-50 rotate-[12deg]"></div>
        <div className="absolute top-[28%] left-[-5%] w-[110%] h-0.5 bg-purple-800 opacity-40 rotate-[-8deg]"></div>
        <div className="absolute top-[42%] left-[-5%] w-[110%] h-0.5 bg-gray-700 opacity-45 rotate-[5deg]"></div>
        <div className="absolute top-[55%] left-[-5%] w-[110%] h-0.5 bg-pink-800 opacity-35 rotate-[-10deg]"></div>
        <div className="absolute top-[75%] left-[-5%] w-[110%] h-0.5 bg-gray-700 opacity-50 rotate-[7deg]"></div>
        <div className="absolute top-[90%] left-[-5%] w-[110%] h-0.5 bg-purple-800 opacity-40 rotate-[-5deg]"></div>
        
        {/* Additional Lines */}
        <div className="absolute top-[20%] left-[-5%] w-[110%] h-0.5 bg-blue-700 opacity-45 rotate-[3deg]"></div>
        <div className="absolute top-[50%] left-[-5%] w-[110%] h-1 bg-indigo-700 opacity-40 rotate-[-12deg]"></div>
        <div className="absolute top-[70%] left-[-5%] w-[110%] h-0.5 bg-violet-700 opacity-45 rotate-[15deg]"></div>
        
        {/* Vertical Lines */}
        <div className="absolute top-[-5%] left-[20%] h-[110%] w-0.5 bg-gray-700 opacity-40 rotate-[85deg]"></div>
        <div className="absolute top-[-5%] left-[40%] h-[110%] w-1 bg-purple-900 opacity-30 rotate-[92deg]"></div>
        <div className="absolute top-[-5%] left-[70%] h-[110%] w-0.5 bg-gray-700 opacity-35 rotate-[88deg]"></div>
        <div className="absolute top-[-5%] left-[85%] h-[110%] w-1 bg-pink-900 opacity-30 rotate-[95deg]"></div>
        <div className="absolute top-[-5%] left-[30%] h-[110%] w-0.5 bg-cyan-700 opacity-40 rotate-[87deg]"></div>
        <div className="absolute top-[-5%] left-[60%] h-[110%] w-0.5 bg-teal-700 opacity-40 rotate-[93deg]"></div>
        
        {/* Diagonal Bold Lines */}
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-2.5 bg-indigo-900 opacity-30 rotate-[45deg]"></div>
        <div className="absolute top-[40%] left-[-10%] w-[120%] h-1.5 bg-purple-900 opacity-35 rotate-[135deg]"></div>
        <div className="absolute top-[30%] left-[-10%] w-[120%] h-1.5 bg-pink-800 opacity-30 rotate-[40deg]"></div>
        
        {/* Cross Lines */}
        <div className="absolute top-[25%] left-[25%] w-[30%] h-0.5 bg-gray-600 opacity-50 rotate-[30deg]"></div>
        <div className="absolute top-[25%] left-[25%] w-[30%] h-0.5 bg-gray-600 opacity-50 rotate-[120deg]"></div>
        <div className="absolute top-[65%] left-[65%] w-[20%] h-0.5 bg-gray-600 opacity-45 rotate-[30deg]"></div>
        <div className="absolute top-[65%] left-[65%] w-[20%] h-0.5 bg-gray-600 opacity-45 rotate-[120deg]"></div>
        <div className="absolute top-[45%] left-[15%] w-[20%] h-0.5 bg-purple-700 opacity-40 rotate-[35deg]"></div>
        <div className="absolute top-[45%] left-[15%] w-[20%] h-0.5 bg-purple-700 opacity-40 rotate-[125deg]"></div>
        <div className="absolute top-[75%] left-[30%] w-[25%] h-0.5 bg-blue-700 opacity-35 rotate-[20deg]"></div>
        <div className="absolute top-[75%] left-[30%] w-[25%] h-0.5 bg-blue-700 opacity-35 rotate-[110deg]"></div>
        
        {/* Colorful Accent Lines */}
        <div className="absolute top-[5%] left-[50%] w-[40%] h-1 bg-red-700 opacity-30 rotate-[5deg]"></div>
        <div className="absolute top-[60%] left-[10%] w-[40%] h-1 bg-yellow-700 opacity-30 rotate-[-8deg]"></div>
        <div className="absolute top-[80%] left-[55%] w-[30%] h-1 bg-green-700 opacity-30 rotate-[12deg]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">KUDANS FITS</h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 text-center max-w-[90%] sm:max-w-none mx-auto">
          Limited edition apparel from the hottest dance club
        </p>
        
        {/* Hero Video Section - Modern and Minimalist */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20 relative">
          {/* Vertical Video Container with modern styling */}
          <div className="w-full lg:w-1/3 flex justify-center relative h-[70vh] lg:h-[85vh]">
            <div className="relative w-[320px] h-full rounded-[32px] bg-gradient-to-br from-gray-800 to-black p-1 shadow-[0_8px_32px_rgba(138,75,175,0.3)] rotate-[1deg]">
              {/* Inner Video Container */}
              <div className="absolute inset-[3px] rounded-[28px] overflow-hidden bg-black">
                <video 
                  src="/videos/fits_video.mp4" 
                  className="h-full w-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                ></video>
              </div>
              
              {/* Phone-like top notch */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -left-12 top-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl"></div>
              <div className="absolute -right-10 bottom-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl"></div>
              
              {/* Play button overlay - shows on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/30 backdrop-blur-sm p-5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Abstract decorations */}
            <div className="absolute top-1/4 -left-4 w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent"></div>
            <div className="absolute bottom-1/4 -right-4 w-16 h-[1px] bg-gradient-to-l from-pink-500 to-transparent"></div>
            <div className="absolute top-1/3 -right-4 w-16 h-[1px] bg-gradient-to-l from-blue-500 to-transparent"></div>
            <div className="absolute bottom-1/3 -left-4 w-16 h-[1px] bg-gradient-to-r from-indigo-500 to-transparent"></div>
          </div>
          
          {/* Content Section with minimalist design */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start max-w-2xl">
            <div className="flex flex-col space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                <span className="block">2025 Collection</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Limited Edition</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                The new KUDANS Fits collection has arrived with premium materials and exclusive designs.
                Express your dance identity with our most stylish apparel yet.
              </p>
              
              <Link
                href="#preorder"
                className="inline-flex items-center justify-center text-lg py-4 px-10 mt-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-medium text-white hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 hover:shadow-lg shadow-purple-500/30 group"
              >
                <span>PRE-ORDER NOW</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Collection Showcase */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Our Collection</span>
            <div className="h-1 w-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2025 Collection */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-96 w-full overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/DD43RQSNBOI/embed/"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">2025 Collection</h3>
                <p className="text-gray-400 mb-4">The latest and most exclusive KUDANS merch featuring premium designs.</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-medium">Limited Edition</span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">NEW</span>
                </div>
              </div>
            </div>
            
            {/* 2024 Collection */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-96 w-full overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/C6HXDjMN-wx/embed/"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">2024 Collection</h3>
                <p className="text-gray-400 mb-4">Bold designs inspired by the Nightmare festival and dance culture.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400 font-medium">Bestseller</span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">POPULAR</span>
                </div>
              </div>
            </div>
            
            {/* 2023 Collection */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-96 w-full overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/CqlRe7RKFq0/embed/"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">2023 Collection</h3>
                <p className="text-gray-400 mb-4">Classic designs celebrating the Awards festival and KUDANS legacy.</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-400 font-medium">Heritage</span>
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm">CLASSIC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pre-order Section */}
        <div id="preorder" className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Pre-order Now</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Secure your exclusive KUDANS fits before they sell out.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO7P0Q_aLrLTj2JKCK3kpniohYldfhnzoelvuUAPmTQXHvMA/closedform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg py-4 px-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 hover:shadow-lg shadow-purple-500/30"
            >
              PLACE YOUR ORDER
            </Link>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-purple-600 rounded-full mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-400">All our merchandise is made with high-quality materials for comfort and durability.</p>
          </div>
          
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-pink-600 rounded-full mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Limited Edition</h3>
            <p className="text-gray-400">Each collection is produced in limited quantities, making your fits truly exclusive.</p>
          </div>
          
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-xl border border-gray-800">
            <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">KUDANS Identity</h3>
            <p className="text-gray-400">Represent the KUDANS community and carry the dance club spirit wherever you go.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 