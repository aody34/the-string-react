import React, { useState } from 'react';
import { analyzeCringeLevel } from '../services/geminiService';
import { CringeAnalysisResult } from '../types';
import { AlertTriangle, Loader2 } from 'lucide-react';

const CringeDetector: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CringeAnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    
    try {
      const data = await analyzeCringeLevel(input);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score < 30) return 'text-green-500';
    if (score < 70) return 'text-yellow-500';
    return 'text-cringe';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="font-meme text-5xl text-white mb-2">AI CRINGE DETECTOR</h2>
        <p className="text-gray-400">Ask the cat. Is it cringe? (Powered by Gemini)</p>
      </div>

      <div className="w-full bg-cardbg rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700 relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-cringe/10 rounded-full blur-3xl pointer-events-none"></div>

        <form onSubmit={handleAnalyze} className="space-y-4 relative z-10">
          <div>
            <label htmlFor="scenario" className="block text-sm font-medium text-gray-300 mb-2">
              Describe a scenario, tweet, or text message:
            </label>
            <textarea
              id="scenario"
              rows={4}
              className="w-full bg-darkbg border border-gray-600 rounded-lg p-4 text-white focus:ring-2 focus:ring-solana focus:border-transparent transition-all resize-none placeholder-gray-600"
              placeholder="e.g., Calling your boss 'fam' in a meeting..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-full py-4 bg-gradient-to-r from-cringe to-red-600 hover:from-red-500 hover:to-cringe rounded-lg font-bold text-white text-xl uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center gap-2 shadow-lg"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'JUDGE ME'}
          </button>
        </form>

        {result && (
          <div className="mt-8 border-t border-gray-700 pt-8 animate-fade-in relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className={`text-7xl font-black ${getScoreColor(result.score)} drop-shadow-md`}>
                  {result.score}%
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-widest mt-1 font-bold">Cringe Score</div>
              </div>

              <div className="bg-darkbg w-full rounded-xl p-6 border border-gray-700 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                    <div 
                        className={`h-full ${result.score > 50 ? 'bg-cringe' : 'bg-solana'}`} 
                        style={{ width: `${result.score}%` }}
                    />
                </div>
                
                <h3 className="font-meme text-4xl text-white mb-6 uppercase tracking-wide">{result.verdict}</h3>
                
                <div className="flex flex-col md:flex-row items-center gap-6 bg-cardbg/50 p-4 rounded-lg border border-gray-800">
                    <img 
                        src="images/cringe-sign.png" 
                        alt="Judge Cat" 
                        className="w-24 h-24 rounded-full border-4 border-gray-600 flex-shrink-0 object-cover shadow-lg"
                    />
                    <div className="text-left">
                        <div className="text-xs text-cringe uppercase font-bold mb-1">The Cringe Cat Says:</div>
                        <p className="text-gray-200 text-lg italic leading-relaxed">"{result.comment}"</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!result && !loading && (
             <div className="mt-8 text-center text-gray-500 flex flex-col items-center p-4 border border-dashed border-gray-700 rounded-lg">
                 <AlertTriangle className="mb-2 opacity-30 w-8 h-8"/>
                 <p className="text-sm">The cat is waiting... do not disappoint her (more than usual).</p>
             </div>
        )}
      </div>
    </div>
  );
};

export default CringeDetector;