'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiX } from 'react-icons/fi';
import { danceStyles } from '../dances/data';

// Define interface for menu items
interface MenuItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownId?: string;
}

// Define interface for festival items
interface FestivalItem {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}

// Define interface for dance items
interface DanceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  schedule: { day: string; time: string; level: string }[];
  instructors: { name: string; title?: string; instagram?: string; image: string; bio?: string }[];
  imagePath: string;
  videoUrl: string;
  galleryImages: string[];
  instagramLink?: string;
}

// Define interface for board members
interface BoardMember {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
}

// Define interface for dance instructors
interface DanceInstructor {
  id: string;
  name: string;
  title?: string;
  instagram?: string;
  image: string;
  bio?: string;
  danceStyle: string;
}

// Define interface for search results
interface SearchResult {
  id: string;
  title: string;
  type: 'festival' | 'dance' | 'board' | 'instructor' | 'dancer';
  date?: string;
  path: string;
  description?: string;
  schedule?: { day: string; time: string; level: string }[];
  instructors?: { name: string; title?: string; instagram?: string }[];
  department?: string;
  danceStyle?: string;
  teams?: string[];
}

// Dancer search data (should match team page)
const teamDancers: { name: string; teams: string[] }[] = [
  { name: "Abdulmelih Avlukyarı", teams: ["Tango"] },
  { name: "Arda Ayan", teams: ["Tango"] },
  { name: "Asil Söylev", teams: ["Tango", "Social Latin"] },
  { name: "Azra Kolancılar", teams: ["Tango"] },
  { name: "Bahar Şen", teams: ["Tango"] },
  { name: "Elif Kızılöz", teams: ["Tango"] },
  { name: "Enes Tunç", teams: ["Tango"] },
  { name: "Erkan Güneş", teams: ["Tango"] },
  { name: "İlayda Baştaş", teams: ["Tango"] },
  { name: "Nilsu Tuğcu", teams: ["Tango"] },
  { name: "Özlem Ürküt", teams: ["Tango", "International Ballroom"] },
  { name: "Pınar Çırpan", teams: ["Tango"] },
  { name: "Selin İdil Öncül", teams: ["Tango"] },
  { name: "Sude Aslan", teams: ["Tango"] },
  { name: "Tufan Karabaş", teams: ["Tango", "International Ballroom"] },
  { name: "Yusuf Mert Öztürk", teams: ["Tango"] },
  { name: "Ahsen Aysel", teams: ["Hiphop"] },
  { name: "Alperen Bulut", teams: ["Hiphop"] },
  { name: "Defne Durukan", teams: ["Hiphop"] },
  { name: "Derin Barlas", teams: ["Hiphop"] },
  { name: "Enis Yürük", teams: ["Hiphop"] },
  { name: "Ezgi Bekiroğlu", teams: ["Hiphop", "Social Latin"] },
  { name: "Ezgi Çelebi", teams: ["Hiphop"] },
  { name: "İrem Ece Derman", teams: ["Hiphop"] },
  { name: "Mahnoor Atta", teams: ["Hiphop"] },
  { name: "Melisa Aksoy", teams: ["Hiphop"] },
  { name: "Nazlıcan Yüksek", teams: ["Hiphop"] },
  { name: "Nur Gelen", teams: ["Hiphop"] },
  { name: "Özüm Paşa", teams: ["Hiphop"] },
  { name: "Pervin Manap", teams: ["Hiphop", "Social Latin"] },
  { name: "Polen Çevik", teams: ["Hiphop", "Social Latin"] },
  { name: "Selena Özkaner", teams: ["Hiphop"] },
  { name: "Selinsu Naz Varlı", teams: ["Hiphop"] },
  { name: "Selin Lea Klein", teams: ["Hiphop", "Social Latin"] },
  { name: "Selin Yücetin", teams: ["Hiphop", "Social Latin"] },
  { name: "Simay Akıncı", teams: ["Hiphop"] },
  { name: "Sofiia Salopino", teams: ["Hiphop"] },
  { name: "Tuana Hoş", teams: ["Hiphop"] },
  { name: "Valentin Py", teams: ["Hiphop"] },
  { name: "Zeynep Akın", teams: ["Hiphop"] },
  { name: "Zeynep Özveri", teams: ["Hiphop"] },
  { name: "Ahmet Efe Yakut", teams: ["Social Latin", "Swing"] },
  { name: "Ahmet Emre Şentürk", teams: ["Social Latin"] },
  { name: "Ata Öz", teams: ["Social Latin"] },
  { name: "Ayşe Sarı", teams: ["Social Latin"] },
  { name: "Barkın Gıcır", teams: ["Social Latin"] },
  { name: "Bora Çağılcı", teams: ["Social Latin"] },
  { name: "Burak Kahvecioğlu", teams: ["Social Latin"] },
  { name: "Ece Derman", teams: ["Social Latin"] },
  { name: "Elvan Kimyon", teams: ["Social Latin"] },
  { name: "Ennur Akan", teams: ["Social Latin"] },
  { name: "Kutay Keleş", teams: ["Social Latin"] },
  { name: "Neslisu Demirel", teams: ["Social Latin"] },
  { name: "Ramazan Efe Demirel", teams: ["Social Latin"] },
  { name: "Şevval Bekmez", teams: ["Social Latin"] },
  { name: "Toygun Samatlı", teams: ["Social Latin"] },
  { name: "Zeynep İlhan", teams: ["Social Latin"] },
  { name: "Ahmet Emre Kuranoğlu", teams: ["Swing"] },
  { name: "Ahmet Özkan Canbulat", teams: ["Swing"] },
  { name: "Ayşe Nur Kılıç", teams: ["Swing"] },
  { name: "Bengü Selvi", teams: ["Swing"] },
  { name: "Beril Göktaş", teams: ["Swing"] },
  { name: "Ceylin Yalnız", teams: ["Swing"] },
  { name: "Çağlar Ege Aydın", teams: ["Swing"] },
  { name: "Emir Göcen", teams: ["Swing"] },
  { name: "İkra Nur Şeker", teams: ["Swing"] },
  { name: "İlbilge Acır", teams: ["Swing"] },
  { name: "İpek Ateş", teams: ["Swing"] },
  { name: "Mehmet Ege Akbay", teams: ["Swing"] },
  { name: "Ömer Göcen", teams: ["Swing"] },
  { name: "Simay Topçu", teams: ["Swing"] },
  { name: "Tuna Çimen", teams: ["Swing"] },
  { name: "Umut Çağan Uslu", teams: ["Swing"] },
  { name: "Zehra Güzelsağaltıcı", teams: ["Swing"] },
  { name: "Başak Karamalak", teams: ["International Ballroom"] },
  { name: "Berkay Koruyucu", teams: ["International Ballroom"] },
  { name: "Derin Su Ergüz", teams: ["International Ballroom"] },
  { name: "Düşüm Naz Haşhaş", teams: ["International Ballroom"] },
  { name: "Ece Mollaoğlu", teams: ["International Ballroom"] },
  { name: "Eren Trabzon", teams: ["International Ballroom"] },
  { name: "Nisan Dökmeci", teams: ["International Ballroom", "Modern"] },
  { name: "Ömer Güralp", teams: ["International Ballroom"] },
  { name: "Ali Ozan Beşen", teams: ["Modern"] },
  { name: "Altuğ Çağhan Arslan", teams: ["Modern"] },
  { name: "Belgin Karakoç", teams: ["Modern"] },
  { name: "Candan Aydiş", teams: ["Modern"] },
  { name: "Cansu Pınar Çırpan", teams: ["Modern"] },
  { name: "Cemre Yavuz", teams: ["Modern"] },
  { name: "Ceyda Çelik", teams: ["Modern"] },
  { name: "Eda Yalçın", teams: ["Modern"] },
  { name: "Gülce Sevim", teams: ["Modern"] },
  { name: "Irmak Bozkurt", teams: ["Modern"] },
  { name: "Kayrahan Yüce", teams: ["Modern"] },
  { name: "Rinda Yurttaş", teams: ["Modern"] },
  { name: "Selin Dinç", teams: ["Modern"] },
  { name: "Zeynep Duru Güngör", teams: ["Modern"] },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Festival data from festivals page
  const festivals: FestivalItem[] = [
    {
      id: '2025-carnaval',
      title: 'Carnaval',
      date: '2025',
      description: '23rd KUDANS Carnaval-themed Festival will be with you at SGKM on May 6-7-8, 2025! DANCE IS A POWERFUL ACT OF RESISTANCE. SINCE MARCH 19 WE HAVE MOVED AS ONE; DANCING WITH PURPOSE, RESISTING WITH UNITY. THE STAGE IS OUR PLATFORM, OUR VOICE, OUR DECLARATION. THROUGH EVERY STEP, WE EXPRESS NOT ONLY OUR EMOTIONS, BUT THE UNWAVERING SPIRIT OF OUR RESISTANCE.',
      imageSrc: '/images/festivals/2025_Carnival/2025poster.png',
    },
    {
      id: '2024-nightmare',
      title: 'Nightmare',
      date: '2024',
      description: 'KUDANS presents Nightmare - an exploration of fear and triumph through dance.',
      imageSrc: '/images/festivals/2024_Nightmare/2024poster.png',
    },
    {
      id: '2023-awards',
      title: 'Awards',
      date: '2023',
      description: 'A celebration of cinema and iconic movie moments through the art of dance.',
      imageSrc: '/images/festivals/2023_Awards/2023poster.png',
    },
    {
      id: '2022-galaxy',
      title: 'Galaxy',
      date: '2022',
      description: 'A cosmic journey through space and time expressed through movement and dance.',
      imageSrc: '/images/festivals/2022_Galaxy/2022poster.png',
    },
    {
      id: '2022-a-december-to-remember',
      title: 'A December To Remember',
      date: '2022',
      description: 'KUDANS\'s first joint New Year\'s event organized with KUOrchestra and KUMusical.',
      imageSrc: '/images/festivals/2022_A-December-to-Remember/2022poster.jpg',
    },
    {
      id: '2019-twisted-tales',
      title: 'Twisted Tales',
      date: '2019',
      description: 'Familiar stories reimagined through innovative dance performances and creative storytelling.',
      imageSrc: '/images/festivals/2019_Twisted-Tales/2019poster.png',
    },
    {
      id: '2018-seven',
      title: 'Seven',
      date: '2018',
      description: 'An exploration of the seven deadly sins and seven virtues through the power of dance.',
      imageSrc: '/images/festivals/2018_Seven/2018poster.png',
    },
    {
      id: '2017-time-traveller',
      title: 'Time Traveller',
      date: '2017',
      description: 'Dance performances navigating through different eras and historical moments.',
      imageSrc: '/images/festivals/2017_Time-Traveller/2017poster.png',
    },
    {
      id: '2016-kudans-island',
      title: 'KUDANS Island',
      date: '2016',
      description: 'A tropical adventure themed festival showcasing diverse dance performances.',
      imageSrc: '/images/festivals/2016_Kudans-Island/2016poster.png',
    },
    {
      id: '2015-kocdans-studios',
      title: 'KoçDans Studios',
      date: '2015',
      description: 'A cinematic journey through famous films reimagined through the art of dance.',
      imageSrc: '/images/festivals/2015_KoçDans-Studios/2015poster.png',
    },
    {
      id: '2014-kocdans-kabaresi',
      title: 'KoçDans Cabaret',
      date: '2014',
      description: 'A cabaret-style dance showcase featuring theatrical performances across genres.',
      imageSrc: '/images/festivals/2014_KoçDans-Kabaresi/2014poster.png',
    },
    {
      id: '2013-kocdans-13',
      title: '13th KoçDans Festival',
      date: '2013',
      description: 'The 13th Dance Festival, celebrating the history and future of KUDANS.',
      imageSrc: '/images/festivals/2013_KoçDans-13-Dans-Festivali/2013poster.png',
    }
  ];

  // Dance data from dances/data.ts
  const dances: DanceItem[] = danceStyles;

  // Board members data
  const boardMembers: BoardMember[] = [
    {
      id: 'president',
      name: 'Tufan Karabaş',
      title: 'President',
      imageSrc: '/images/board/president.png'
    },
    {
      id: 'vice-president',
      name: 'Berkay Koruyucu',
      title: 'Vice President',
      imageSrc: '/images/board/vicepresident.png'
    },
    {
      id: 'treasurer',
      name: 'Murat Sarp Aşık',
      title: 'Treasurer',
      imageSrc: '/images/board/treasurer.png'
    },
    {
      id: 'secretary',
      name: 'Aybüke Gül',
      title: 'Secretary',
      imageSrc: '/images/board/secretary.png'
    },
    {
      id: 'social-media',
      name: 'Zeynep Özveri',
      title: 'Social Media Coordinator',
      imageSrc: '/images/board/socialmedia.png'
    },
    {
      id: 'events',
      name: 'Ramazan Efe Demirel',
      title: 'Events Coordinator',
      imageSrc: '/images/board/events.png'
    },
    {
      id: 'sponsorship',
      name: 'Defne Durukan',
      title: 'Sponsorship & Logistics',
      imageSrc: '/images/board/sponsorship.png'
    },
    {
      id: 'competition',
      name: 'Düşüm Naz Haşhaş',
      title: 'Competition Coordinator',
      imageSrc: '/images/board/competition.png'
    },
    {
      id: 'swing',
      name: 'Ahmet Özkan Canbulat',
      title: 'Swing Dance Coordinator',
      imageSrc: '/images/board/swing.png'
    },
    {
      id: 'modern',
      name: 'Nisan Dökmeci',
      title: 'Modern Dance Coordinator',
      imageSrc: '/images/board/modern.png'
    },
    {
      id: 'tango',
      name: 'Asil Söylev',
      title: 'Tango Coordinator',
      imageSrc: '/images/board/tango.png'
    },
    {
      id: 'international-ballroom',
      name: 'Eren Trabzon',
      title: 'International Ballroom Coordinator',
      imageSrc: '/images/board/intballroom.png'
    },
    {
      id: 'hiphop',
      name: 'Pervin Manap',
      title: 'Hip Hop Coordinator',
      imageSrc: '/images/board/hiphop.png'
    },
    {
      id: 'social-latin',
      name: 'Neslisu Demirel',
      title: 'Social Latin Coordinator',
      imageSrc: '/images/board/sociallatin.png'
    }
  ];

  // Extract all instructors from dance styles
  const danceInstructors: DanceInstructor[] = dances.flatMap(dance => 
    dance.instructors.map(instructor => ({
      id: `${dance.id}-${instructor.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: instructor.name,
      title: instructor.title,
      instagram: instructor.instagram,
      image: instructor.image,
      bio: instructor.bio,
      danceStyle: dance.title
    }))
  );

  // Removed Home from menu items and split into left and right
  const leftMenuItems: MenuItem[] = [
    { name: 'Schedule', path: '/schedule' },
    { name: 'About', path: '/about' },
    { name: 'Dances', path: '/dances', hasDropdown: true, dropdownId: 'dances' },
    { name: 'Blog', path: '/blog' },
    { name: 'Fits', path: '/fits' },
  ];

  const rightMenuItems: MenuItem[] = [
    { name: 'Festivals', path: '/festivals', hasDropdown: true, dropdownId: 'festivals' },
    { name: 'Team', path: '/team' },
    { name: 'Board', path: '/board' },
    { name: 'Contact', path: '/contact' },
  ];

  // For mobile menu, combine both
  const allMenuItems: MenuItem[] = [...leftMenuItems, ...rightMenuItems];

  // Search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Normalize and remove accents/diacritics for accent-insensitive search
    const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const searchTerm = normalize(searchQuery.trim());
    
    // Search through festivals
    const festivalResults = festivals
      .filter(festival => 
        normalize(festival.title).includes(searchTerm) ||
        festival.date.includes(searchTerm) ||
        (festival.description && normalize(festival.description).includes(searchTerm))
      )
      .map(festival => ({
        id: festival.id,
        title: festival.title,
        type: 'festival' as const,
        date: festival.date,
        path: `/festivals/${festival.id}`,
        description: festival.description
      }));

    // Search through dances
    const danceResults = dances
      .filter(dance => 
        normalize(dance.title).includes(searchTerm) ||
        (dance.description && normalize(dance.description).includes(searchTerm)) ||
        (dance.longDescription && normalize(dance.longDescription).includes(searchTerm)) ||
        (dance.schedule?.some(s => normalize(s.day).includes(searchTerm) || normalize(s.level).includes(searchTerm)) ?? false) ||
        (dance.instructors?.some(i => normalize(i.name).includes(searchTerm) || (i.title && normalize(i.title).includes(searchTerm))) ?? false)
      )
      .map(dance => ({
        id: dance.id,
        title: dance.title,
        type: 'dance' as const,
        path: `/dances/${dance.id}`,
        description: dance.description,
        schedule: dance.schedule,
        instructors: dance.instructors
      }));

    // Search through board members
    const boardResults = boardMembers
      .filter(member => 
        normalize(member.name).includes(searchTerm) ||
        normalize(member.title).includes(searchTerm)
      )
      .map(member => ({
        id: member.id,
        title: member.name,
        type: 'board' as const,
        path: `/board#${member.name.toLowerCase().replace(/\s+/g, '-')}`,
        description: member.title
      }));

    // Search through instructors
    const instructorResults = danceInstructors
      .filter(instructor => 
        normalize(instructor.name).includes(searchTerm) ||
        (instructor.title && normalize(instructor.title).includes(searchTerm)) ||
        normalize(instructor.danceStyle).includes(searchTerm)
      )
      .map(instructor => ({
        id: instructor.id,
        title: instructor.name,
        type: 'instructor' as const,
        path: `/dances/${instructor.id.split('-')[0]}`,
        description: instructor.title,
        danceStyle: instructor.danceStyle
      }));

    // Search through dancers (team page)
    const dancerResults = teamDancers
      .filter(dancer => normalize(dancer.name).includes(searchTerm))
      .map(dancer => ({
        id: dancer.name.toLowerCase().replace(/\s+/g, '-'),
        title: dancer.name,
        type: 'dancer' as const,
        path: `/team#${dancer.name.toLowerCase().replace(/\s+/g, '-')}`,
        description: dancer.teams.join(', ') + ' · Dancer',
        teams: dancer.teams,
      }));

    // Combine and sort results
    const results = [...festivalResults, ...danceResults, ...boardResults, ...instructorResults, ...dancerResults];
    setSearchResults(results);
    setIsSearching(false);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      handleSearch(e as any); // Type assertion to handle both form and input events
    } else {
      setSearchResults([]);
    }
  };

  // Clear search when closing
  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        handleCloseSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <nav className="bg-black border-b border-gray-800/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 transition-all duration-300 shadow-md">
      <div className="container-custom py-2">
        {/* Desktop layout */}
        <div className="hidden md:flex md:items-center md:justify-between">
          {/* Left Menu Items */}
          <div className="flex space-x-8">
            {leftMenuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown ? setActiveDropdown(item.dropdownId || null) : null}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium transition-all hover:scale-105 duration-300 border-b border-transparent hover:border-white py-1 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown menu for festivals */}
                {item.hasDropdown && item.dropdownId === 'festivals' && (
                  <div 
                    className={`absolute left-0 mt-1 w-72 bg-black bg-opacity-90 backdrop-blur-md border border-gray-800/50 rounded-md shadow-2xl overflow-hidden transition-all duration-300 ${activeDropdown === 'festivals' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                  >
                    <div className="py-2">
                      <Link
                        href="/festivals"
                        className="block px-5 py-2.5 text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white font-medium text-sm"
                      >
                        Show All Festivals
                      </Link>
                      <div className="border-t border-gray-800/30 my-1.5"></div>
                      {festivals.map((festival) => (
                        festival.id === '2025-carnaval' ? (
                          <Link
                            key={festival.id}
                            href={`/festivals/${festival.id}`}
                            className="block px-5 py-2.5 text-white font-bold bg-gradient-to-r from-red-700 via-yellow-500 to-red-900 animate-pulse border-l-4 border-yellow-400 shadow-lg rounded-md mb-1 flex items-center gap-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 relative"
                            style={{ textShadow: '0 0 8px #ff4500, 0 0 16px #ffae42' }}
                          >
                            <span className="mr-2 text-xl">🔥</span>
                            <span className="flex-1">{festival.title}</span>
                            <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full border border-yellow-600 font-bold ml-2">{festival.date}</span>
                          </Link>
                        ) : (
                        <Link
                          key={festival.id}
                          href={`/festivals/${festival.id}`}
                          className="block px-5 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white"
                        >
                          <span className="flex justify-between items-center">
                            <span className="font-light">{festival.title}</span>
                            <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20">{festival.date}</span>
                          </span>
                        </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Dropdown menu for dances */}
                {item.hasDropdown && item.dropdownId === 'dances' && (
                  <div 
                    className={`absolute left-0 mt-1 w-72 bg-black bg-opacity-90 backdrop-blur-md border border-gray-800/50 rounded-md shadow-2xl overflow-hidden transition-all duration-300 ${activeDropdown === 'dances' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                  >
                    <div className="py-2">
                      <Link
                        href="/dances"
                        className="block px-5 py-2.5 text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white font-medium text-sm"
                      >
                        All Dances
                      </Link>
                      <div className="border-t border-gray-800/30 my-1.5"></div>
                      {dances.map((dance) => (
                        <Link
                          key={dance.id}
                          href={`/dances/${dance.id}`}
                          className="block px-5 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white"
                        >
                          <span className="flex justify-between items-center">
                            <span className="font-light">{dance.title}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logo centered */}
          <Link href="/" className="flex items-center justify-center mx-auto">
            <div className="relative h-14 w-44 transition-all duration-500 group-hover:scale-105 bg-transparent overflow-hidden flex items-center justify-center">
              <Image 
                src="/images/kudans_logo-transparent.png" 
                alt="KUDANS Logo" 
                fill 
                className="object-contain object-center scale-150" 
                priority
              />
            </div>
          </Link>

          {/* Right Menu Items with Search */}
          <div className="flex items-center space-x-8">
            {rightMenuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown ? setActiveDropdown(item.dropdownId || null) : null}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium transition-all hover:scale-105 duration-300 border-b border-transparent hover:border-white py-1 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {/* Dropdown menus for right menu items */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute right-0 mt-1 w-72 bg-black bg-opacity-90 backdrop-blur-md border border-gray-800/50 rounded-md shadow-2xl overflow-hidden transition-all duration-300 ${activeDropdown === item.dropdownId ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                  >
                    {/* Dropdown menu for festivals */}
                    {item.dropdownId === 'festivals' && (
                      <div className="py-2">
                        <Link
                          href="/festivals"
                          className="block px-5 py-2.5 text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white font-medium text-sm"
                        >
                          Show All Festivals
                        </Link>
                        <div className="border-t border-gray-800/30 my-1.5"></div>
                        {festivals.map((festival) => (
                          <Link
                            key={festival.id}
                            href={`/festivals/${festival.id}`}
                            className="block px-5 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-l border-transparent hover:border-white"
                          >
                            <span className="flex justify-between items-center">
                              <span className="font-light">{festival.title}</span>
                              <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/20">{festival.date}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Search Bar */}
            <div className="relative flex items-center" id="search-container">
              {isSearchOpen ? (
                <div className="w-64 transition-all duration-300">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSearchQuery(value);
                        if (value.trim()) {
                          handleSearch({ preventDefault: () => {} } as React.FormEvent);
                        } else {
                          setSearchResults([]);
                        }
                      }}
                      placeholder="Search festivals, dances..."
                      className="w-full bg-white/10 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FiSearch className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleCloseSearch}
                      className="absolute -right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </form>

                  {/* Search Results */}
                  {searchQuery && (
                    <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl max-h-96 overflow-y-auto py-2 w-96">
                      {isSearching ? (
                        <div className="text-center py-4 text-gray-400">
                          Searching...
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="divide-y divide-gray-800">
                          {searchResults.map((result) => (
                            <Link
                              key={`${result.type}-${result.id}`}
                              href={result.path}
                              className="block px-4 py-3 hover:bg-white/5 transition-colors"
                              onClick={handleCloseSearch}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="text-white font-medium">{result.title}</div>
                                  <div className="text-sm text-gray-400">
                                    {result.type === 'festival' ? 'Festival' : 
                                     result.type === 'dance' ? 'Dance Style' : 
                                     result.type === 'board' ? 'Board Member' :
                                     result.type === 'dancer' ? 'Dancer' :
                                     'Dance Instructor'}
                                    {result.date && ` • ${result.date}`}
                                  </div>
                                  {result.description && (
                                    <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                      {result.description}
                                    </div>
                                  )}
                                  {result.type === 'dance' && result.schedule && (
                                    <div className="text-xs text-gray-500 mt-1">
                                      {result.schedule[0]?.day} {result.schedule[0]?.time}
                                    </div>
                                  )}
                                  {result.type === 'instructor' && result.danceStyle && (
                                    <div className="text-xs text-gray-500 mt-1">
                                      {result.danceStyle}
                                    </div>
                                  )}
                                  {result.type === 'dancer' && result.description && (
                                    <div className="text-xs text-pink-300 mt-1">{result.description}</div>
                                  )}
                                </div>
                                <div className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 ml-2">
                                  {result.type === 'festival' ? '🎭' : 
                                   result.type === 'dance' ? '💃' : 
                                   result.type === 'board' ? '👥' :
                                   result.type === 'dancer' ? '👨‍🏫' :
                                   '👨‍🏫'}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4 text-gray-400">
                          No results found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Search"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex justify-between items-center">
          {/* Logo for mobile */}
          <div className="flex-1"></div> {/* Empty div for spacing */}
          <Link href="/" className="flex items-center justify-center flex-1">
            <div className="relative h-12 w-32 transition-transform duration-300 bg-transparent overflow-hidden">
              <Image 
                src="/images/kudans_logo-transparent.png" 
                alt="KUDANS Logo" 
                fill 
                className="object-contain object-center scale-150" 
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end">
            <button
              className="focus:outline-none p-1 rounded-full hover:bg-gray-800/30 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4 bg-black/95 backdrop-blur-md rounded-b-lg transition-all duration-300 ease-in-out border-t border-white/5">
            {/* Add search bar to mobile menu */}
            <div className="px-4 py-3 border-b border-gray-800/30">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchQuery(value);
                    if (value.trim()) {
                      handleSearch({ preventDefault: () => {} } as React.FormEvent);
                    } else {
                      setSearchResults([]);
                    }
                  }}
                  placeholder="Search..."
                  className="w-full bg-white/10 border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Submit search"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              </form>
              {/* Mobile search suggestions/results */}
              {searchQuery && (
                <div className="mt-2 bg-black/95 rounded-lg shadow-lg border border-gray-800 max-h-72 overflow-y-auto">
                  {isSearching ? (
                    <div className="text-center py-4 text-gray-400">Searching...</div>
                  ) : searchResults.length > 0 ? (
                    <div className="divide-y divide-gray-800">
                      {searchResults.map((result) => (
                        <Link
                          key={`${result.type}-${result.id}`}
                          href={result.path}
                          className="block px-4 py-3 hover:bg-white/10 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="text-white font-medium">{result.title}</div>
                              <div className="text-xs text-gray-400">
                                {result.type === 'festival' ? 'Festival' : 
                                 result.type === 'dance' ? 'Dance Style' : 
                                 result.type === 'board' ? 'Board Member' :
                                 result.type === 'dancer' ? 'Dancer' :
                                 'Dance Instructor'}
                                {result.date && ` • ${result.date}`}
                              </div>
                              {result.description && (
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                  {result.description}
                                </div>
                              )}
                              {result.type === 'dance' && result.schedule && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {result.schedule[0]?.day} {result.schedule[0]?.time}
                                </div>
                              )}
                              {result.type === 'instructor' && result.danceStyle && (
                                <div className="text-xs text-gray-500 mt-1">
                                  {result.danceStyle}
                                </div>
                              )}
                              {result.type === 'dancer' && result.description && (
                                <div className="text-xs text-pink-300 mt-1">{result.description}</div>
                              )}
                            </div>
                            <div className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 ml-2">
                              {result.type === 'festival' ? '🎭' : 
                               result.type === 'dance' ? '💃' : 
                               result.type === 'board' ? '👥' :
                               result.type === 'dancer' ? '👨‍🏫' :
                               '👨‍🏫'}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-400">No results found</div>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-3 px-4">
              {allMenuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800/30 block"
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm tracking-wide uppercase font-medium">{item.name}</span>
                      {item.hasDropdown && (
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(activeDropdown === item.dropdownId ? null : item.dropdownId || null);
                          }}
                          className="p-1 rounded-full hover:bg-white/5 transition-colors"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-3 w-3 transition-transform ${activeDropdown === item.dropdownId ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </Link>
                  
                  {/* Mobile dropdown for festivals */}
                  {item.hasDropdown && item.dropdownId === 'festivals' && activeDropdown === 'festivals' && (
                    <div className="pl-4 mt-2 mb-3 space-y-2 border-l border-gray-700/50">
                      <Link
                        href="/festivals"
                        className="block py-2 text-gray-400 hover:text-white transition-colors font-medium text-xs uppercase tracking-wider"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Show All Festivals
                      </Link>
                      {festivals.map((festival) => (
                        <Link
                          key={festival.id}
                          href={`/festivals/${festival.id}`}
                          className="block py-2 text-gray-500 hover:text-white transition-colors text-xs"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex justify-between items-center">
                            <span>{festival.title}</span>
                            <span className="text-[10px] bg-white/10 text-gray-300 px-1.5 py-0.5 rounded-full border border-white/10">{festival.date}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* Mobile dropdown for dances */}
                  {item.hasDropdown && item.dropdownId === 'dances' && activeDropdown === 'dances' && (
                    <div className="pl-4 mt-2 mb-3 space-y-2 border-l border-gray-700/50">
                      <Link
                        href="/dances"
                        className="block py-2 text-gray-400 hover:text-white transition-colors font-medium text-xs uppercase tracking-wider"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Dances
                      </Link>
                      {dances.map((dance) => (
                        <Link
                          key={dance.id}
                          href={`/dances/${dance.id}`}
                          className="block py-2 text-gray-500 hover:text-white transition-colors text-xs"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dance.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 