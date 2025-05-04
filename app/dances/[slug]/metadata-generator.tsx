import { Metadata } from 'next';
import { danceStyles } from '../data';

// Generate metadata dynamically based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dance = danceStyles.find((dance) => dance.id === params.slug);
  
  if (!dance) {
    return {
      title: 'Dance Style Not Found',
      description: 'The requested dance style could not be found',
    };
  }
  
  return {
    title: dance.fullTitle,
    description: dance.description,
  };
}

// Generate static paths for all dance styles
export async function generateStaticParams() {
  return danceStyles.map((dance) => ({
    slug: dance.id,
  }));
} 