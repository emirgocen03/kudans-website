'use client';

import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { danceStyles, DanceStyle, Instructor } from '../dances/data';
import { teamDancers, TeamDancer } from '../data/teamData';
import { festivals, Festival } from '../data/festivalData';
import { boardMembers, BoardMember } from '../data/boardData';

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

interface MobileSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSearch = ({ isOpen, onClose }: MobileSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSearch = (value: string) => {
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

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'dancer') {
      const handleScroll = () => {
        const element = document.getElementById(result.id.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      router.push(result.path);
      setTimeout(handleScroll, 100);
    }
    onClose();
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search festivals, dances..."
                className="w-full bg-gray-900 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                autoFocus
              />
            </div>
            <button
              onClick={() => {
                onClose();
                setSearchQuery('');
                setSearchResults([]);
              }}
              className="p-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {isSearching ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400">Searching...</div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="divide-y divide-gray-800">
              {searchResults.map((result) => (
                <Link
                  key={`${result.type}-${result.id}`}
                  href={result.path}
                  onClick={() => handleResultClick(result)}
                  className="block px-4 py-3 hover:bg-gray-900 active:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-lg">
                      {result.type === 'festival' ? '🎭' : 
                       result.type === 'dance' ? '💃' : 
                       result.type === 'board' ? '👥' :
                       result.type === 'dancer' ? '🕺' :
                       '👨‍🏫'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium truncate">{result.title}</div>
                      <div className="text-sm text-gray-400 flex items-center gap-2">
                        <span>
                          {result.type === 'festival' ? 'Festival' : 
                           result.type === 'dance' ? 'Dance Style' : 
                           result.type === 'board' ? 'Board Member' :
                           result.type === 'dancer' ? 'Dancer' :
                           'Dance Instructor'}
                        </span>
                        {result.date && (
                          <>
                            <span className="text-gray-600">•</span>
                            <span>{result.date}</span>
                          </>
                        )}
                      </div>
                      {result.description && (
                        <div className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {result.description}
                        </div>
                      )}
                      {result.type === 'instructor' && result.danceStyle && (
                        <div className="text-sm text-pink-400/80 mt-1">
                          {result.danceStyle}
                        </div>
                      )}
                      {result.type === 'dancer' && result.teams && (
                        <div className="text-sm text-pink-400/80 mt-1">
                          {result.teams.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="text-gray-400 mb-2">No results found</div>
              <div className="text-sm text-gray-600">Try different keywords or check the spelling</div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="text-gray-400 mb-2">Start typing to search</div>
              <div className="text-sm text-gray-600">Search for festivals, dances, team members and more</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSearch; 