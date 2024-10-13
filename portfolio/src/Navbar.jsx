import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 py-4 bg-gray-90 text-white shadow-lg font-bold">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-secondary">John Wesley</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg">
          <a
            className="hover:text-secondary transition duration-200"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-secondary transition duration-200"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:text-secondary transition duration-200"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:text-secondary transition duration-200"
            href="#footer"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <motion.div
        className={`fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`fixed right-0 top-0 w-64 h-[60vh] bg-gray-90 text-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          initial={{ x: 300 }}
          animate={{ x: isOpen ? 0 : 300 }}
        >
          <div className="flex justify-between items-center p-2 border-b border-gray-700">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="text-2xl">
              <HiX />
            </button>
          </div>
          <div className="flex flex-col p-2">
            <a
              className="mb-2 text-lg text-gray-200 hover:text-secondary transition duration-200"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              className="mb-2 text-lg text-gray-200 hover:text-secondary transition duration-200"
              href="#skills"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              className="mb-2 text-lg text-gray-200 hover:text-secondary transition duration-200"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              className="text-lg text-gray-200 hover:text-secondary transition duration-200"
              href="#footer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
