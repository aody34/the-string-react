import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const ca = "CRNGxxxxxxxxxxxxxxxxxxxxxxxxSOLANA"; // Placeholder CA

  const handleCopy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-cringe rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-solana rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 relative inline-block group">
          <div className="absolute inset-0 bg-solana blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
          <img 
            src="images/cringe-sign.png" 
            alt="The Cringe React Cat" 
            className="relative w-64 h-auto md:w-80 md:h-auto rounded-xl border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] mx-auto object-cover hover:rotate-2 transition-all duration-500 z-10"
          />
          <div className="absolute -bottom-6 -right-6 bg-cringe text-white font-meme text-2xl px-6 py-2 transform rotate-12 shadow-xl border-2 border-white z-20 hover:scale-110 transition-transform cursor-default">
            JUDGING YOU
          </div>
        </div>

        <h1 className="font-meme text-6xl md:text-8xl lg:text-9xl mb-4 leading-tight tracking-wide drop-shadow-lg">
          <span className="text-white">STOP THE </span>
          <span className="text-cringe text-shadow-glow">CRINGE</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light italic max-w-2xl mx-auto">
          "Pump it before she judges you."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="https://pump.fun"
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-solana hover:bg-solana-dark text-black font-black text-xl uppercase tracking-widest rounded-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(20,241,149,0.4)] hover:shadow-[0_0_30px_rgba(20,241,149,0.6)]"
          >
            Buy $CRNG
          </a>
          <button 
            onClick={handleCopy}
            className="w-full sm:w-auto px-10 py-4 bg-cardbg hover:bg-gray-700 text-white font-bold text-lg rounded-lg border border-gray-600 flex items-center justify-center gap-2 transition-all hover:border-gray-400"
          >
            {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
            {copied ? "COPIED!" : "COPY CA"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-cardbg/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transform hover:-translate-y-1 transition-transform hover:border-cringe/50">
            <h3 className="text-cringe font-meme text-2xl mb-2">Zero Tolerance</h3>
            <p className="text-gray-400 text-sm">We don't tolerate weak hands or cringe behavior. This is a movement.</p>
          </div>
          <div className="bg-cardbg/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transform hover:-translate-y-1 transition-transform hover:border-solana/50">
            <h3 className="text-solana font-meme text-2xl mb-2">Moon Mission</h3>
            <p className="text-gray-400 text-sm">The only thing higher than our standards is where this chart is going.</p>
          </div>
          <div className="bg-cardbg/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transform hover:-translate-y-1 transition-transform hover:border-white/50">
            <h3 className="text-white font-meme text-2xl mb-2">3M+ Followers</h3>
            <p className="text-gray-400 text-sm">Backed by the internet's favorite face of disappointment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;