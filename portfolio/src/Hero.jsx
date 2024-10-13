import React from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/profile.jpg"; // Your profile image
import resume from "./assets/Resume.pdf"; // Path to your resume

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-90 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?technology,abstract')`,
        }}
      ></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center p-8 max-w-4xl"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={profileImg}
          alt="John Wesley"
          className="w-56 h-56 md:w-64 md:h-64 rounded-full mx-auto border-4 border-secondary mb-6 shadow-xl"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-secondary">John Wesley</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Aspiring Web Developer & UI/UX Designer with a passion for creating
          innovative digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <a
            href="#projects"
            className="w-full md:w-auto px-6 py-3 bg-secondary text-lg font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 text-center"
          >
            View My Projects
          </a>
          <a
            href={resume}
            download
            className="w-full md:w-auto px-6 py-3 border-2 border-secondary text-lg font-semibold rounded-lg hover:bg-secondary hover:text-white transition duration-300 text-center"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
