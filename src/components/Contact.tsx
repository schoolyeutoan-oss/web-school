import React from "react";
import { Facebook, Instagram, Music } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://www.facebook.com/hai.ut.186",
      color: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    },
    {
      name: "TikTok",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
        </svg>
      ),
      url: "https://tiktok.com/@luonggzkl78",
      color: "from-gray-800 to-black hover:from-black hover:to-gray-900",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://instagram.com/schoolday19",
      color:
        "from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollReveal direction="fade" delay={0.2}>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.contactTitle}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={0.4}>
          <p className="text-xl text-gray-300 mb-12">{t.contactDescription}</p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${social.color} transition-all duration-700 transform hover:scale-125 hover:-translate-y-4 hover:rotate-12 shadow-lg hover:shadow-2xl relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500"></div>

                <div className="text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10">
                  {social.icon}
                </div>

                {/* Floating particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={0.8}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4 hover:text-white transition-colors duration-300">
              {t.followMe}
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto hover:w-32 transition-all duration-500"></div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <ScrollReveal direction="fade" delay={1.0}>
        <footer className="mt-16 pt-8 border-t border-white/10 text-center group">
          <p className="text-gray-400 group-hover:text-white transition-colors duration-500 hover:scale-105 transform">
            © 2025 Nguyen Truong. Made with{" "}
            <span className="text-red-400 animate-pulse">❤️</span> and lots of{" "}
            <span className="text-yellow-400">☕</span>
          </p>
        </footer>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
