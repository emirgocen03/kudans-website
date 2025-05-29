import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Board of Directors | KUDANS - Koç University Dance Club',
  description: 'Meet the KUDANS Board of Directors - the team behind Koç University Dance Club',
};

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen py-12 bg-black text-white">
      {children}
    </div>
  );
} 