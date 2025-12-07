import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Tokenomics from './pages/Tokenomics';
import CringeDetector from './pages/CringeDetector';
import Footer from './components/Footer';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0F172A] text-white font-sans selection:bg-cringe selection:text-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/detector" element={<CringeDetector />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;