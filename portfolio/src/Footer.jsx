import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-10 text-white">
      <div className="absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title with Gradient Text */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Connected
        </motion.h2>

        {/* Social Media Links with Glow Effect */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            {
              href: "https://github.com/johnwesley755",
              icon: <FaGithub size={30} />,
            },
            {
              href: "https://www.linkedin.com/in/john-wesley-6707ab258/",
              icon: <FaLinkedin size={30} />,
            },
            {
              href: "https://twitter.com/JohnWesley97513",
              icon: <FaTwitter size={30} />,
            },
            {
              href: "https://www.instagram.com/john_wesley_755/",
              icon: <FaInstagram size={30} />,
            },
          ].map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative block">
                {icon}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 bg-gradient-to-r from-purple-400 to-blue-400"></span>
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Text with Subtle Animation */}
        <motion.p
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            John Wesley
          </span>
          . All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
