import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-90 text-white py-10" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Connected
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/johnwesley755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/john-wesley-6707ab258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://twitter.com/JohnWesley97513"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter size={30} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/john_wesley_755/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram size={30} />
          </motion.a>
        </motion.div>
        <motion.p
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()} John Wesley. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
