import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | KUDANS - Koç University Dance Club',
  description: 'Read the latest news, stories, and updates from KUDANS',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {children}
    </div>
  );
} 