import React from 'react';

const Lore: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <h2 className="font-meme text-6xl text-solana mb-4 drop-shadow-md">THE LORE</h2>
          <h3 className="text-3xl font-bold text-white leading-tight">The Cat of Disappointment is Here.</h3>
          
          <div className="prose prose-invert text-gray-300 text-lg leading-relaxed">
            <p>
              TikTok's <span className="text-white font-bold">Strange Cat</span>, the original Cringe React feline, has seen it all. 
              From terrible dances to awkward skits, she has watched 3 million followers 
              post content that would make a statue weep.
            </p>
            <p>
              She has sat silently, holding her sign, judging humanity. But silence is no longer enough.
              The cringe has gone too far. The financial markets are full of it. Rugs, scams, and bad vibes.
            </p>
            <p className="font-bold text-xl text-cringe">
              $CRNG is her answer.
            </p>
            <p>
              This is the official mascot of the only coin with zero cringe tolerance. 
              We are building a community that values quality, memes, and holding the line.
            </p>
          </div>

          <div className="pt-6">
            <div className="bg-cringe/10 border border-cringe p-6 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-cringe rotate-45 opacity-20"></div>
              <p className="text-cringe font-meme text-2xl text-center relative z-10">
                "#StopTheCringePumpTheCoin"
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
             {/* Styling to look like a phone screen/tiktok */}
             <div className="mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl flex flex-col justify-center relative overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-xl z-20"></div>

                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
                  <img 
                    src="images/3m-cat.png" 
                    alt="3 Million Followers Cat" 
                    className="w-full h-full object-cover" 
                  />
                  
                  {/* TikTok UI Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
                  
                  <div className="absolute bottom-10 left-4 text-white z-10 pr-12">
                    <p className="font-bold text-md shadow-sm">@TheCringeCat</p>
                    <p className="text-sm max-w-[200px] leading-snug mt-1 text-gray-100">Watching you sell early... 😒 The judgment is real. #CRNG #HODL</p>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-gray-800/50 px-2 py-1 rounded">♫ Original Sound - Cringe God</span>
                    </div>
                  </div>
                  
                  <div className="absolute right-2 bottom-20 flex flex-col gap-6 text-white items-center z-10">
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-700/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-cringe transition-colors cursor-pointer">❤️</div>
                        <span className="text-xs font-bold">3M</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-gray-700/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-solana transition-colors cursor-pointer">💬</div>
                        <span className="text-xs font-bold">45K</span>
                     </div>
                     <div className="flex flex-col items-center gap-1">
                         <div className="w-10 h-10 bg-gray-700/80 backdrop-blur rounded-full flex items-center justify-center animate-spin-slow">↪️</div>
                         <span className="text-xs font-bold">Share</span>
                     </div>
                  </div>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default Lore;