import React from "react";
import { Code2, FileCode, Braces } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface SkillsProps {
  t: any;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  const skills = [
    {
      name: "C/C++",
      level: 90,
      color: "from-blue-500 to-blue-600",
      icon: <Code2 size={32} />,
      bgColor: "bg-blue-500/20",
    },
    {
      name: "Python",
      level: 80,
      color: "from-green-500 to-green-600",
      icon: <FileCode size={32} />,
      bgColor: "bg-green-500/20",
    },
    {
      name: "JavaScript",
      level: 85,
      color: "from-yellow-500 to-yellow-600",
      icon: <Braces size={32} />,
      bgColor: "bg-yellow-500/20",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal direction="fade" delay={0.2}>
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.skillsTitle}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={0.4}>
          <p className="text-center text-gray-300 mb-12 text-lg">
            {t.skillsDescription}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={skill.name}
              direction="up"
              delay={0.6 + index * 0.2}
            >
              <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 rounded-xl"></div>

                <div className="text-center relative z-10">
                  {/* Programming Language Logo */}
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${skill.bgColor} mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 group-hover:shadow-lg group-hover:shadow-current/50`}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-500">
                      {skill.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110">
                    {skill.name}
                  </h3>

                  <div className="relative w-32 h-32 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-full h-full transform -rotate-90 group-hover:rotate-180 transition-transform duration-1000"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 40 * (1 - skill.level / 100)
                        }`}
                        className="transition-all duration-1000 ease-out group-hover:stroke-[10]"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" className="text-blue-500" />
                          <stop offset="100%" className="text-purple-500" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white group-hover:text-blue-400 group-hover:scale-125 transition-all duration-500">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
