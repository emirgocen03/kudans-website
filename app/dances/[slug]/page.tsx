import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { danceStyles } from '../data';
import DanceClient from './dance-client';
import { generateMetadata as getMetadata, generateStaticParams as getStaticParams } from './metadata-generator';

export const generateMetadata = getMetadata;
export const generateStaticParams = getStaticParams;

export default function DancePage({ params }: { params: { slug: string } }) {
  const dance = danceStyles.find((dance) => dance.id === params.slug);
  
  if (!dance) {
    notFound();
  }

  return <DanceClient dance={dance} />;
} 