import React from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpg"; // Your profile image
import resume from "./assets/Resume.pdf"; // Path to your resume

const HeroSection = () => {
  // Rotating Text Messages with Relevant Roles
  const rotatingTexts = ["Web Developer", "UI/UX Designer"];

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-gray-90">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black animate-gradient-motion -z-10"></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full blur-2xl"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center p-8 max-w-4xl"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 20 }}
        transition={{ duration: 0.7 }}
      >
        {/* Profile Image with Glow */}
        <div className="relative mx-auto mb-6 w-56 h-56 md:w-64 md:h-64">
          <img
            src={profileImg}
            alt="John Wesley"
            className="w-full h-full rounded-full border-4 border-secondary shadow-2xl hover:shadow-[0_0_30px_10px] hover:shadow-secondary/70 transition duration-500"
          />
        </div>

        {/* Heading with Animated Gradient Text */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 animate-text-glow">
          Hi, I'm <span className="font-extrabold text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 bg-clip-text animate-glow">John Wesley</span>
        </h1>

        {/* Rotating Text Animation */}
        <motion.div
          className="flex gap-4 justify-center items-center text-xl md:text-2xl font-semibold text-secondary mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {rotatingTexts.map((text, index) => (
            <motion.span
              key={index}
              className="font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-indigo-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 2,
                repeat: Infinity,
                repeatDelay: 6,
              }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons with Glow Effect */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <a
            href="#projects"
            className="w-full md:w-auto px-6 py-3 bg-secondary text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-[0_0_20px_8px] hover:shadow-secondary/80 hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href={resume}
            download
            className="w-full md:w-auto px-6 py-3 border-2 border-secondary text-lg font-semibold rounded-lg hover:bg-secondary hover:text-white hover:shadow-[0_0_20px_8px] hover:shadow-secondary/80 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator with Bounce Animation */}
      <motion.div
        className="absolute bottom-10 w-full text-center"
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="text-secondary/80 animate-bounce">Scroll Down ⬇️</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
