import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'KUDANS | Dance Styles',
    template: '%s | KUDANS',
  },
  description: 'Explore the various dance styles taught and performed at KUDANS, Koç University Dance Club',
};

export default function DancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <main>{children}</main>
    </div>
  );
} 