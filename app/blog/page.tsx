import Link from 'next/link';
import Image from 'next/image';
import BlogCard from '../components/BlogCard';

export const metadata = {
  title: 'Blog | KUDANS - Koç University Dance Club',
  description: 'Read the latest news, stories, and updates from KUDANS',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-24">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-700 animate-pulse drop-shadow-lg">
        COMING SOON
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl text-center mb-8">
        A space for stories, news, feelings, and insights from our vibrant KUDANS community. Join us as we share experiences, ideas, and connect with one another in a journey of growth and inspiration.
      </p>
    </div>
  );
} 