export interface Festival {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  highlights: string[];
}

export const festivals: Festival[] = [
  {
    id: '2025-carnaval',
    title: 'Carnaval',
    date: '2025',
    description: '23rd KUDANS Carnaval-themed Festival will be with you at SGKM on May 6-7-8, 2025! DANCE IS A POWERFUL ACT OF RESISTANCE. SINCE MARCH 19 WE HAVE MOVED AS ONE; DANCING WITH PURPOSE, RESISTING WITH UNITY. THE STAGE IS OUR PLATFORM, OUR VOICE, OUR DECLARATION. THROUGH EVERY STEP, WE EXPRESS NOT ONLY OUR EMOTIONS, BUT THE UNWAVERING SPIRIT OF OUR RESISTANCE.',
    imageSrc: '/images/festivals/2025_Carnival/2025poster.png',
    highlights: [
      'A spectacular carnival show full of surprises',
      'Acrobats, freak shows, pantomimes, magicians, clowns, and more',
      'Each act is a secret until the curtain rises',
      'A celebration of unity, resistance, and the power of dance',
      'Immersive carnival atmosphere with vibrant performances',
      'Unforgettable moments and creative storytelling',
    ]
  },
  {
    id: '2024-nightmare',
    title: 'Nightmare',
    date: '2024',
    description: 'KUDANS presents Nightmare - an exploration of fear and triumph through dance.',
    imageSrc: '/images/festivals/2024_Nightmare/2024poster.png',
    highlights: [
      'Immersive horror-themed performances',
      'Creative interpretations of nightmares and dreams',
      'Multiple dance styles depicting fear and courage',
      'Special effects and innovative choreography'
    ]
  },
  {
    id: '2023-awards',
    title: 'Awards',
    date: '2023',
    description: 'A celebration of cinema and iconic movie moments through the art of dance.',
    imageSrc: '/images/festivals/2023_Awards/2023poster.png',
    highlights: [
      'Recreations of famous movie scenes through dance',
      'Tribute to iconic film soundtracks',
      'Red carpet experience for attendees',
      'Collaborative performances with film students'
    ]
  },
  {
    id: '2022-galaxy',
    title: 'Galaxy',
    date: '2022',
    description: 'A cosmic journey through space and time expressed through movement and dance.',
    imageSrc: '/images/festivals/2022_Galaxy/2022poster.png',
    highlights: [
      'Space-themed choreography across all dance styles',
      'Stunning celestial visuals and cosmic costumes',
      'Exploration of science fiction through dance',
      'Interstellar collaborations with other university clubs'
    ]
  },
  {
    id: '2022-a-december-to-remember',
    title: 'A December To Remember',
    date: '2022',
    description: 'KUDANS\'s first joint New Year\'s event organized with KUOrchestra and KUMusical.',
    imageSrc: '/images/festivals/2022_A-December-to-Remember/2022poster.jpg',
    highlights: [
      'Collaborative performances between dance, orchestra, and musical clubs',
      'Festive holiday atmosphere and New Year celebrations',
      'Cross-disciplinary artistic expression',
      'Showcasing the diversity of performing arts at Koç University'
    ]
  },
  {
    id: '2019-twisted-tales',
    title: 'Twisted Tales',
    date: '2019',
    description: 'Familiar stories reimagined through innovative dance performances and creative storytelling.',
    imageSrc: '/images/festivals/2019_Twisted-Tales/2019poster.png',
    highlights: [
      'Dark reimaginings of classic fairy tales',
      'Narrative-driven choreography across multiple dance styles',
      'Elaborate costumes and theatrical elements',
      'Interactive storytelling through movement'
    ]
  },
  {
    id: '2018-seven',
    title: 'Seven',
    date: '2018',
    description: 'An exploration of the seven deadly sins and seven virtues through the power of dance.',
    imageSrc: '/images/festivals/2018_Seven/2018poster.png',
    highlights: [
      'Themed performances representing each sin and virtue',
      'Emotional journey from darkness to light',
      'Contrast of dance styles reflecting opposing concepts',
      'Thought-provoking choreography and visual storytelling'
    ]
  },
  {
    id: '2017-time-traveller',
    title: 'Time Traveller',
    date: '2017',
    description: 'Dance performances navigating through different eras and historical moments.',
    imageSrc: '/images/festivals/2017_Time-Traveller/2017poster.png',
    highlights: [
      'Chronological journey through dance history',
      'Period costumes and authentic music selections',
      'Fusion of contemporary techniques with historical dance styles',
      'Educational elements highlighting dance evolution'
    ]
  },
  {
    id: '2016-kudans-island',
    title: 'KUDANS Island',
    date: '2016',
    description: 'A tropical adventure themed festival showcasing diverse dance performances.',
    imageSrc: '/images/festivals/2016_Kudans-Island/2016poster.png',
    highlights: [
      'Island-inspired choreography and themes',
      'Cultural dances from around the world',
      'Immersive tropical setting and atmosphere',
      'Interactive elements for audience engagement'
    ]
  },
  {
    id: '2015-kocdans-studios',
    title: 'KoçDans Studios',
    date: '2015',
    description: 'A cinematic journey through famous films reimagined through the art of dance.',
    imageSrc: '/images/festivals/2015_KoçDans-Studios/2015poster.png',
    highlights: [
      'Step into KoçDans Studios, where iconic films come alive through dance',
      'Hollywood film set atmosphere with themed performances',
      'Special Willy Wonka golden ticket hidden during the festival',
      'Performances inspired by Kill Bill, James Bond, The Godfather, and more'
    ]
  },
  {
    id: '2014-kocdans-kabaresi',
    title: 'KoçDans Cabaret',
    date: '2014',
    description: 'A cabaret-style dance showcase featuring theatrical performances across genres.',
    imageSrc: '/images/festivals/2014_KoçDans-Kabaresi/2014poster.png',
    highlights: [
      'Variety show format with diverse performances across genres',
      'Theatrical elements and narrative sequences bringing cabaret style to life',
      'Step into the exotic world of cabaret with workshops and social dancing',
      'Spectacular choreography showcasing Jive, Tango, Hip Hop, and more'
    ]
  },
  {
    id: '2013-kocdans-13',
    title: '13th KoçDans Festival',
    date: '2013',
    description: 'The 13th Dance Festival, celebrating the history and future of KUDANS.',
    imageSrc: '/images/festivals/2013_KoçDans-13-Dans-Festivali/2013poster.png',
    highlights: [
      'Anniversary celebration of club achievements',
      'Alumni performances and special guest appearances',
      'Retrospective of past festivals and performances',
      'Showcase of all dance genres taught at KUDANS'
    ]
  }
]; 