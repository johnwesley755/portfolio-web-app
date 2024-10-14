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
    <section id="about" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, translateY: -50 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm John Wesley, an aspiring web developer and UI/UX designer with a
          passion for creating innovative digital experiences. My journey began
          with a fascination for technology and design, and I strive to build
          solutions that not only look great but also provide excellent user
          experiences.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I hold a strong foundation in front-end development, and I am
          proficient in technologies such as HTML, CSS, JavaScript, and React.
          My approach to web development focuses on clean code, responsive
          design, and user-centered features. In addition to development, I
          enjoy the creative side of UI/UX design, where I can blend aesthetics
          with functionality.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Apart from my technical skills, I am committed to lifelong learning
          and keeping up with industry trends. I believe that effective
          communication and collaboration are crucial in any project, and I
          enjoy working in team environments where I can contribute my skills
          while learning from others.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Development Card */}
          <motion.div
            className="flex flex-col items-center p-6 rounded-lg border-4 border-transparent transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:border-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FaCode className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-center text-gray-200">
              Proficient in HTML, CSS, JavaScript, and React. I love building
              responsive and interactive web applications that enhance user
              experiences.
            </p>
          </motion.div>

          {/* UI/UX Design Card */}
          <motion.div
            className="flex flex-col items-center p-6 rounded-lg border-4 border-transparent transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:border-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaPaintBrush className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-center text-gray-200">
              Passionate about creating user-friendly designs and improving user
              experiences through effective UI/UX principles and design
              thinking.
            </p>
          </motion.div>

          {/* Continuous Learner Card */}
          <motion.div
            className="flex flex-col items-center p-6  rounded-lg border-4 border-transparent transition-all duration-300 transform hover:scale-105 hover:cursor-pointer hover:border-gradient-to-r from-green-500 to-teal-500 hover:shadow-lg hover:shadow-green-500/50"
            initial={{ opacity: 0, translateY: 20 }}
            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaUserGraduate className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">Continuous Learner</h3>
            <p className="text-center text-gray-200">
              Committed to lifelong learning, I continuously seek to expand my
              skills and knowledge in web technologies and design, regularly
              engaging in online courses and community events.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-lg md:text-xl text-center mt-10 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          When I'm not coding, I enjoy exploring new technologies, working on
          personal projects, and participating in hackathons. I believe that
          every challenge is an opportunity for growth, and I'm excited about
          the journey ahead!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
