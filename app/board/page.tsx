import Image from 'next/image';

export const metadata = {
  title: 'Board of Directors | KUDANS - Koç University Dance Club',
  description: 'Meet the KUDANS Board of Directors - the team behind Koç University Dance Club',
};

export default function BoardPage() {
  return (
    <div className="min-h-screen py-12 bg-black text-white">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Board of Directors</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">
          Meet the dedicated team leading KUDANS for the 2024-2025 academic year
        </p>
        
        {/* Executive Board */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Executive Board</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* President */}
            <div id="tufan-karabaş" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/president.png"
                  alt="Tufan Karabaş - President"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-purple-500">Tango</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-indigo-500">International Ballroom</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Tufan Karabaş</h3>
                <p className="text-purple-400 font-medium mb-4">President</p>
                <p className="text-gray-400 text-sm">
                  Mechanical Engineering & Business Administration, Senior
                </p>
              </div>
            </div>
            
            {/* Vice President */}
            <div id="berkay-koruyucu" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/vicepresident.png"
                  alt="Berkay Koruyucu - Vice President"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-indigo-500">International Ballroom</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Berkay Koruyucu</h3>
                <p className="text-purple-400 font-medium mb-4">Vice President</p>
                <p className="text-gray-400 text-sm">
                  Electrical Engineering, Senior
                </p>
              </div>
            </div>
            
            {/* Treasurer */}
            <div id="murat-sarp-aşık" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/treasurer.png"
                  alt="Murat Sarp Aşık - Treasurer"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-pink-500">Hip Hop</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Murat Sarp Aşık</h3>
                <p className="text-purple-400 font-medium mb-4">Treasurer</p>
                <p className="text-gray-400 text-sm">
                  Computer Engineering, Sophomore
                </p>
              </div>
            </div>
            
            {/* Secretary */}
            <div id="aybüke-gül" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/secretary.png"
                  alt="Aybüke Gül - Secretary"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-pink-500">Hip Hop</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Aybüke Gül</h3>
                <p className="text-purple-400 font-medium mb-4">Secretary</p>
                <p className="text-gray-400 text-sm">
                  Psychology, Freshman
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Department Coordinators */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Department Coordinators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Social Media Coordinator */}
            <div id="zeynep-özveri" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/socialmedia.png"
                  alt="Zeynep Özveri - Social Media Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-pink-500">Hip Hop</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Zeynep Özveri</h3>
                <p className="text-purple-400 font-medium mb-2">Social Media Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Media and Visual Arts, Sophomore
                </p>
              </div>
            </div>
            
            {/* Events Coordinator */}
            <div id="ramazan-efe-demirel" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/events.png"
                  alt="Ramazan Efe Demirel - Events Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-orange-500">Social Latin</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Ramazan Efe Demirel</h3>
                <p className="text-purple-400 font-medium mb-2">Events Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Business Administration, Freshman
                </p>
              </div>
            </div>
            
            {/* Sponsorship & Logistics Coordinator */}
            <div id="defne-durukan" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/sponsorship.png"
                  alt="Defne Durukan - Sponsorship & Logistics"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-pink-500">Hip Hop</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Defne Durukan</h3>
                <p className="text-purple-400 font-medium mb-2">Sponsorship & Logistics</p>
                <p className="text-gray-400 text-sm">
                  Business Administration, Sophomore
                </p>
              </div>
            </div>
            
            {/* Competition Coordinator */}
            <div id="düşüm-naz-haşhaş" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/competition.png"
                  alt="Düşüm Naz Haşhaş - Competition Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-indigo-500">International Ballroom</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Düşüm Naz Haşhaş</h3>
                <p className="text-purple-400 font-medium mb-2">Competition Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Sociology & Economics, Sophomore
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dance Style Coordinators */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Dance Style Coordinators</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Swing */}
            <div id="ahmet-özkan-canbulat" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/swing.png"
                  alt="Ahmet Özkan Canbulat - Swing Dance Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-amber-500">Swing</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Ahmet Özkan Canbulat</h3>
                <p className="text-purple-400 font-medium mb-2">Swing Dance Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Mathematics & Computer Science, Sophomore
                </p>
              </div>
            </div>
            
            {/* Modern */}
            <div id="nisan-dökmeci" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/modern.png"
                  alt="Nisan Dökmeci - Modern Dance Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tags */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-teal-500">Modern</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-indigo-500">International Ballroom</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Nisan Dökmeci</h3>
                <p className="text-purple-400 font-medium mb-2">Modern Dance Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Media and Visual Arts, Sophomore
                </p>
              </div>
            </div>
            
            {/* Tango */}
            <div id="asil-söylev" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/tango.png"
                  alt="Asil Söylev - Tango Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tags */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-purple-500">Tango</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-orange-500">Social Latin</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Asil Söylev</h3>
                <p className="text-purple-400 font-medium mb-2">Tango Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Medicine, Freshman
                </p>
              </div>
            </div>
            
            {/* International Ballroom */}
            <div id="eren-trabzon" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/intballroom.png"
                  alt="Eren Trabzon - International Ballroom Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-indigo-500">International Ballroom</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Eren Trabzon</h3>
                <p className="text-purple-400 font-medium mb-2">International Ballroom Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Industrial Engineering & Computer Science, Senior
                </p>
              </div>
            </div>
            
            {/* Hip Hop */}
            <div id="pervin-manap" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/hiphop.png"
                  alt="Pervin Manap - Hip Hop Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tags */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-pink-500">Hip Hop</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-orange-500">Social Latin</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Pervin Manap</h3>
                <p className="text-purple-400 font-medium mb-2">Hip Hop Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Media and Visual Arts & Psychology, Junior
                </p>
              </div>
            </div>
            
            {/* Social Latin */}
            <div id="neslisu-demirel" className="scroll-mt-24 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src="/images/board/sociallatin.png"
                  alt="Neslisu Demirel - Social Latin Coordinator"
                  fill
                  className="object-cover"
                />
                {/* Dance Style Tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full text-white border border-orange-500">Social Latin</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">Neslisu Demirel</h3>
                <p className="text-purple-400 font-medium mb-2">Social Latin Coordinator</p>
                <p className="text-gray-400 text-sm">
                  Media and Visual Arts & Business Administration, Junior
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 