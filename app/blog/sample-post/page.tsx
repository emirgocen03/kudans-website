import Image from 'next/image';

export default function SampleBlogPostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/kudans_logo.png"
          alt="KUDANS Logo"
          fill
          className="object-contain p-12"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              The Future of Dance: Where Technology Meets Movement
            </h1>
            <p className="text-xl text-gray-300">
              How AI and motion capture are revolutionizing dance education
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Meta */}
        <div className="border-l-4 border-purple-500 pl-4 mb-12">
          <p className="text-gray-400">Published on February 15, 2024</p>
          <p className="text-gray-400">Reading time: 8 minutes</p>
          <div className="flex gap-2 mt-2">
            <span className="bg-purple-900/50 px-3 py-1 rounded-full text-sm">Technology</span>
            <span className="bg-pink-900/50 px-3 py-1 rounded-full text-sm">Dance Education</span>
            <span className="bg-blue-900/50 px-3 py-1 rounded-full text-sm">Innovation</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert lg:prose-xl">
          <p className="text-xl leading-relaxed">
            In the ever-evolving landscape of dance education and performance, technology is playing an increasingly pivotal role. 
            From AI-powered movement analysis to immersive virtual reality experiences, the way we learn, teach, and experience dance 
            is undergoing a remarkable transformation.
          </p>
        </div>

        {/* Quote Section */}
        <blockquote className="my-12 border-l-4 border-purple-500 pl-8 italic text-2xl text-gray-300">
          "Technology in dance isn't about replacing the human element—it's about enhancing our understanding of movement 
          and making dance education more accessible than ever before."
          <footer className="text-base text-gray-400 mt-4">
            — Dr. Sarah Chen, Dance Technology Researcher
          </footer>
        </blockquote>

        {/* Content Section with Image */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            The Rise of AI in Dance Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-invert">
              <p>
                Artificial Intelligence is revolutionizing how we approach dance education. Through advanced motion 
                capture technology and machine learning algorithms, students can receive real-time feedback on their 
                technique, posture, and movement quality.
              </p>
              <p>
                These AI systems can analyze countless data points per second, offering insights that might be 
                difficult for the human eye to catch. From tracking the angle of a développé to measuring the 
                fluidity of port de bras, technology is providing unprecedented precision in dance training.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden bg-black">
              <Image
                src="/images/kudans_logo.png"
                alt="KUDANS Logo"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-6">See It in Action</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual dance tech demo video
              title="Dance Technology Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Demo of AI-powered movement analysis in real-time
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold mb-8">Key Benefits of Dance Tech</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Precision Training",
                description: "Get detailed feedback on technique and form with millimeter accuracy",
                icon: "📊"
              },
              {
                title: "Accessibility",
                description: "Learn from anywhere with virtual classes and AI guidance",
                icon: "🌍"
              },
              {
                title: "Progress Tracking",
                description: "Monitor improvement over time with data-driven insights",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Element Placeholder */}
        <div className="my-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Try It Yourself</h3>
          <p className="mb-4">
            Experience how AI can analyze your dance movements. Upload a video or use your webcam for real-time feedback.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors">
            Launch Demo
          </button>
        </div>

        {/* Conclusion */}
        <div className="prose prose-invert lg:prose-xl">
          <h2>Looking Ahead</h2>
          <p>
            As we continue to push the boundaries of what's possible in dance education and performance, 
            the fusion of technology and movement arts opens up exciting new possibilities. While nothing 
            can replace the human element in dance, these technological advances are powerful tools that 
            can enhance our understanding and execution of movement.
          </p>
        </div>

        {/* Author Section */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-black">
              <Image
                src="/images/kudans_logo.png"
                alt="KUDANS Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Elena Martinez</h3>
              <p className="text-gray-400 mb-2">Dance Technology Specialist @ KUDANS</p>
              <p className="text-sm text-gray-500">
                Elena has been exploring the intersection of dance and technology for over a decade. 
                She holds a Master's in Dance Science and is passionate about making dance education 
                more accessible through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 flex gap-4 justify-center">
          <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-full transition-colors border-2 border-white flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share on X
          </button>
          <button className="bg-[#0A66C2] hover:bg-[#004182] text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Share on LinkedIn
          </button>
          <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
            Share on Story
          </button>
        </div>
      </article>
    </div>
  );
} 