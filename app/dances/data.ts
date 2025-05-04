export interface Instructor {
  name: string;
  title?: string;
  image: string;
  instagram?: string; // Optional Instagram handle
  bio?: string; // Optional instructor bio
}

export interface Schedule {
  day: string;
  time: string;
  level: string;
}

export interface DanceStyle {
  id: string;
  title: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  imagePath: string;
  instructors: Instructor[];
  schedule: Schedule[];
  videoUrl: string;
  galleryImages: string[];
  instagramLink?: string; // Optional Instagram account link
}

// Define dance styles data
export const danceStyles: DanceStyle[] = [
  {
    id: 'hiphop',
    title: 'Hip Hop',
    fullTitle: 'Hip Hop at KUDANS',
    description: 'A vibrant street dance style that includes a wide range of movements with influences from breaking, popping, locking, and freestyle',
    longDescription: `
      Hip Hop dance at KUDANS encapsulates the energy and expression of street dance culture. Originating in the 1970s in New York City, Hip Hop dance has evolved into a global phenomenon with various styles and techniques.
      
      Our Hip Hop classes cover various elements:
      • Foundation movements including top rock, down rock, freezes, and power moves
      • Popping, locking, breaking, and house dance elements
      • Choreography set to contemporary and classic Hip Hop music
      • Freestyle sessions to develop personal style and improvisation skills
      
      Whether you're a complete beginner or an experienced dancer, our Hip Hop classes offer a fun and energetic way to express yourself through movement.
    `,
    imagePath: '/images/dances/hiphop.jpg',
    instructors: [
      {name: 'Emre Öztürk', instagram: '@emreozturk910', image: '/images/dances/hiphop_inst.png', bio: 'Emre is a well-known Turkish dancer, choreographer, and co-founder of 2Day Dance Academy, a prominent dance school in Turkey. He has been instrumental in shaping the urban dance scene through dynamic choreography and engaging workshops. His academy is recognized for its high-energy classes and creative performances, which are showcased on their YouTube channel and Instagram profile. Emre\'s choreographic works highlight his distinctive style and have garnered attention within the dance community. Through 2Day Dance Academy and KUDANS, he continues to influence and inspire dancers across Turkey and beyond.'},
    ],
    schedule: [
      {day: 'Tuesday', time: '20:00 - 21:00', level: 'Lecture'},
      {day: 'Wednesday', time: '18:00 - 19:00', level: 'Practice Session'},
    ],
    videoUrl: 'https://www.youtube.com/embed/hZuLYUyUw84?si=qVuYbW1lbvhHHoyz', // Hip Hop - Crowd Fear (Nightmare 2024)
    galleryImages: [
      '/images/dances/hiphop-gallery-1.jpg',
      '/images/dances/hiphop-gallery-2.jpg',
      '/images/dances/hiphop-gallery-3.jpg',
    ],
    instagramLink: 'https://www.instagram.com/kudanshiphop.official//'
  },
  {
    id: 'tango',
    title: 'Tango',
    fullTitle: 'Tango at KUDANS',
    description: 'Born on the streets of Buenos Aires and Montevideo, Tango is a dance of emotion, storytelling, and deep musicality that transcends steps to create an intimate dialogue between partners',
    longDescription: `
      Tango is one of the most rooted and cherished dances at KUDANS, carrying a legacy of connection, emotion, and artistry. This is an invitation into a world of elegance, passion, and profound connection.

      Originating in the late 19th century in the working-class neighborhoods of Buenos Aires and Montevideo, Tango emerged from a rich blend of African, European, and native cultures. It was born from longing, hope, and the need to connect in a rapidly changing world. Over time, it grew from smoky bars and bustling street corners into a global phenomenon, constantly evolving while holding onto its essence: a profound, wordless conversation between two bodies moving as one.

      At KUDANS, we honor this tradition while embracing its modern expressions. Through Tango, we learn more than steps — we learn listening, trust, and the subtle art of shared emotion. We explore both the classic embrace of traditional tango and the creative freedom of contemporary styles.

      Our community comes together not just to practice technique, but to experience the music, the stories, and the silent conversations that make Tango timeless. Whether you're new to dance or have years of experience, Tango at KUDANS offers a place where every dancer can find a voice, a partner, and a shared moment on the floor.
    `,
    imagePath: '/images/dances/tango.jpg',
    instructors: [
      {name: 'Selçuk Atalay', instagram: '@selcukataly', image: '/images/dances/tango1_inst.png', bio: 'Selçuk Atalay is a distinguished Turkish dancer, choreographer, and educator specializing in Argentine Tango, classical, and modern dance. A graduate of Mimar Sinan Fine Arts University with a degree in Modern Dance, Selçuk brings a unique fusion of classical and contemporary techniques to his tango performances. His innovative approach has led to multiple national championships, including three consecutive Turkish Argentine Tango Champion titles (2016-2018) and first place at the 2018 IDO European Tango Championship. As a licensed national athlete under the Turkish Dance Sports Federation (TDSF), Selçuk is a prominent figure in the international tango community.'},
      {name: 'Müge Üner', instagram: '@mugeunerr', image: '/images/dances/tango2_inst.png', bio: 'Müge Üner is an accomplished Argentine Tango dancer and instructor known for her expressive style and artistic depth. A graduate of Mimar Sinan University’s Architecture Department, Müge began her dance journey with classical ballet in childhood and discovered Argentine Tango during her high school years—eventually making it the focus of her career. Alongside partner Selçuk Atalay, she has earned top honors in national and international competitions, including multiple Turkish Championship titles and victory at the 2018 IDO European Tango Championship. Müge is also a licensed A National Athlete, representing Turkey in international dance sports events.'},
    ],
    schedule: [
      {day: 'Tuesday', time: '18:30 - 20:00', level: 'Lecture'},
      {day: 'Monday', time: '19:00 - 20:00', level: 'Practice Session'},
    ],
    videoUrl: 'https://www.youtube.com/embed/xzJnX_LwZ_Q?si=sD_x7o1Nf3BW7lVT', // Tango - Failure (Nightmare 2024)
    galleryImages: [
      '/images/dances/tango-gallery-1.jpg',
      '/images/dances/tango-gallery-2.jpg',
      '/images/dances/tango-gallery-3.jpg',
    ],
    instagramLink: 'https://www.instagram.com/kudans.tango/'
  },
  {
    id: 'social-latin',
    title: 'Social Latin',
    fullTitle: 'Social Latin at KUDANS',
    description: 'Experience the energy and passion of Social Latin, from the lively rhythms of Salsa to the smooth moves of Bachata with the vibrant soul of Latin America and the Caribbean',
    longDescription: `
      Social Latin dance brings the vibrant soul of Latin America and the Caribbean to KUDANS, focusing mainly on Salsa and Bachata.

      These dances have roots in everyday life — from street corners in Havana to beach parties in the Dominican Republic — shaped by the rhythms of Afro-Latin music and the traditions of countless communities. Over time, they evolved through the voices of musicians, dancers, and storytellers who used dance as a way to connect, celebrate, and express their cultures.

      Today, social Latin dance is about much more than steps and techniques. It's about feeling the music, building trust with a partner, and creating a moment together. Whether it's the fiery energy of Salsa or the smooth romance of Bachata,  each dance tells a different story that anyone can join, no matter their background.
    `,
    imagePath: '/images/dances/social-latin.jpg',
    instructors: [
      {name: 'Emek Yeter', instagram: '@emekybusra', image: '/images/dances/latin2_inst.png', bio: 'Emek Yeter is an award-winning Turkish Latin dancer, choreographer, and educator with over a decade of experience in the global dance scene. He has earned numerous national and international titles, including top placements at the World Latin Dance Cup and Turkish Salsa Championships. As co-founder of Büşra & Emek Dance Academy in Istanbul, Emek is known for his dynamic style, innovative choreography, and commitment to developing passionate, world-class dancers. He embodies the duo’s shared motto: “Successful people are not born talented—they are those who work with all their heart.”'},
      {name: 'Büşra Yeter', instagram: '@emekybusra', image: '/images/dances/latin1_inst.png', bio: 'Büşra Yeter is a renowned Turkish Latin dancer, choreographer, and instructor celebrated for her artistry and discipline,  with an impressive record of national and international titles. With multiple championship titles both in Turkey and on the international stage, she brings a blend of strength, elegance, and professionalism to every performance. Co-founder of Büşra & Emek Dance Academy, Büşra is dedicated to training visionary dancers who blend tradition with global creativity. She embodies the duo’s shared motto: "Successful people are not born talented—they are those who work with all their heart."'},
    ],
    schedule: [
      {day: 'Thursday', time: '19:00 - 20:00', level: 'Lecture'},
      {day: 'Monday', time: '18:00 - 19:00', level: 'Practice Session'},
    ],
    videoUrl: 'https://www.youtube.com/embed/0pO-_XqzOXo?si=R74TZRRYxGS7uMm6', // Social Latin - Loneliness (Nightmare 2024)
    galleryImages: [
      '/images/dances/latin-gallery-1.jpg',
      '/images/dances/latin-gallery-2.jpg',
      '/images/dances/latin-gallery-3.jpg',
    ],
    instagramLink: 'https://www.instagram.com/kudans.sociallatin/'
  },
  {
    id: 'modern',
    title: 'Modern',
    fullTitle: 'Modern at KUDANS',
    description: 'A free-form style focusing on self-expression, floor work, and organic movements that embrace the natural impulses of the body.',
    longDescription: `
      At the beginning of the 20th century, a new form of dance emerged in America and Europe through two distinct yet parallel developments. Often performed solo, this form became known by various names such as “aesthetic,” “barefoot,” “new,” or “modern” dance. Initially centered on an inward-to-outward approach that reflected the artist’s individual sensitivity and emphasized free bodily expression, modern dance gradually evolved into a discipline of its own. Over time, it developed systematized dance techniques (such as Graham, Limón, Cunningham, Release, etc.) and movement vocabularies, ultimately establishing its own tradition.
      
      Today, the umbrella term contemporary dance continues in the lineage of the modern dance tradition but with a crucial difference: it has diversified through movement techniques both within and outside the dance world, somatic approaches, and hybrid styles influenced by various instructors and choreographers. It has expanded by incorporating theatrical elements—as seen in dance theater and physical theater—and in some cases, has drawn closer to performance art and contemporary conceptual art. The increasing emphasis on the dancer\'s individuality and agency, along with the shift of the choreographer\'s role from an all-controlling artistic genius to that of a facilitator, are also among the motifs that define the contemporary dance landscape. The frequent combined use of the phrase “modern-contemporary dance” stems from this relationship of continuity.

      KUDANS Modern\'s annual program, running from October to May, is structured around three complementary tracks:
      • Modern-contemporary dance technique classes, designed to enhance movement capacity, coordination, and spatial awareness
      • Yoga practices, aimed at improving breath awareness, flexibility, and strength
      • Improvisation and choreography work, focusing on creativity and stage performance
      
      At KUDANS Modern, we value the experience of collaboratively creating a new choreography or piece each year, shaped around a theme selected for that season. This process is shared with our instructors, the KUDANS Modern coordinator, collaborating musicians, designers, and our performance group dancers. From conceptual research and exploration of movement vocabulary to design elements (sound & music, costume, makeup, lighting) and the final completion of the choreography, we conduct the entire process in a way that welcomes multiple creative contributions.


    `,
    imagePath: '/images/dances/modern.jpg',
    instructors: [
      {name: 'Bedirhan Dehmen', title: 'Dance Artist and Academic', image: '/images/dances/modern_inst.png', bio: 'Bedirhan Dehmen (b. 1978, Istanbul) is a dance artist and academic, working in the field of contemporary performing arts. Some of his choreographic and directorial works include Güneşli Pazartesi (2008), “we” (2014), Balerin (2018), Angelus (2023). His works have been staged at leading venues such as Istanbul Modern, Süreyya Operası, Maxim Gorki Theater (Berlin), Suzanne Dellal Center (Tel Aviv), and Pavillon Noir (Aix-en-Provence), among many others. Dehmen holds a BA and MA in Sociology from Boğaziçi University and earned his PhD in Theatre Criticism and Dramaturgy from Istanbul University. He is faculty (Assoc. Prof.) at Mimar Sinan Fine Arts University Performing Arts Dept / Modern Dance and is a guest lecturer at Koç University. He is the founder of BİZ Platform. Lives in Istanbul with his wife Mine Tan, their two children, and two cats.'},
    ],
    schedule: [
      {day: 'Thursday', time: '18:00 - 20:00', level: 'Lecture'},
      {day: 'Thursday', time: '20:00 - 21:00', level: 'Practice Session'},
    ],
    videoUrl: 'https://www.youtube.com/embed/IAMvU5HfypE?si=gZYb4lpBeeBKvGXC', // Modern - Delirium (Nightmare 2024)
    galleryImages: [
      '/images/dances/modern-gallery-1.jpg',
      '/images/dances/modern-gallery-2.jpg',
      '/images/dances/modern-gallery-3.jpg',
    ],
    instagramLink: 'https://www.instagram.com/kudansmodern/'
  },
  {
    id: 'swing',
    title: 'Swing',
    fullTitle: 'Swing at KUDANS',
    description: 'A vibrant group of dances rooted in jazz music, touching Lindy Hop, Solo Jazz, Charleston, Bebop Dancing, Tap Dance, and more, all characterized by groove and rhythm.',
    longDescription: `
      Swing at KUDANS brings the soul of the 1920s-1930s dance floors to now, focusing mainly on Lindy Hop and Solo Jazz, and to some extent Blues, Bebop, and Tap.
      
      We learn an expressive form of movement that emerged from Black communities in Harlem during the 1920s and 1930s, deeply rooted in the rhythms of jazz music born alongside the magical sounds of Duke Ellington, Count Basie, Ella Fitzgerald and many other talented artists. We learn a unique form of storytelling and draw our inspiration from legendary dancers like Frankie Manning, Norma Miller, Al Minns, and Leon James. 
      
      Here, we try to capture a full spectrum of human emotion: resistance, resilience, celebration, sorrow, and love. Far from being only a symbol of happiness, our dance embodies the full range of human experience. It reflects the cultural richness and spirit of a community that used dance both to survive and to thrive in the face of adversity.

      We go social dance parties almost every week and festivals all around the world together to share our love for dance as a community. A one, a two, you know what to do...
    `,
    imagePath: '/images/dances/swing.jpg',
    instructors: [
      {name: 'Semih İşbilen', instagram: '@isbilensemih', image: '/images/dances/swing1_inst.png', bio: 'Semih started dancing back in 2014 with a fast pace of learning. Focusing on dancing in the upcoming years, he is known by his mad energy and creativity. His latest true love became bebop, feeding him that internal contrast that he has been searching for.'},
      {name: 'Zeynep Oral', instagram: '@zeynporal', image: '/images/dances/swing2_inst.png', bio: 'Zeynep discovered jazz dance in 2018 and has been exploring it ever since. In recent years, her focus on working with teams and creating performances has shaped her path. Her dancing stands out for its musical nuance and fluidity, making dynamic choices within the music while maintaining a smooth flow.'},
    ],
    schedule: [
      {day: 'Wednesday', time: '20:00 - 21:15', level: 'Lecture'},
      {day: 'Friday', time: '18:00 - 19:00', level: 'Practice Session'},
    ],
    videoUrl: 'https://www.youtube.com/embed/Ik9OOCZyz6A?si=hRnKtMJV9zdgU1oH', // Swing - Being Followed (Nightmare 2024)
    galleryImages: [
      '/images/dances/swing-gallery-1.jpg',
      '/images/dances/swing-gallery-2.jpg',
      '/images/dances/swing-gallery-3.jpg',
    ],
    instagramLink: 'https://www.instagram.com/kudansswing/'
  },
  {
    id: 'international-ballroom',
    title: 'International Ballroom',
    fullTitle: 'International Ballroom at KUDANS',
    description: 'Elegant, standardized partner dances including International Standard and International Latin dances, in a closed hold with precise technique.',
    longDescription: `
      International ballroom dancing is divided into two main categories: International Standard and International Latin. Each category includes five distinct dance styles, all of which are performed worldwide under the regulations of the World DanceSport Federation (WDSF). Those ten dances showcase a wide range of musicality, technique, and emotional expression. 
      
      At KUDANS, we become familiar with all of these dances through our curriculum classes; in the competition group, we focus on a selected few based on classification level, while in the show group, we incorporate the ones that best suit the theme.

      International Standard emphasize posture, elegance, and smooth movement. Partners stay in a closed hold throughout the routine, moving gracefully across the floor. Here we learn Waltz, Tango, Viennese Waltz, 

      International Latin is performed with a more open; compared to international standard branches, hold and focus on rhythm,sharp actions, body isolation, and expressive hip movement. Each dance carries a vibrant, often flirtatious or playful energy. Here we learn Cha-Cha, Samba, Rumba, Paso Doble, and Jive.
    `,
    imagePath: '/images/dances/international-ballroom.jpg',
    instructors: [
      {name: 'Viktor Synevich', title: 'Ballroom Director', image: '/images/dances/intballroom1_inst.png', bio: 'Viktor Synevich is a Ukraine-born dancer and adjudicator who began his career at age five. Holding a university degree in dance, he has competed and taught across International Standard and Latin disciplines. Since 2002, he has been active in Turkey as a certified TDSF and WDSF adjudicator. He is a co-founder of Master Dance Antalya and has been teaching show and competition classes at KUDANS since 2014.'},
      {name: 'Esin Bahat', title: 'Standard Ballroom Coach', image: '/images/dances/intballroom2_inst.png', instagram: 'esin.bahat', bio: 'Esin began her dance career at an early age and has specialized in various dance styles, particularly High Heels, Street Jazz, Hip-hop, and K-pop. While studying Psychology at Doğuş University, she continued to pursue her passion for dance and became recognized as a professional dancer.'},
    ],
    schedule: [
      {day: 'Monday', time: '20:00 - 22:45', level: 'Lecture'},
      {day: 'Sunday', time: '17:00 - 18:00', level: 'Practice Session'},
    ],
    videoUrl: 'https://www.youtube.com/embed/h8-AgSTfiEQ?si=VpvXNInWvmoFQDdK', // International Ballroom - Toxic Relationship (Nightmare 2024)
    galleryImages: [
      '/images/dances/ballroom-gallery-1.jpg',
      '/images/dances/ballroom-gallery-2.jpg',
      '/images/dances/ballroom-gallery-3.jpg',
    ],
    instagramLink: 'https://www.instagram.com/kudans.ballroom/'
  },
]; 