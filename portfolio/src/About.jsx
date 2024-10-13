import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaUserGraduate } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-90 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-center mb-8 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
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
          animate={{ opacity: 1, translateY: 0 }}
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
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Apart from my technical skills, I am committed to lifelong learning
          and keeping up with industry trends. I believe that effective
          communication and collaboration are crucial in any project, and I
          enjoy working in team environments where I can contribute my skills
          while learning from others.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FaCode className="text-4xl text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-center">
              Proficient in HTML, CSS, JavaScript, and React. I love building
              responsive and interactive web applications that enhance user
              experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaPaintBrush className="text-4xl text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-center">
              Passionate about creating user-friendly designs and improving user
              experiences through effective UI/UX principles and design
              thinking.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaUserGraduate className="text-4xl text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Continuous Learner</h3>
            <p className="text-center">
              Committed to lifelong learning, I continuously seek to expand my
              skills and knowledge in web technologies and design, regularly
              engaging in online courses and community events.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="text-lg md:text-xl text-center mt-10 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
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
