import { Metadata } from 'next';
import { danceStyles } from '../data';

interface MetadataProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Generate metadata dynamically based on the slug
export async function generateMetadata({ params, searchParams }: MetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const dance = danceStyles.find((dance) => dance.id === resolvedParams.slug);
  
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