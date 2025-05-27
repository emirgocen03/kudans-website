"use client";
import './butterfly.css';
import { useState } from 'react';

export default function DBD() {
  const [kissed, setKissed] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#b89b74] via-[#e9dbc5] to-[#c2a477] p-4">
      <div className="max-w-2xl w-full mx-auto rounded-2xl shadow-2xl border border-[#a88c5d] bg-[#f7ecd7] relative flex flex-col items-center" style={{ boxShadow: '0 8px 32px 0 rgba(90, 60, 20, 0.25)' }}>
        <div className="text-center mb-2 mt-6">
          <div className="butterfly-container">
            <div className="butterfly">
              <div className="left-wing"></div>
              <div className="right-wing"></div>
              <div className="body"></div>
            </div>
          </div>
        </div>
        <div className="px-8 pb-12 w-full">
          <div className="space-y-6 text-[#5a4321] leading-relaxed text-lg font-serif text-center" style={{textShadow: '0 1px 0 #f5e6c8'}}>
            <p>
              Do you remember the origami I slipped into your door, the one I tucked quietly into your backpack, or the one I handed you with a shy smile? This is another one, an origami unlike any other. Not made of paper this time, but of words, folded carefully and hidden here in the vastness of the internet. It's something anyone could stumble upon… but it's only meant for you...
            </p>
            <p>
              This place, this little corner of the digital world, is like a note left on a café table for a lover who knows where to look. Like a gate with no lock, only a name. Anyone can find it, but no one will… except you.
            </p>
            <p>
              I wanted to leave a trace of our love here too, somewhere timeless, somewhere hidden in plain sight. Maybe it will last forever. Maybe one day, someone will be curious enough to search for dbd. Maybe a friend. Maybe fate. But it will always be ours first.
            </p>
            <p>
              You are the most graceful dancer I've ever known, the one who moves not just through music, but through life, through love. 
            </p> 
            <p>
              <span className="border-b-2 border-[#a88c5d] text-[#7c5a2b] pb-0.5">You understand me in ways I didn't know I could be understood.</span>
            </p>
            <p>
              Thank you for dancing with me.<br/>
              Thank you for seeing me, sharing yourself with me.<br/>
              Thank you for teaching me what love truly is.<br/>
              Thank you for being you.
            </p>
            <p>
              Forever folded in you,<br/>
              like an origami no one else can open.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            {!kissed ? (
              <button
                className="transition-all duration-200 bg-[#e9dbc5] border-2 border-[#a88c5d] rounded-xl px-8 py-4 text-[#5a4321] font-serif text-xl shadow-md hover:bg-[#f7ecd7] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a88c5d]"
                onClick={() => setKissed(true)}
                aria-label="Send a kiss"
              >
                touch here for a kiss, my love
              </button>
            ) : (
              <div className="kiss-anim text-5xl animate-bounce mt-2">💋</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 