import { Metadata } from 'next';
import { danceStyles } from './data';
import DancesClient from './dances-client';

export const metadata: Metadata = {
  title: 'KUDANS | Dance Styles',
  description: 'Explore all dance styles offered by KUDANS at Koç University',
};

export default function DancesPage() {
  return <DancesClient danceStyles={danceStyles} />;
} 