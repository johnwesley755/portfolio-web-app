import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gray-90 px-6 py-4 shadow-md fixed top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-4xl max-sm:text-3xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-pink-600 bg-clip-text animate-glow">
          John Wesley
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-extrabold text-xl">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 hover:scale-105 hover:text-secondary transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-3xl text-white hover:bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text transition-all duration-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`fixed right-0 top-0 w-64 h-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          initial={{ x: 300 }}
          animate={{ x: isOpen ? 0 : 300 }}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">
              Menu
            </h2>
            <button
              onClick={toggleMenu}
              className="text-2xl text-white hover:bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text transition-all duration-300"
            >
              <HiX />
            </button>
          </div>

          <div className="p-4 space-y-4">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-lg font-bold text-gray-200 hover:text-secondary hover:scale-105 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
