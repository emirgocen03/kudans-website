import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Dance Style Not Found
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          We couldn't find the dance style you're looking for. It might have moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dances"
            className="bg-white hover:bg-gray-200 text-black text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
          >
            View All Dance Styles
          </Link>
          <Link
            href="/"
            className="bg-transparent hover:bg-white/10 border border-white text-white text-center py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 