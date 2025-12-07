import React from 'react';
import { Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkbg border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="font-meme text-4xl text-white mb-2">$CRNG</h2>
            <p className="text-gray-400 text-sm max-w-xs">
              The official mascot of the only coin with zero cringe tolerance.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-solana transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-solana transition-colors">
              <span className="sr-only">Telegram</span>
              <Send size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-solana transition-colors font-bold flex items-center">
              PUMPFUN
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Cringe React. All rights reserved. This is a meme coin for entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;