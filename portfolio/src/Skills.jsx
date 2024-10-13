import React from "react";
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
  // Frontend skills
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-4xl text-secondary" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-secondary" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-secondary" />,
    },
    { name: "React", icon: <FaReact className="text-4xl text-secondary" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-secondary" />,
    },
    { name: "Figma", icon: <SiFigma className="text-4xl text-secondary" /> },
  ];

  // Backend skills
  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaDatabase className="text-4xl text-secondary" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl text-secondary" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-secondary" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-4xl text-secondary" /> },
    { name: "Git", icon: <FaGitAlt className="text-4xl text-secondary" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-4xl text-secondary" />,
    },
  ];

  // Programming Languages
  const programmingLanguages = [
    { name: "Python", icon: <SiPython className="text-4xl text-secondary" /> },
    { name: "C", icon: <SiC className="text-4xl text-secondary" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-4xl text-secondary" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-90 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <h4 className="mt-4 text-lg font-bold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-6">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <h4 className="mt-4 text-lg font-bold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {programmingLanguages.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <h4 className="mt-4 text-lg font-bold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Skills;
