export interface BoardMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
  imageSrc: string;
  danceStyle: string;
  danceStyleColor: string;
}

export const executiveBoard: BoardMember[] = [
  {
    id: 'president',
    name: 'Tufan Karabaş',
    role: 'President',
    department: 'Mechanical Engineering & Business Administration',
    year: 'Senior',
    imageSrc: '/images/board/president.png',
    danceStyle: 'Tango',
    danceStyleColor: 'purple'
  },
  {
    id: 'vice-president',
    name: 'Berkay Koruyucu',
    role: 'Vice President',
    department: 'Electrical Engineering',
    year: 'Senior',
    imageSrc: '/images/board/vicepresident.png',
    danceStyle: 'International Ballroom',
    danceStyleColor: 'indigo'
  },
  {
    id: 'treasurer',
    name: 'Murat Sarp Aşık',
    role: 'Treasurer',
    department: 'Computer Engineering',
    year: 'Sophomore',
    imageSrc: '/images/board/treasurer.png',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'secretary',
    name: 'Aybüke Gül',
    role: 'Secretary',
    department: 'Psychology',
    year: 'Freshman',
    imageSrc: '/images/board/secretary.png',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  }
];

export const departmentCoordinators: BoardMember[] = [
  {
    id: 'social-media',
    name: 'Zeynep Özveri',
    role: 'Social Media Coordinator',
    department: 'Media and Visual Arts',
    year: 'Sophomore',
    imageSrc: '/images/board/socialmedia.png',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'events',
    name: 'Ramazan Efe Demirel',
    role: 'Events Coordinator',
    department: 'Business Administration',
    year: 'Freshman',
    imageSrc: '/images/board/events.png',
    danceStyle: 'Social Latin',
    danceStyleColor: 'orange'
  },
  {
    id: 'sponsorship',
    name: 'Defne Durukan',
    role: 'Sponsorship & Logistics',
    department: 'Business Administration',
    year: 'Sophomore',
    imageSrc: '/images/board/sponsorship.png',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'competition',
    name: 'Düşüm Naz Haşhaş',
    role: 'Competition Coordinator',
    department: 'Sociology & Economics',
    year: 'Sophomore',
    imageSrc: '/images/board/competition.png',
    danceStyle: 'International Ballroom',
    danceStyleColor: 'indigo'
  }
];

export const danceStyleCoordinators: BoardMember[] = [
  {
    id: 'swing',
    name: 'Ahmet Özkan Canbulat',
    role: 'Swing Dance Coordinator',
    department: 'Mathematics & Computer Science',
    year: 'Sophomore',
    imageSrc: '/images/board/swing.png',
    danceStyle: 'Swing',
    danceStyleColor: 'amber'
  },
  {
    id: 'modern',
    name: 'Nisan Dökmeci',
    role: 'Modern Dance Coordinator',
    department: 'Psychology',
    year: 'Sophomore',
    imageSrc: '/images/board/modern.png',
    danceStyle: 'Modern',
    danceStyleColor: 'emerald'
  },
  {
    id: 'tango',
    name: 'Asil Söylev',
    role: 'Tango Coordinator',
    department: 'Medicine',
    year: 'Freshman',
    imageSrc: '/images/board/tango.png',
    danceStyle: 'Tango',
    danceStyleColor: 'purple'
  },
  {
    id: 'international-ballroom',
    name: 'Eren Trabzon',
    role: 'International Ballroom Coordinator',
    department: 'Industrial Engineering & Computer Science',
    year: 'Senior',
    imageSrc: '/images/board/intballroom.png',
    danceStyle: 'International Ballroom',
    danceStyleColor: 'indigo'
  },
  {
    id: 'hiphop',
    name: 'Pervin Manap',
    role: 'Hip Hop Coordinator',
    department: 'Media and Visual Arts & Psychology',
    year: 'Junior',
    imageSrc: '/images/board/hiphop.png',
    danceStyle: 'Hip Hop',
    danceStyleColor: 'pink'
  },
  {
    id: 'social-latin',
    name: 'Neslisu Demirel',
    role: 'Social Latin Coordinator',
    department: 'Media and Visual Arts & Business Administration',
    year: 'Junior',
    imageSrc: '/images/board/sociallatin.png',
    danceStyle: 'Social Latin',
    danceStyleColor: 'orange'
  }
]; 