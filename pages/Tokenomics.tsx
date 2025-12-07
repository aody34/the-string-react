import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Tokenomics: React.FC = () => {
  const data = [
    { name: 'Liquidity Pool', value: 90, color: '#14F195' },
    { name: 'Marketing & Cringe Ops', value: 5, color: '#FF3B30' },
    { name: 'Team (Locked)', value: 5, color: '#3B82F6' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 p-2 rounded shadow-lg">
          <p className="text-white font-bold">{`${payload[0].name} : ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-meme text-5xl md:text-7xl text-white mb-4">TOKENOMICS</h2>
        <p className="text-xl text-gray-400">Simple. Fair. No Funny Business (Except the Memes).</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Chart */}
        <div className="relative">
             <div className="bg-cardbg rounded-2xl p-6 h-[400px] border border-gray-800 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: '#fff' }}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
        </div>

        {/* Stats & Army Cat */}
        <div className="space-y-6 flex flex-col justify-center relative">
          
          {/* Floating Army Cat */}
          <div className="hidden md:block absolute -top-32 -right-10 w-48 z-0 opacity-80 animate-bounce-slow">
             <img src="images/army-cat.png" alt="Army Cat Guarding The Tokens" className="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform rotate-12" />
          </div>

          <div className="bg-cardbg border-l-4 border-solana p-6 rounded-r-xl relative z-10 backdrop-blur-sm">
            <h3 className="text-gray-400 uppercase text-sm font-bold tracking-wider mb-1">Total Supply</h3>
            <p className="text-3xl font-bold text-white font-mono">1,000,000,000 $CRNG</p>
          </div>
          
          <div className="bg-cardbg border-l-4 border-cringe p-6 rounded-r-xl relative z-10 backdrop-blur-sm">
            <h3 className="text-gray-400 uppercase text-sm font-bold tracking-wider mb-1">Tax</h3>
            <p className="text-3xl font-bold text-white font-mono">0% Buy / 0% Sell</p>
          </div>

          <div className="bg-cardbg border-l-4 border-blue-500 p-6 rounded-r-xl relative z-10 backdrop-blur-sm">
            <h3 className="text-gray-400 uppercase text-sm font-bold tracking-wider mb-1">Authority</h3>
            <p className="text-3xl font-bold text-white font-mono">Mint Revoked. Freeze Disabled.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-meme text-4xl text-white mb-8">ROADMAP TO NOT BEING CRINGE</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
                <div className="text-solana font-bold text-xl mb-2">PHASE 1</div>
                <ul className="text-gray-300 text-sm space-y-2">
                    <li>Launch on PumpFun</li>
                    <li>Website Release</li>
                    <li>Meme Warfare</li>
                </ul>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
                <div className="text-solana font-bold text-xl mb-2">PHASE 2</div>
                <ul className="text-gray-300 text-sm space-y-2">
                    <li>Raydium Migration</li>
                    <li>Cringe Detector App V2</li>
                    <li>10,000 Holders</li>
                </ul>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
                <div className="text-solana font-bold text-xl mb-2">PHASE 3</div>
                <ul className="text-gray-300 text-sm space-y-2">
                    <li>Tier 1 CEX Listings</li>
                    <li>Global Billboard Campaign</li>
                    <li>We Buy a Real Cat a House</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;