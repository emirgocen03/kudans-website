import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PosterZoom from './PosterZoom';

// Type definition for the festival data
interface Festival {
  id: string;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  highlights: string[];
  videos?: { title: string; src: string }[];
  photos?: string[];
}

// Fetch festival data (would be replaced with real data fetching in production)
const getFestivalData = (id: string): Festival | undefined => {
  // This is a mock database - in a real application this would come from a real database
  const festivals: Festival[] = [
    {
      id: '2024-nightmare',
      title: 'Nightmare',
      date: '2024',
      description: 'An exploration of fear and triumph through dance.',
      imageSrc: '/images/festivals/2024_Nightmare/2024poster.png',
      highlights: [
        'Morning program at Henry Ford with workshops and social dances throughout the day',
        'Red Bull Dance Your Style featuring top street dancers battling in one-on-one competitions',
        'Soul train experience with the funkiest students of Koç University',
        'Red Bull DJ night party at Henry Ford',
        'Big Rhythm Swing band live performance',
        'Immersive horror-themed performances',
        'Creative interpretations of nightmares and fears'
      ],
      videos: [
        { title: 'Hip Hop - Crowd Fear', src: 'https://www.youtube.com/embed/hZuLYUyUw84?si=qVuYbW1lbvhHHoyz' },
        { title: 'Tango - Failure', src: 'https://www.youtube.com/embed/xzJnX_LwZ_Q?si=sD_x7o1Nf3BW7lVT' },
        { title: 'Social Latin - Loneliness', src: 'https://www.youtube.com/embed/0pO-_XqzOXo?si=R74TZRRYxGS7uMm6' },
        { title: 'Modern - Delirium', src: 'https://www.youtube.com/embed/IAMvU5HfypE?si=gZYb4lpBeeBKvGXC' },
        { title: 'Swing - Being Followed', src: 'https://www.youtube.com/embed/Ik9OOCZyz6A?si=hRnKtMJV9zdgU1oH' },
        { title: 'International Ballroom - Toxic Relationship', src: 'https://www.youtube.com/embed/h8-AgSTfiEQ?si=VpvXNInWvmoFQDdK' },
      ],
      photos: [
        '/images/festivals/2024_Nightmare/photo1.jpg',
        '/images/festivals/2024_Nightmare/photo2.jpg',
        '/images/festivals/2024_Nightmare/photo3.jpg',
        '/images/festivals/2024_Nightmare/photo4.jpg',
      ],
    },
    {
      id: '2023-awards',
      title: 'Awards',
      date: '2023',
      description: 'A celebration of cinema and iconic movie moments through the art of dance.',
      imageSrc: '/images/festivals/2023_Awards/2023poster.png',
      highlights: [
        'Exclusive morning program at the Student Center featuring talented dancers',
        'Vibrant soul train experience with iconic dance moves',
        'Interactive workshops and social dancing throughout the day',
        'Breathtaking recreations of famous movie scenes through artistic costumes and decorations',
        'Immersive journey through iconic film soundtracks with live performance',
        'Glamorous red carpet experience with photo opportunities and Hollywood-style reception'
      ],
      videos: [
        { title: 'Tango - Moulin Rouge', src: 'https://www.youtube.com/embed/G6X5mp3hmC4?si=LgChWb0ExQUsDCmy' },
        { title: 'Hiphop - Harry Potter', src: 'https://www.youtube.com/embed/vfZsLmMnuvQ?si=OCfuIQ1RXaIO7P2T' },
        { title: 'Social Latin - Pirates of the Caribbean', src: 'https://www.youtube.com/embed/QS6DAExdlp4?si=zozCuznM11vTbjj5' },
        { title: 'Modern - The Matrix', src: 'https://www.youtube.com/embed/uQN8ZrkUJ2U?si=gJF5TipNXghlKwsF' },
        { title: 'Swing - Singing in the Rain', src: 'https://www.youtube.com/embed/lcPndrPipts?si=FJeyGysEnTgj6blX' },
        { title: 'Dance Sport - The Phantom of the Opera', src: 'https://www.youtube.com/embed/8pTv4FOGaDo?si=sZtU-NiKEvs-ZkK6' },
      ],
      photos: [
        '/images/festivals/2023_Awards/photo1.jpg',
        '/images/festivals/2023_Awards/photo2.jpg',
        '/images/festivals/2023_Awards/photo3.jpg',
        '/images/festivals/2023_Awards/photo4.jpg',
      ],
    },
    {
      id: '2022-galaxy',
      title: 'Galaxy',
      date: '2022',
      description: 'A cosmic journey through space and time expressed through movement and dance.',
      imageSrc: '/images/festivals/2022_Galaxy/2022poster.png',
      highlights: [
        'Exclusive morning program at Winter Garden with a galactic dance party all day long',
        'Funky soul train experience with prizes',
        'Out-of-this-world workshops exploring cosmic dance styles',
        'Social dancing with gravity-defying moves throughout the day',
        'Stunning celestial visuals and space-themed costumes',
        'Exploration of science fiction through innovative choreography'
      ],
      videos: [
        { title: 'Swing - The Planet Charleston', src: 'https://www.youtube.com/embed/nloC9835nuk?si=2H3-6nYsFe3g2S9P' },
        { title: 'Modern - The Planet Balance', src: 'https://www.youtube.com/embed/rK4wjLtB8eA?si=ioy9eCrq2VCPjGcL' },
        { title: 'Tango - The Planet Milonga', src: 'https://www.youtube.com/embed/ebD0k6o-S4c?si=tnv22dT9dZR-l0MN' },
        { title: 'Social Latin - The Planet Cucaracha', src: 'https://www.youtube.com/embed/TXLdGPlMiCE?si=Js-8uz3U52QiPmXa' },
        { title: 'Hiphop - The Planet Groove', src: 'https://www.youtube.com/embed/BMfpNyRZxGw?si=N-tlvu8q5uAK2PPj' },
        { title: 'Dance Sport - The Planet Chasse', src: 'https://www.youtube.com/embed/GU5_Jx9QjME?si=FZ6mJNRh539Huud9' },
      ],
      photos: [
        '/images/festivals/2022_Galaxy/photo1.jpg',
        '/images/festivals/2022_Galaxy/photo2.jpg',
        '/images/festivals/2022_Galaxy/photo3.jpg',
        '/images/festivals/2022_Galaxy/photo4.jpg',
      ],
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
        'Cross-disciplinary artistic expression with the spirit of the new year',
        'Showcasing the diversity of performing arts at Koç University'
      ],
      videos: [
        { title: 'Tango', src: 'https://www.youtube.com/embed/xPAftXbtpU8?si=74esS0WLY_GxGVLu' },
        { title: 'Swing', src: 'https://www.youtube.com/embed/60zYUgWXTUQ?si=hjBXxVZ-sG2x142P' },
        { title: 'International Standard', src: 'https://www.youtube.com/embed/m6TgfSzspyM?si=N0c2MRpekH9uVqkK' },
        { title: 'Hiphop', src: 'https://www.youtube.com/embed/_-6OWs-G29Q?si=CqBs3hLhtddPQTMq' },
        { title: 'Social Latin', src: 'https://www.youtube.com/embed/JZOCQxr1DnY?si=WxA2iwsfbmpdhqUS' },
        { title: 'Modern', src: 'https://www.youtube.com/embed/OwfqqwTbdck?si=ewUEIbTBVwaFzjB_' },
        { title: 'International Latin', src: 'https://www.youtube.com/embed/4bCBMhQ8XQI?si=5wQobLrm44XqWxYd' },
      ],
      photos: [
        '/images/festivals/2022_A-December-to-Remember/photo1.jpg',
        '/images/festivals/2022_A-December-to-Remember/photo2.jpg',
        '/images/festivals/2022_A-December-to-Remember/photo3.jpg',
        '/images/festivals/2022_A-December-to-Remember/photo4.jpg',
      ],
    },
    {
      id: '2019-twisted-tales',
      title: 'Twisted Tales',
      date: '2019',
      description: 'Familiar stories reimagined through dance performances and creative storytelling.',
      imageSrc: '/images/festivals/2019_Twisted-Tales/2019poster.png',
      highlights: [
        'Enchanting morning program at the Student Center',
        'Live performances from Flapper Swing and Uninvited Jazz Band for social dancing',
        'Magical workshops teaching mysterious dance techniques and storytelling through movement',
        'Dark reimaginings of classic fairy tales with unexpected twists',
        'Elaborate costumes bringing fantastical characters to life',
        'Interactive storytelling through captivating choreography'
      ],
      videos: [
        { title: 'International Standard', src: 'https://www.youtube.com/embed/sNK0gaQIoQ8?si=Wd0FP24aCWBLCPwk' },
        { title: 'International Latin', src: 'https://www.youtube.com/embed/AtiO-g076jI?si=ozLow_LZx6J4x8uX' },
        { title: 'Tango', src: 'https://www.youtube.com/embed/9UNB9jH77uk?si=m2JgRgGzWbzokwf_' },
        { title: 'Hiphop', src: 'https://www.youtube.com/embed/OEKMwWj4dQc?si=SVC23gVzHz66fecX' },
        { title: 'Swing', src: 'https://www.youtube.com/embed/fJXAFX-gV5Q?si=mRlyTrszSfYLrgKn' },
        { title: 'Social Latin', src: 'https://www.youtube.com/embed/pRQkAk08GaM?si=S5kV2QKAdSgfRsfm' },
        { title: 'Oryantal', src: 'https://www.youtube.com/embed/yhgDojshcc0?si=xSYuwrMYMgIdLYoz' },
      ],
      photos: [
        '/images/festivals/2019_Twisted-Tales/photo1.jpg',
        '/images/festivals/2019_Twisted-Tales/photo2.jpg',
        '/images/festivals/2019_Twisted-Tales/photo3.jpg',
        '/images/festivals/2019_Twisted-Tales/photo4.jpg',
      ],
    },
    {
      id: '2018-seven',
      title: 'Seven',
      date: '2018',
      description: 'An exploration of the seven deadly sins through the power of dance.',
      imageSrc: '/images/festivals/2018_Seven/2018poster.png',
      highlights: [
        'Telling the story of Lust, Greed, Pride, Sloth, Gluttony, Wrath, Envy',
        'Themed performances representing each sin, all in one festival',        
        'Workshops and evil social dancing at Winter Garden',
        'Emotional journey to the dark side of the human, full of sin',
        'Contrast of dance styles reflecting opposing concepts',
        'Thought-provoking choreographies and visual storytelling for those who dare to watch'
      ],
      videos: [
        { title: 'International Standard - Lust', src: 'https://www.youtube.com/embed/PKgw8_vZ0Hg?si=ez-gohEtAck66FJq' },
        { title: 'International Latin - Greed', src: 'https://www.youtube.com/embed/i4FtuuqqCvI?si=3sf-dO-h2_fwzFJt' },
        { title: 'Oryantal - Pride', src: 'https://www.youtube.com/embed/Gtmx0XI0LRc?si=3wxHrMniNlqy3_qv' },
        { title: 'Swing - Sloth', src: 'https://www.youtube.com/embed/FadgSjctgew?si=AnpTjDh9NTrIr5K6' },
        { title: 'Hiphop - Gluttony', src: 'https://www.youtube.com/embed/FadgSjctgew?si=ZEc_vQcemC8ejCGp' },
        { title: 'Tango - Wrath', src: 'https://www.youtube.com/embed/K618WrRRcv0?si=oiVgeMUVxEL339LG' },
        { title: 'Social Latin - Envy', src: 'https://www.youtube.com/embed/PCmCMUstNzI?si=DZYPCm_oxtyRDqfc' },
        { title: 'International Latin - Competition Group', src: 'https://www.youtube.com/embed/QU9nFySEoyA?si=L-UW-niQS2ia5vJk' },
        { title: 'Standard - Competition Group', src: 'https://www.youtube.com/embed/4tIz-Ue7mw4?si=pxNY7ovwd-slPazC' },
        { title: 'Barkovizyon - 7 Sins', src: 'https://www.youtube.com/embed/IXxJlFOQQbE?si=nnwDIKKgtV3E29pU' },
      ],
      photos: [
        '/images/festivals/2018_Seven/photo1.jpg',
        '/images/festivals/2018_Seven/photo2.jpg',
        '/images/festivals/2018_Seven/photo3.jpg',
        '/images/festivals/2018_Seven/photo4.jpg',
      ],
    },
    {
      id: '2017-time-traveller',
      title: 'Time Traveller',
      date: '2017',
      description: 'Dance performances navigating through different eras and historical moments.',
      imageSrc: '/images/festivals/2017_Time-Traveller/2017poster.png',
      highlights: [
        'An invitation to a journey through different eras and historical moments',
        'Authentic costumes and timeless music selections',
        'Student Center filled with the festival atmosphere, morning program, workshops and social dancing',
        'Special cocktails and food before the night shows',
        'From ancient times of the earth to the post-apocalyptic world, a journey through history'
      ],
      videos: [
        { title: 'Standard - Ancient Rome', src: 'https://www.youtube.com/embed/nBQy-5548oE?si=M1CQ2GZ9ReHWVgMB' },
        { title: 'Oryantal - Ancient Egypt', src: 'https://www.youtube.com/embed/qXfbmRwevaI?si=MsvE-OGhKYbtP33r' },
        { title: 'Swing - Time Travel', src: 'https://www.youtube.com/embed/KMbd-KKGX-U?si=bnXiuuHy0GBR4Vqt' },
        { title: 'Hiphop - Post-Apocalyptic', src: 'https://www.youtube.com/embed/qdYVb2pg4_w?si=stO5MI4XF0pikfMA' },
        { title: 'Tango - Republican Era of Turkey', src: 'https://www.youtube.com/embed/QRVv3X_e3to?si=c1nXyTxt1J33IE62' },
        { title: 'Social Latin - Cuba Street', src: 'https://www.youtube.com/embed/Vgn9ZQY-ITs?si=nlh-T9QziV60vnyf' },
        { title: 'Barkovizyon - Time Travel', src: 'https://www.youtube.com/embed/89va10qO2lI?si=bAA0p_7-M9NgQMwM' },
      ],
      photos: [
        '/images/festivals/2017_Time-Traveller/photo1.jpg',
        '/images/festivals/2017_Time-Traveller/photo2.jpg',
        '/images/festivals/2017_Time-Traveller/photo3.jpg',
        '/images/festivals/2017_Time-Traveller/photo4.jpg',
      ],
    },
    {
      id: '2016-kudans-island',
      title: 'KUDANS Island',
      date: '2016',
      description: 'A tropical adventure themed festival showcasing diverse dance performances.',
      imageSrc: '/images/festivals/2016_Kudans-Island/2016poster.png',
      highlights: [
        'A journey through KUDANS Island, where you can find a tropical paradise and a lot of dance',
        'Morning program, daytime activities, workshops and social dancing at the Founders Hall',
        'Immersive tropical setting, exotic atmosphere, and mythical stories',
        'Adventure just begins as we set sail to the island, surprises await you at the show after cocktails'
      ],
      videos: [
        { title: 'Bachata 2nd Group', src: 'https://www.youtube.com/embed/hLWFI7v3Tx4?si=M9E4qFFCvk6VPlUo' },
        { title: 'Bachata 1st Group', src: 'https://www.youtube.com/embed/aNDWJLpQEaI?si=h5WGsVZDBpfePByR' },
        { title: 'Tango', src: 'https://www.youtube.com/embed/tdRlAsb3e70?si=HscIdTvIMv2mJufp' },
        { title: 'Milango', src: 'https://www.youtube.com/embed/o4LxzkAkx_U?si=h98Jx7oqtKZ4oAP6' },
        { title: 'Oryantal', src: 'https://www.youtube.com/embed/ztPBPtsjEl4?si=jl7ZmIymR_Sja10_' },
        { title: 'International Latin', src: 'https://www.youtube.com/embed/R_-rmK_ZSQA?si=BJX6HWF8vhD1HmdH' },
        { title: 'Salsa', src: 'https://www.youtube.com/embed/qbtH2VJXPRI?si=nMuKG_XxI6g2HfkV' },
        { title: 'International Standard', src: 'https://www.youtube.com/embed/mg0W5eR1eCQ?si=EA43ZSkglEXq_ZH1' },
        { title: 'Hiphop', src: 'https://www.youtube.com/embed/_QYrjB8ji6s?si=FRnHfcI99Dph0I9K' },
      ],
      photos: [
        '/images/festivals/2016_Kudans-Island/photo1.jpg',
        '/images/festivals/2016_Kudans-Island/photo2.jpg',
        '/images/festivals/2016_Kudans-Island/photo3.jpg',
        '/images/festivals/2016_Kudans-Island/photo4.jpg',
      ],
    },
    {
      id: '2015-kocdans-studios',
      title: 'KoçDans Studios',
      date: '2015',
      description: 'A cinematic journey through famous films reimagined through the art of dance.',
      imageSrc: '/images/festivals/2015_KoçDans-Studios/2015poster.png',
      highlights: [
        'Step into KoçDans Studios, where iconic films come alive through dance performances',
        'Student Center transformed into a Hollywood film set with workshops and social dancing all day',
        'Special Willy Wonka golden ticket hidden somewhere during the festival for the lucky finder',
        'Exclusive pre-show cocktail reception with film-themed drinks and atmosphere',
        'Celebrating legendary films of KoçDans Studios including Fight Club, Kill Bill, Black Swan, James Bond, Desperado, The Phantom of the Opera, Sweeney Todd, Mr. and Mrs. Smith, Grease, and Black Widow',
        'Performances inspired by the films Kill Bill, Scary Jive, The Godfather, Slumdog Millionaire, Chicago, and James Bond.'
      ],
      videos: [
        { title: 'Salsa - Kill Bill', src: 'https://www.youtube.com/embed/MAbw8NcYQ_Q?si=46uz2Q3ca22Z35ID' },
        { title: 'Jive - Scary Jive', src: 'https://www.youtube.com/embed/pSthpjYTTVg?si=Idyulk0-XgoJJn94' },
        { title: 'Hiphop - The Godfather', src: 'https://www.youtube.com/embed/qUkApD87jXM?si=2cKkFT3UjTJQM2EG' },
        { title: 'Hint/Oryantal - Slumdog Millionaire', src: 'https://www.youtube.com/embed/hn0jOLFyJVI?si=yfu8xxMm9TQ60_0p' },
        { title: 'Standard - Chicago', src: 'https://www.youtube.com/embed/RJbSOywBA3w?si=SUn2peSynfM8PTND' },
        { title: 'Tango - James Bond', src: 'https://www.youtube.com/embed/2vLSy1MCYAM?si=HADWjw7ruTA98XTJ' },
        { title: 'Barkovizyon', src: 'https://www.youtube.com/embed/jGF2v4UZ9co?si=Yh73_fnfbp5ECuC-' },
      ],
      photos: [
        '/images/festivals/2015_KoçDans-Studios/photo1.jpg',
        '/images/festivals/2015_KoçDans-Studios/photo2.jpg',
        '/images/festivals/2015_KoçDans-Studios/photo3.jpg',
        '/images/festivals/2015_KoçDans-Studios/photo4.jpg',
      ],
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
        'Step into the exotic world of cabaret with workshops and social dancing at the Student Center',
        'Spectacular choreography showcasing Jive, Tango, Hip Hop, Social Latin, Cha Cha, and more',
        'Vintage aesthetic with glamorous costumes and atmospheric lighting',
        'Pre-show reception with cabaret-themed refreshments and entertainment'
      ],
      videos: [
        { title: 'Jive', src: 'https://www.youtube.com/embed/KDr1ybDeToA?si=fa0aohQ_zg4Txhrk' },
        { title: 'Belly Cabaret/Oryantal', src: 'https://www.youtube.com/embed/jeL4jI_PBBY?si=Vuo2WNS01_N3XgI_' },
        { title: 'Social Latin', src: 'https://www.youtube.com/embed/AWgE5CQ1zB0?si=k60U60V9RbfcNuSb' },
        { title: 'Cha Cha', src: 'https://www.youtube.com/embed/ErlfS0ItaVk?si=TyV8LBqJkgf53hAs' },
        { title: 'Tango', src: 'https://www.youtube.com/embed/l6BnM_SXAKU?si=U0fbFTFvY-HdUL7h' },
        { title: 'Hiphop', src: 'https://www.youtube.com/embed/Iwig2CkoC7Q?si=zGJATFEC9wjadhsj' },
        { title: 'Step Dance', src: 'https://www.youtube.com/embed/wGSdJ9L3aqI?si=sF1mooHrjKPiB-5y' },
      ],
      photos: [
        '/images/festivals/2014_KoçDans-Kabaresi/photo1.jpg',
        '/images/festivals/2014_KoçDans-Kabaresi/photo2.jpg',
        '/images/festivals/2014_KoçDans-Kabaresi/photo3.jpg',
        '/images/festivals/2014_KoçDans-Kabaresi/photo4.jpg',
      ],
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
      ],
      videos: [
        { title: 'Nursing YO Dance Show', src: 'https://www.youtube.com/embed/JJca2jSbDLA?si=Ju2NzXAFkP3pq_Hx' },
        { title: 'Jive', src: 'https://www.youtube.com/embed/DO5_pZ8B4b8?si=Vyvz29b72z00cnWX' },
        { title: 'Tango - Utku Küley', src: 'https://www.youtube.com/embed/bBh-hHBow6k?si=iXOlnOvngIfniRQn' },
        { title: 'International Latin', src: 'https://www.youtube.com/embed/9BN3QTYpc_Q?si=LQZmpnm3tCaU2VsC' },
        { title: 'Tango', src: 'https://www.youtube.com/embed/BkTdmDAW4BA?si=BKbV4e45xG13Rqlz' },
        { title: 'Step Dance', src: 'https://www.youtube.com/embed/08vyCKxsas8?si=vj04N7h07yZXmF1w' },
        { title: 'Cha Cha', src: 'https://www.youtube.com/embed/VihC7vv9qNU?si=f6zZODalHn-MWR4V' },
        { title: 'Salsa Cha-cha', src: 'https://www.youtube.com/embed/h4ddjfxPJy8?si=DkluTJM6WsTJ9QG8' },
        { title: 'Styling', src: 'https://www.youtube.com/embed/J7V_re3nwyE?si=DxYtbd-gtlGTR0Jz' },
        { title: 'Oryantal', src: 'https://www.youtube.com/embed/LZSNBXIj8gQ?si=lMNL8rtYGKCumjEb' },
        { title: 'RnB', src: 'https://www.youtube.com/embed/7CY9fkvpE1Y?si=PTdD2Y1UmL4oTk-n' },
        { title: 'Barkovizyon', src: 'https://www.youtube.com/embed/dakXKuKwS3g?si=BUVj-AR3r8DYsEuK' },
      ],
      photos: [
        '/images/festivals/2013_KoçDans-13-Dans-Festivali/photo1.jpg',
        '/images/festivals/2013_KoçDans-13-Dans-Festivali/photo2.jpg',
        '/images/festivals/2013_KoçDans-13-Dans-Festivali/photo3.jpg',
        '/images/festivals/2013_KoçDans-13-Dans-Festivali/photo4.jpg',
      ],
    },
    {
      id: '2025-carnaval',
      title: 'Carnaval',
      date: '2025',
      description: `23rd KUDANS Festival will be with you at SGKM on May 6-7-8, 2025!`,
      imageSrc: '/images/festivals/2025_Carnival/2025poster.png',
      highlights: [
        'A spectacular carnival show full of surprises',
        'Acrobats, freak shows, pantomimes, magicians, clowns, dancers, and more',
        'Each act is a secret until the curtain rises',
        'A celebration of unity, resistance, and the power of dance',
        'Immersive carnival atmosphere with vibrant performances',
        'This is our voice, our platform, our declaration of resistance - #DİRENİŞSAHNEDE',
      ],
      // No videos or photos yet
    },
  ];

  return festivals.find(festival => festival.id === id);
};

// Metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const festival = getFestivalData(params.id);
  
  if (!festival) {
    return {
      title: 'Festival Not Found',
      description: 'The requested festival could not be found',
    };
  }
  
  return {
    title: `${festival.title} Festival | KUDANS - Koç University Dance Club`,
    description: festival.description,
  };
}

export default function FestivalPage({ params }: { params: { id: string } }) {
  const festival = getFestivalData(params.id);
  
  if (!festival) {
    notFound();
  }
  
  return (
    <div className={`min-h-screen py-12 ${festival.id === '2025-carnaval' ? 'bg-gradient-to-b from-[#4B0000] via-[#1a0000] to-black animate-gradient-x' : 'bg-gradient-to-b from-gray-900 to-black'} text-white`}>
      <div className="container-custom">
        {/* Header with Poster */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center">
          <div className="lg:w-1/3 relative">
            <PosterZoom 
              imageSrc={festival.imageSrc} 
              title={festival.title} 
            />
          </div>
          
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{festival.title}</h1>
              <span className="bg-white text-black px-5 py-1 rounded-full text-lg font-semibold shadow-lg">{festival.date}</span>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 border-l-4 border-white pl-5 italic">{festival.description}</p>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg mb-6 text-white shadow-lg transform hover:translate-y-[-5px] transition-all duration-300 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Festival Highlights
              </h2>
              <ul className="space-y-3">
                {festival.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3 opacity-75">•</span>
                    <span className="text-gray-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Videos Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Performance Videos</span>
            <div className="h-1 w-40 bg-white bg-opacity-40 rounded-full mx-auto mt-3"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festival.videos?.map((video, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform hover:translate-y-[-5px] transition-all duration-300 border border-gray-700">
                <div className="aspect-video relative">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-gradient-to-r from-gray-800 to-gray-700">
                  <h3 className="font-bold text-lg text-white">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Back Button */}
        <div className="text-center">
          <Link href="/festivals" className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-xl">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Festivals
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 