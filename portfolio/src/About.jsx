import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaUserGraduate } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("about");
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-20 text-white relative">
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 animate-pulse"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-gray-200"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm John Wesley, an aspiring web developer and UI/UX designer with a
          passion for creating innovative digital experiences. I strive to build
          solutions that not only look great but also provide excellent user
          experiences.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 leading-relaxed text-gray-200"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in front-end development with a strong foundation in
          HTML, CSS, JavaScript, and React. I focus on clean code, responsive
          design, and crafting user-centered experiences.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 leading-relaxed text-gray-200"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Beyond development, I enjoy UI/UX design, blending aesthetics with
          functionality to create user-friendly designs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Development Card */}
          <motion.div
            className="flex flex-col items-center p-6 rounded-lg border hover:border-none bg-gray-90 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:border-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FaCode className="text-4xl text-white mb-4 animate-glow" />
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-glow">
              Web Development
            </h3>
            <p className="text-center text-gray-200">
              Proficient in HTML, CSS, JavaScript, and React. I love building
              responsive, interactive applications that enhance user
              experiences.
            </p>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div
            className="flex flex-col items-center p-6 rounded-lg border hover:border-none bg-gray-90 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:border-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaPaintBrush className="text-4xl text-white mb-4 animate-glow" />
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-glow">
              UI/UX Design
            </h3>
            <p className="text-center text-gray-200">
              I design intuitive, user-friendly interfaces that marry form and
              function to create memorable user experiences.
            </p>
          </motion.div>

          {/* Continuous Learner Card */}
          <motion.div
            className="flex flex-col items-center p-6 rounded-lg border hover:border-none bg-gray-90 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:border-gradient-to-r from-green-500 to-teal-500 hover:shadow-lg hover:shadow-green-500/50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaUserGraduate className="text-4xl text-white mb-4 animate-glow" />
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 animate-glow">
              Continuous Learner
            </h3>
            <p className="text-center text-gray-200">
              Dedicated to learning and growing, I stay current with the latest
              industry trends through courses, hackathons, and community
              projects.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-lg md:text-xl text-center mt-10 leading-relaxed text-gray-200"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <p>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-glow">
              "I believe in continuous growth and pushing the boundaries of
              creativity and technology."
            </span>
          </p>
          <p>
            Whether it's coding, design, or learning, I'm always excited to
            explore new horizons and challenge myself to improve.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
