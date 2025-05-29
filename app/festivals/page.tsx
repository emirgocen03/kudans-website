import Link from 'next/link';
import FestivalCard from '../components/FestivalCard';
import { festivals } from '../data/festivalData';

export const metadata = {
  title: 'Past Festivals | KUDANS - Koç University Dance Club',
  description: 'Explore our previous dance festivals and events from KUDANS',
};

export default function FestivalsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center">Past Festivals</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Relive the magic of our previous dance festivals and performances
        </p>
        
        {/* Festivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {festivals.map((festival) => (
            <FestivalCard 
              key={festival.id}
              id={festival.id}
              title={festival.title}
              date={festival.date}
              description={festival.description}
              imageSrc={festival.imageSrc}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-purple-900 to-indigo-800 p-8 rounded-lg text-center text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Join Us At Our Next Festival!</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Don't miss our upcoming festival! Experience the excitement, creativity, 
            and artistry of KUDANS dancers live on stage.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfxECip1tq0q5OaSZYCpRgo6_7N6Fa-2JzkFqZIOe01Sb5-xA/viewform?usp=dialog" className="bg-white text-purple-800 hover:bg-purple-100 font-semibold py-2 px-6 rounded-full transition-all" target="_blank" rel="noopener noreferrer">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
} 