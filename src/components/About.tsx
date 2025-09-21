import React from 'react';
import { User, BookOpen, Trophy, Film, Music } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  t: any;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal direction="fade" delay={0.2}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.aboutTitle}
          </h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollReveal direction="left" delay={0.4}>
            <div className="space-y-6">
              <div className="group hover:bg-white/5 p-4 rounded-xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <User className="text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={24} />
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">{t.aboutTitle}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {t.aboutContent}
                </p>
              </div>
            
              <div className="space-y-4">
                <ScrollReveal direction="left" delay={0.6}>
                  <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-500 hover:scale-105 hover:translate-x-2">
                    <BookOpen className="text-green-400 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={20} />
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t.favoriteSubjects}</p>
                  </div>
                </ScrollReveal>
              
                <ScrollReveal direction="left" delay={0.7}>
                  <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-500 hover:scale-105 hover:translate-x-2">
                    <Trophy className="text-yellow-400 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={20} />
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t.favoriteSports}</p>
                  </div>
                </ScrollReveal>
              
                <ScrollReveal direction="left" delay={0.8}>
                  <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-500 hover:scale-105 hover:translate-x-2">
                    <Film className="text-pink-400 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={20} />
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t.favoriteMovie}</p>
                  </div>
                </ScrollReveal>
              
                <ScrollReveal direction="left" delay={0.9}>
                  <div className="flex items-start space-x-3 group hover:bg-white/5 p-3 rounded-lg transition-all duration-500 hover:scale-105 hover:translate-x-2">
                    <Music className="text-purple-400 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" size={20} />
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t.hobbies}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.5}>
            <div className="relative group">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-blue-400/50 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                  <User size={120} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
              
              {/* Floating particles around avatar */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-20 right-16 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;