import React from "react";
import { Globe } from "lucide-react";
import { Language } from "../utils/translations";
import { useParallax } from "../hooks/useScrollAnimation";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, t }) => {
  const scrollY = useParallax();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 transition-all duration-500"
      style={{
        backgroundColor:
          scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "blur(10px)",
      }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer">
          WebSchool
        </div>

        <div className="hidden md:flex space-x-8">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-blue-400 transition-all duration-500 font-medium hover:scale-110 hover:-translate-y-1 relative group"
            >
              <span className="relative z-10">{t[item]}</span>
              <div className="absolute inset-0 bg-blue-400/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-3 group"
          >
            <Globe
              size={16}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
            <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
              {language.toUpperCase()}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
