import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'The Lore', path: '/lore' },
    { label: 'Tokenomics', path: '/tokenomics' },
    { label: 'Cringe Detector AI', path: '/detector' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darkbg/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <span className="font-meme text-3xl tracking-wider text-white">
                $CRNG
              </span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors ${
                      isActive
                        ? 'text-solana bg-gray-900'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a 
                href="https://pump.fun" 
                target="_blank" 
                rel="noreferrer"
                className="bg-cringe hover:bg-cringe-dark text-white px-4 py-2 rounded-full font-bold uppercase text-sm transition-all transform hover:scale-105"
              >
                Buy on PumpFun
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cardbg border-b border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-bold uppercase ${
                    isActive ? 'text-solana bg-gray-900' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a 
               href="https://pump.fun" 
               target="_blank" 
               rel="noreferrer"
               className="block w-full text-center bg-cringe text-white px-3 py-3 rounded-md font-bold uppercase mt-4"
            >
              Buy on PumpFun
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;