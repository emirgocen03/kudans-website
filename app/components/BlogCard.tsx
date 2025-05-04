import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    author: string;
    readTime: string;
    coverImage?: string;
  };
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <div className="mb-12 bg-gray-800 bg-opacity-40 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
        <div className="md:flex">
          <div className="md:w-1/2 h-60 md:h-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10 opacity-40"></div>
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-gray-500">
                Featured Image
              </div>
            )}
          </div>
          <div className="md:w-1/2 p-8">
            <div className="flex items-center text-sm text-gray-300 mb-2">
              <span className="bg-white text-black px-2 py-1 rounded-full text-xs font-semibold mr-3">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} read</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                <span className="text-sm font-medium text-gray-200">By {post.author}</span>
              </div>
              <Link 
                href={`/blog/${post.id}`}
                className="text-white font-medium border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 bg-opacity-40 rounded-lg shadow-lg overflow-hidden transform hover:translate-y-[-5px] transition-all duration-300 border border-gray-700">
      <div className="h-48 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-40"></div>
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-gray-500">
            Blog Image
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-gray-300 mb-2">
          <span className="bg-white text-black px-2 py-1 rounded-full text-xs font-semibold mr-2">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{post.readTime} read</span>
          <Link 
            href={`/blog/${post.id}`}
            className="text-white text-sm font-medium border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
} 