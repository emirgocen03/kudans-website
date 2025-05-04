import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ShareButton from '../../components/ShareButton';

// Type definitions
interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  content?: string;
  authorImage?: string;
  coverImage?: string;
}

// Mock blog data (would be fetched from CMS or database in production)
const getBlogPost = (slug: string): BlogPost | undefined => {
  const blogPosts: BlogPost[] = [
    {
      id: 'preparing-for-carnival',
      title: 'Preparing for Carnival: Behind the Scenes',
      date: 'April 20, 2023',
      excerpt: 'Take a look at what goes into preparing for our biggest event of the year, from choreography sessions to costume design.',
      category: 'Events',
      author: 'Ayşe Yılmaz',
      readTime: '5 min',
      content: `
        <p>The annual KUDANS Carnival is our most anticipated event of the year. Months of preparation go into creating a spectacular show that showcases the talents of our dancers across all styles and levels. In this behind-the-scenes look, we'll walk you through our journey from initial concept to final performance.</p>
        
        <h2>Conceptualization Phase</h2>
        <p>Every great show begins with a strong concept. This year's Carnival theme, "Dreams and Nightmares," was selected after weeks of brainstorming among the executive team and choreographers. We wanted a theme that would allow for creative expression across different dance styles while maintaining a cohesive narrative throughout the show.</p>
        
        <p>Once the theme was established, our choreographers began developing ideas for their specific routines. Each team was assigned a particular aspect of the theme to interpret through their unique dance style. Hip-hop took on the "urban nightmares" concept, contemporary explored "dreamscapes," and Latin styles embodied "passionate dreams."</p>
        
        <h2>Choreography Development</h2>
        <p>With concepts in place, the real work began. Choreographers typically spend 2-3 weeks developing their routines before teaching them to dancers. This involves:</p>
        
        <ul>
          <li>Selecting the perfect music that matches both the theme and the energy of the dance style</li>
          <li>Creating movement phrases that convey the emotional content of the theme</li>
          <li>Designing formations and transitions that make effective use of stage space</li>
          <li>Adapting choreography to the skill level of the dancers while still challenging them</li>
        </ul>
        
        <p>During this phase, our choreographers often collaborate with each other, sharing ideas and ensuring that the transitions between different performances will be smooth and thematically consistent.</p>
        
        <h2>Rehearsal Process</h2>
        <p>With choreography developed, we begin the intense rehearsal process. Each dance team typically rehearses twice a week for two hours. As we get closer to the show date, additional rehearsals are scheduled, culminating in full run-throughs during the week before the event.</p>
        
        <p>This year, we've implemented a new rehearsal strategy with dedicated "cleaning sessions" where choreographers focus exclusively on perfecting details rather than teaching new material. This has significantly improved the precision and synchronization of our performances.</p>
        
        <h2>Costume Design and Production</h2>
        <p>While dance rehearsals are underway, our costume team works diligently to bring the visual aspects of the show to life. For this year's Carnival, we've partnered with textile design students from Koç University's Visual Arts Department to create custom costumes that perfectly embody our theme.</p>
        
        <p>Each dance style has custom-designed costumes that not only facilitate movement but also contribute to the storytelling aspect of the performance. The costume team must consider durability, comfort, visual impact, and quick-change requirements when designing for multiple performances.</p>
        
        <h2>Technical Production</h2>
        <p>The technical aspects of the show are equally important to its success. Our tech team works on:</p>
        
        <ul>
          <li>Lighting design that enhances the mood of each performance</li>
          <li>Sound engineering to ensure perfect audio quality throughout the venue</li>
          <li>Visual effects and projections that complement the dance performances</li>
          <li>Stage management and prop coordination</li>
        </ul>
        
        <p>The week before the show involves technical rehearsals where all these elements come together for the first time. It's often a challenging period with long hours, but seeing all the components align is incredibly rewarding.</p>
        
        <h2>Final Countdown</h2>
        <p>The 48 hours before opening night are always a whirlwind of activity. Final costume alterations, technical adjustments, and dress rehearsals occupy every moment. Despite the stress, there's an electric energy of anticipation among all participants.</p>
        
        <p>This year, we're expecting over 500 audience members for each of our three performances. Tickets have already sold out for the opening night, and we're expecting the remaining shows to sell out soon as well.</p>
        
        <p>Stay tuned for our post-Carnival recap, and if you haven't secured your tickets yet, do so quickly before they're all gone!</p>
      `,
      authorImage: '/images/blog/authors/ayse.jpg',
      coverImage: '/images/blog/covers/carnival-prep.jpg',
    },
    {
      id: 'dance-as-therapy',
      title: 'Dance as Therapy: How Movement Improves Mental Health',
      date: 'March 15, 2023',
      excerpt: 'Explore the therapeutic benefits of dance and how regular dance practice can significantly improve mental wellbeing and reduce stress.',
      category: 'Health',
      author: 'Zeynep Kaya',
      readTime: '7 min',
      content: `
        <p>In our fast-paced modern world, finding effective ways to manage stress and maintain mental health is more important than ever. While traditional forms of therapy remain valuable, alternative approaches like dance therapy are gaining recognition for their profound impact on psychological wellbeing. As both a student of psychology and a passionate dancer, I've witnessed firsthand the transformative power of movement as medicine.</p>
        
        <h2>The Science Behind Dance and Mental Health</h2>
        <p>Research consistently shows that dance offers significant benefits for mental health. When we dance, our bodies release endorphins—natural mood elevators that reduce stress and pain. But the benefits go far beyond this immediate chemical reaction.</p>
        
        <p>A 2019 study published in the Journal of Physiological Anthropology found that participants who engaged in dance sessions twice weekly for three months showed marked decreases in depression symptoms and improved cognitive function. Another study from the American Journal of Dance Therapy demonstrated that regular dance practice improved body image and self-esteem in adolescents.</p>
        
        <h2>Expression Through Movement</h2>
        <p>Perhaps one of the most powerful aspects of dance as therapy is its nonverbal nature. Many emotional experiences are difficult to articulate with words, but movement offers an alternative language for expression.</p>
        
        <p>In contemporary dance especially, we explore emotional narratives through movement qualities—sharp, aggressive movements might express anger or frustration, while fluid, expansive motions might represent liberation or joy. This physical externalization of internal states can be profoundly cathartic.</p>
        
        <p>For individuals with trauma histories, verbal processing can sometimes be retraumatizing. Dance therapy offers a gentle alternative, allowing the body to process and release what the mind might not yet be ready to verbalize.</p>
        
        <h2>Mindfulness in Motion</h2>
        <p>Much has been written about the benefits of mindfulness for mental health. Dance offers a unique form of embodied mindfulness—focusing attention on the present moment through physical sensation and movement awareness.</p>
        
        <p>When we dance, we must pay attention to our bodies in space, to rhythm, to breath, to the interplay of tension and release. This focused attention creates a respite from rumination and worry, training the mind to stay present rather than dwelling on past regrets or future anxieties.</p>
        
        <h2>Social Connection and Belonging</h2>
        <p>Humans are inherently social creatures, and loneliness is increasingly recognized as a significant public health concern. Group dance classes and performances create community, fostering a sense of belonging that's fundamental to psychological wellbeing.</p>
        
        <p>At KUDANS, we've seen countless shy newcomers blossom into confident performers through the supportive environment of our dance community. The shared vulnerability of learning new movements, the collective achievement of mastering a choreography, and the emotional bonding through artistic expression all contribute to meaningful social connections.</p>
        
        <h2>Implementing Dance in Your Self-Care Routine</h2>
        <p>The beauty of dance as therapy is its accessibility. You don't need to be a trained dancer to benefit from movement as medicine. Here are some ways to incorporate therapeutic dance into your life:</p>
        
        <ul>
          <li><strong>Free movement sessions:</strong> Set aside 10-15 minutes to move freely to music that resonates with your current emotional state. There are no "wrong" movements—simply allow your body to express itself authentically.</li>
          <li><strong>Structured classes:</strong> If you prefer guidance, explore different dance styles to find what resonates with you. From the precision of ballet to the freedom of contemporary or the rhythmic energy of hip-hop, different forms offer different therapeutic benefits.</li>
          <li><strong>Dance meditation:</strong> Combine the principles of mindfulness meditation with gentle, repetitive movement to create a moving meditation practice.</li>
          <li><strong>Social dance:</strong> Partner dances like salsa or swing can be particularly effective for building social connections while reaping the physical and mental benefits of dance.</li>
        </ul>
        
        <h2>When to Seek Professional Support</h2>
        <p>While recreational dance offers significant mental health benefits, certified dance/movement therapists bring professional training to the therapeutic application of movement. If you're dealing with significant mental health challenges, consider working with a dance/movement therapist who can tailor interventions to your specific needs.</p>
        
        <p>Dance/movement therapy sessions might include guided improvisations, structured movement experiences, verbal processing of movement insights, and integration of movement with other therapeutic modalities.</p>
        
        <h2>Conclusion</h2>
        <p>In a world where we often live from the neck up, dance reconnects us with the wisdom of our bodies and the healing power of creative expression. Whether you're managing everyday stress, processing deeper emotional challenges, or simply seeking to enhance your overall wellbeing, movement offers medicine that's accessible, enjoyable, and profoundly effective.</p>
        
        <p>As we say at KUDANS: Don't wait for the perfect time to dance—dance to create the perfect moment in time.</p>
      `,
      authorImage: '/images/blog/authors/zeynep.jpg',
      coverImage: '/images/blog/covers/dance-therapy.jpg',
    },
    {
      id: 'history-of-hip-hop',
      title: 'The Evolution of Hip-Hop: From Streets to Global Phenomenon',
      date: 'February 28, 2023',
      excerpt: 'A deep dive into the rich history of hip-hop dance from its origins in the Bronx to becoming a worldwide cultural movement.',
      category: 'Dance History',
      author: 'Kaan Demir',
      readTime: '10 min',
      content: 'Full content about hip-hop history would go here...',
      authorImage: '/images/blog/authors/kaan.jpg',
      coverImage: '/images/blog/covers/hip-hop-history.jpg',
    },
    {
      id: 'interview-choreographer',
      title: 'Interview with Guest Choreographer Elif Yıldız',
      date: 'February 10, 2023',
      excerpt: 'We sat down with renowned contemporary dancer and choreographer Elif Yıldız to discuss her creative process and upcoming collaboration.',
      category: 'Interviews',
      author: 'Mehmet Can',
      readTime: '8 min',
      content: 'Full interview content would go here...',
      authorImage: '/images/blog/authors/mehmet.jpg',
      coverImage: '/images/blog/covers/elif-interview.jpg',
    },
    {
      id: 'dance-film-recommendations',
      title: '10 Essential Dance Films Every Dancer Should Watch',
      date: 'January 25, 2023',
      excerpt: 'From classic musicals to modern documentaries, these films showcase the power and beauty of dance across different eras and styles.',
      category: 'Recommendations',
      author: 'Selin Arslan',
      readTime: '6 min',
      content: 'Full content about dance films would go here...',
      authorImage: '/images/blog/authors/selin.jpg',
      coverImage: '/images/blog/covers/dance-films.jpg',
    },
    {
      id: 'beginners-guide',
      title: "A Beginner's Guide to Finding Your Dance Style",
      date: 'January 12, 2023',
      excerpt: 'Not sure which dance style suits you best? Our guide walks you through different dance forms to help you find your perfect match.',
      category: 'Guides',
      author: 'Burak Şahin',
      readTime: '9 min',
      content: 'Full guide content would go here...',
      authorImage: '/images/blog/authors/burak.jpg',
      coverImage: '/images/blog/covers/beginners-guide.jpg',
    },
  ];

  return blogPosts.find(post => post.id === slug);
};

// Metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | KUDANS',
      description: 'The requested blog post could not be found',
    };
  }
  
  return {
    title: `${post.title} | KUDANS Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Post Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <Link 
              href="/blog" 
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <span className="text-gray-600">|</span>
            <span className="text-white bg-black bg-opacity-70 px-3 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between border-b border-gray-700 pb-6">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-700 mr-3">
                {post.authorImage && (
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <p className="font-medium text-white">By {post.author}</p>
                <p className="text-sm text-gray-400">{post.date} · {post.readTime} read</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://kudans.com/blog/${post.id}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://kudans.com/blog/${post.id}`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-80 md:h-96 w-full mb-10 rounded-xl overflow-hidden shadow-2xl">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500">
              Featured Image Placeholder
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        
        {/* Post Content */}
        <div className="prose prose-lg prose-invert max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.content || 'Content coming soon...' }} />
        </div>
        
        {/* Author Box */}
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-10 border border-gray-700">
          <div className="flex items-center">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-700 mr-4">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">About {post.author}</h3>
              <p className="text-gray-300 mt-1">KUDANS member and blog contributor</p>
            </div>
          </div>
        </div>
        
        {/* Navigation and Share */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <Link 
            href="/blog" 
            className="bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:shadow-xl mb-4 md:mb-0"
          >
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Posts
            </span>
          </Link>
          
          <div className="flex space-x-3">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://kudans.com/blog/${post.id}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] hover:bg-opacity-90 p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://kudans.com/blog/${post.id}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#4267B2] hover:bg-opacity-90 p-3 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <ShareButton postId={post.id} postTitle={post.title} />
          </div>
        </div>
      </div>
    </div>
  );
} 