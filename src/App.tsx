import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Language, translations } from './utils/translations';

function App() {
  const [language, setLanguage] = useState<Language>('vi');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Parallax Background */}
      <div 
        className="fixed inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #6366f1 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="relative z-10">
        <Header language={language} setLanguage={setLanguage} t={t} />
        <Hero t={t} scrollY={scrollY} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </div>
    </div>
  );
}

export default App;