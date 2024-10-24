import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPython,
  SiC,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  // Refs to track the skill sections
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const programmingLanguagesRef = useRef(null);

  // Frontend skills
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  // Backend skills
  const backendSkills = [
    { name: "Node.js", icon: <FaDatabase /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  // Programming Languages
  const programmingLanguages = [
    { name: "Python", icon: <SiPython /> },
    { name: "C", icon: <SiC /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
  ];

  // Function to render skill cards
  const renderSkillCard = (skill, index) => (
    <motion.div
      key={index}
      className="p-1 rounded-xl border hover:border-none hover:from-green-400 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 20 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center p-6 bg-black rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/50">
        <div className="text-5xl text-white glow-icon mb-4">{skill.icon}</div>
        <h4 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 font-mono">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 animate-pulse"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* Frontend Skills Section */}
        <div className="mb-12" ref={frontendRef}>
          <h3 className="text-3xl font-bold text-center mb-6">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {frontendSkills.map(renderSkillCard)}
          </div>
        </div>

        {/* Backend Skills Section */}
        <div className="mb-12" ref={backendRef}>
          <h3 className="text-3xl font-bold text-center mb-6">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {backendSkills.map(renderSkillCard)}
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="mt-12" ref={programmingLanguagesRef}>
          <h3 className="text-3xl font-bold text-center mb-6">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {programmingLanguages.map(renderSkillCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
