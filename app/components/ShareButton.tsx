'use client';

import { useState } from 'react';

interface ShareButtonProps {
  postId: string;
  postTitle?: string;
}

export default function ShareButton({ postId, postTitle }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://kudans.com/blog/${postId}`);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <button 
      onClick={handleCopyLink}
      className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors relative"
      aria-label="Copy link"
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-green-400" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-white" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
          <path fillRule="evenodd" d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
        </svg>
      )}
      
      {copied && (
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
          Copied!
        </span>
      )}
    </button>
  );
} 