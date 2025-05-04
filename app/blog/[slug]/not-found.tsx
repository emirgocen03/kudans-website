import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen py-12 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Blog Post Not Found</h1>
        <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-xl"
        >
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Browse All Blog Posts
          </span>
        </Link>
      </div>
    </div>
  );
} 