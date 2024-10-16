import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => setIsVisible(window.scrollY === 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-6 py-4 z-50 backdrop-blur-lg transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <h1
            className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-indigo-400 
            bg-clip-text text-transparent z-30"
          >
            John Wesley
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10 text-lg font-bold z-20">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">
                  {link}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-indigo-400 transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-white z-40"
            onClick={toggleMenu}
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
      <div className="relative">
        {/* Overlay */}
        <motion.div
          className={`fixed inset-0 bg-black bg-opacity-60 ${
            isOpen ? "block" : "hidden"
          } z-40`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu}
        />

        {/* Sidebar */}
        <motion.div
          className={`fixed right-0 top-0 w-72 h-full bg-gray-90 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
          initial={{ x: 300 }}
          animate={{ x: isOpen ? 0 : 300 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-700">
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Menu
            </h2>
            <button onClick={toggleMenu} className="text-2xl text-white">
              <HiX />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-lg font-extrabold text-white"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="bg-gradient-to-r from-pink-400 to-indigo-400 text-transparent bg-clip-text">
                  {link}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
