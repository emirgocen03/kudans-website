'use client';

import FestivalPreview from './FestivalPreview';

interface FestivalData {
  title: string;
  imageSrc: string;
  link: string;
}

interface PreviousFestivalsSectionProps {
  previousFestivals: FestivalData[];
}

const PreviousFestivalsSection = ({ previousFestivals }: PreviousFestivalsSectionProps) => {
  return (
    <section className="bg-gray-900 py-20 relative overflow-hidden" aria-labelledby="festivals-heading">
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      
      <div className="container-custom">
        <h2 id="festivals-heading" className="text-3xl font-bold mb-16 text-center text-white relative inline-block mx-auto w-full">
          <span className="relative inline-block">
            Previous Festivals
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {previousFestivals.map((festival) => (
            <FestivalPreview
              key={festival.title}
              title={festival.title}
              imageSrc={festival.imageSrc}
              link={festival.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousFestivalsSection; 