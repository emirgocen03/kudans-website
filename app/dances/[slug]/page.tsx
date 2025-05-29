import { notFound } from 'next/navigation';
import { danceStyles } from '../data';
import DanceClient from './dance-client';
import { generateMetadata as getMetadata } from './metadata-generator';

export const generateMetadata = getMetadata;

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DancePage({ params, searchParams }: PageProps) {
  const dance = danceStyles.find((d) => d.id === params.slug);
  
  if (!dance) {
    notFound();
  }

  return <DanceClient dance={dance} />;
}

// Generate static params for all dance styles
export async function generateStaticParams() {
  return danceStyles.map((dance) => ({
    slug: dance.id,
  }));
} 