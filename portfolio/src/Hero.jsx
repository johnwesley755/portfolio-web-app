import React from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpg"
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-90 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center p-6"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={profileImg} // Update with your image path
          alt="John Wesley"
          className="w-32 h-32 rounded-full mx-auto border-4 border-secondary mb-4"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-secondary">John Wesley</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Aspiring Web Developer & UI/UX Designer with a passion for creating
          innovative digital experiences.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition duration-300"
        >
          View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
