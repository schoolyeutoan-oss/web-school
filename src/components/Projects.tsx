import React, { useState } from "react";
import { ExternalLink, Lock, Eye, Calculator, Gamepad2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ProjectsProps {
  t: any;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPasswordError(true);
    setTimeout(() => setShowPasswordError(false), 3000);
  };

  const projects = [
    {
      title: t.project1Title,
      description: t.project1Description,
      icon: <Gamepad2 size={24} />,
      color: "from-green-500 to-green-600",
      link: "https://schoolyeutoan-oss.github.io/web-game-classic/",
    },
    {
      title: t.project2Title,
      description: t.project2Description,
      icon: <Calculator size={24} />,
      color: "from-blue-500 to-blue-600",
      link: "https://schoolyeutoan-oss.github.io/web-tools-school/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal direction="fade" delay={0.2}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.projectsTitle}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={0.4 + index * 0.2}>
              <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-700 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700 rounded-xl"></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg`}
                  >
                    {project.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-all duration-500 group-hover:scale-105">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-all duration-500 group/link hover:scale-110"
                  >
                    <Eye
                      size={16}
                      className="group-hover/link:scale-125 group-hover/link:rotate-12 transition-all duration-500"
                    />
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      {t.viewProject}
                    </span>
                    <ExternalLink
                      size={14}
                      className="group-hover/link:translate-x-2 group-hover/link:-translate-y-1 transition-all duration-500"
                    />
                  </a>
                </div>

                {/* Floating elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>
          ))}

          {/* Private Project */}
          <ScrollReveal direction="up" delay={0.8}>
            <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-400/50 transition-all duration-700 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-red-500/20 relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-red-500/5 group-hover:to-pink-500/5 transition-all duration-700 rounded-xl"></div>

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg">
                  <Lock size={24} className="group-hover:animate-pulse" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-all duration-500 group-hover:scale-105">
                  {t.project3Title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-500">
                  {t.project3Description}
                </p>

                <div className="space-y-4">
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {t.enterPassword}
                  </p>

                  <form onSubmit={handlePasswordSubmit} className="space-y-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t.password}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:scale-105 transition-all duration-300 hover:bg-white/15"
                    />

                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-500 transform hover:scale-110 hover:shadow-lg active:scale-95"
                    >
                      {t.submit}
                    </button>
                  </form>

                  {showPasswordError && (
                    <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg animate-shake">
                      <p className="text-red-400 text-sm font-medium">
                        {t.wrongPassword}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Security-themed floating elements */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
              <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-red-300/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
