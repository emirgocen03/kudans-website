'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiX } from 'react-icons/fi';
import { danceStyles, DanceStyle, Instructor } from '../dances/data';
import { useRouter } from 'next/navigation';
import { teamDancers, TeamDancer } from '../data/teamData';
import { festivals, Festival } from '../data/festivalData';
import { boardMembers, BoardMember } from '../data/boardData';
import dynamic from 'next/dynamic';

// Dynamically import MobileSearch with no SSR to avoid hydration issues
const MobileSearch = dynamic(() => import('./MobileSearch'), { ssr: false });

// Define interface for menu items
interface MenuItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownId?: string;
}

// Define interface for search results
interface SearchResult {
  id: string;
  title: string;
  type: 'festival' | 'dance' | 'board' | 'instructor' | 'dancer';
  date?: string;
  path: string;
  description?: string;
  department?: string;
  danceStyle?: string;
  teams?: string[];
}

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

  const allMenuItems: MenuItem[] = [...leftMenuItems, ...rightMenuItems];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const router = useRouter();

  // Reset all search state
  const resetSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      resetSearch();
    }
  };

  // Handle mobile search open
  const openMobileSearch = () => {
    setIsSearchOpen(true);
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim()) {
      setIsSearching(true);
      const normalize = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const query = normalize(value);

      const results: SearchResult[] = [];

      // Search festivals
      festivals.forEach((festival: Festival) => {
        if (normalize(festival.title).includes(query) || normalize(festival.description).includes(query)) {
          results.push({
            id: festival.id,
            title: festival.title,
            type: 'festival',
            date: festival.date,
            path: `/festivals/${festival.id}`,
            description: festival.description
          });
        }
      });

      // Search dancers
      teamDancers.forEach((dancer: TeamDancer) => {
        if (normalize(dancer.name).includes(query)) {
          results.push({
            id: dancer.name,
            title: dancer.name,
            type: 'dancer',
            path: `/team#${dancer.name.toLowerCase().replace(/\s+/g, '-')}`,
            teams: dancer.teams
          });
        }
      });

      // Search board members
      boardMembers.forEach((member: BoardMember) => {
        if (normalize(member.name).includes(query) || 
            normalize(member.title).includes(query) || 
            normalize(member.department).includes(query) ||
            normalize(member.danceStyle).includes(query)) {
          results.push({
            id: member.id,
            title: member.name,
            type: 'board',
            path: `/board#${member.id}`,
            description: member.title,
            department: member.department,
            danceStyle: member.danceStyle
          });
        }
      });

      // Search dance styles
      danceStyles.forEach((dance: DanceStyle) => {
        if (normalize(dance.title).includes(query) || 
            normalize(dance.description).includes(query) ||
            normalize(dance.longDescription).includes(query)) {
          results.push({
            id: dance.id,
            title: dance.title,
            type: 'dance',
            path: `/dances/${dance.id}`,
            description: dance.description
          });
        }
      });

      // Search instructors from dance styles
      danceStyles.forEach((dance: DanceStyle) => {
        dance.instructors.forEach((instructor: Instructor) => {
          if (normalize(instructor.name).includes(query) || 
              (instructor.title && normalize(instructor.title).includes(query)) ||
              (instructor.bio && normalize(instructor.bio).includes(query))) {
            results.push({
              id: `${dance.id}-${instructor.name}`,
              title: instructor.name,
              type: 'instructor',
              path: `/dances/${dance.id}#instructors`,
              description: instructor.title || `${dance.title} Instructor`,
              danceStyle: dance.title
            });
          }
        });
      });

      setSearchResults(results);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  };

  // Handle search result click
  const handleSearchResultClick = (result: SearchResult) => {
    resetSearch();
    if (result.type === 'dancer') {
      // Navigate and then handle scrolling
      const handleScroll = () => {
        const element = document.getElementById(result.id.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      router.push(result.path);
      // Wait for navigation to complete
      setTimeout(handleScroll, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

      document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <nav className="bg-black border-b border-gray-800/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 transition-all duration-300 shadow-md">
      <div className="container-custom py-2">
          {/* Mobile layout */}
          <div className="md:hidden flex justify-between items-center">
            <div className="flex-1 flex items-center">
              <button
                type="button"
                onClick={() => {
                  setIsMobileSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
            <Link href="/" className="flex items-center justify-center flex-1">
              <div className="relative h-12 w-32 transition-transform duration-300 bg-transparent overflow-hidden">
                <Image 
                  src="/images/kudans_logo-transparent.png" 
                  alt="KUDANS Koç University Dance Club Logo" 
                  fill 
                  className="object-contain object-center scale-150" 
                  priority
                />
              </div>
            </Link>

            <div className="flex-1 flex justify-end">
              <button
                type="button"
                className="focus:outline-none p-1 rounded-full hover:bg-gray-800/30 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                        {danceStyles.map((dance) => (
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
                  className="text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium transition-colors hover:scale-105 duration-300 border-b border-transparent hover:border-white py-1 flex items-center"
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
                      {danceStyles.map((dance) => (
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
                alt="KUDANS Koç University Dance Club Logo" 
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
                  className="text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium transition-colors hover:scale-105 duration-300 border-b border-transparent hover:border-white py-1 flex items-center"
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
                    className={`absolute right-0 mt-1 w-72 bg-black bg-opacity-90 backdrop-blur-md border border-gray-800/50 rounded-md shadow-2xl overflow-hidden transition-all duration-300 ${activeDropdown === 'festivals' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
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
              </div>
            ))}

            {/* Search Bar */}
            <div className="relative flex items-center" id="search-container">
              {isSearchOpen ? (
                <div className="w-64 transition-all duration-300">
                  <form className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                      placeholder="Search festivals, dances..."
                      className="w-full bg-white/10 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      autoFocus
                    />
                    <button
                      type="button"
                        onClick={resetSearch}
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
                                onClick={() => handleSearchResultClick(result)}
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
                                  {result.type === 'instructor' && result.danceStyle && (
                                    <div className="text-xs text-pink-300 mt-1">
                                      {result.danceStyle}
                                    </div>
                                  )}
                                  {result.type === 'dancer' && result.teams && (
                                    <div className="text-xs text-pink-300 mt-1">
                                      {result.teams.join(', ')}
                                    </div>
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
                    onClick={openMobileSearch}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Search"
                >
                  <FiSearch className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Component */}
      <MobileSearch 
        isOpen={isMobileSearchOpen} 
        onClose={() => setIsMobileSearchOpen(false)} 
      />
    </>
  );
};

export default Navbar; 