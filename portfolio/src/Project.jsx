import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import sidegigImg from "./assets/side-gig.png";
import vutoriaImg from "./assets/vutoria.png";
import soulsborneImg from "./assets/soulsborne.png";
import musicImg from "./assets/music-player.png";
import gramImg from "./assets/gram-web.png";

const projects = [
  {
    name: "SideGig",
    image: sidegigImg,
    description:
      "A platform designed to connect freelancers and clients for various gigs, featuring an easy-to-use interface and real-time messaging.",
    link: "https://side-gig-website.web.app/",
  },
  {
    name: "Vutoria",
    image: vutoriaImg,
    description:
      "A virtual try-on platform that enables users to visualize products in real-time, enhancing the online shopping experience.",
    link: "https://vutoria-60389.web.app/",
  },
  {
    name: "Soulsborne",
    image: soulsborneImg,
    description:
      "Soulsborne is a platform linking students, instructors, and companies to align skills with market needs.",
    link: "https://soulsborne-bba5f.web.app/",
  },
  {
    name: "Namma Isai Music Player",
    image: musicImg,
    description:
      "A music player web app featuring a clean design, customizable playlists, and a smooth user experience.",
    link: "https://github.com/johnwesley755/namma-isai-music",
  },
  {
    name: "Gram Panchayat",
    image: gramImg,
    description:
      "A web platform for local governance, allowing residents to access services, submit complaints, and view ward details.",
    link: "https://github.com/johnwesley755/gram-panchayat",
  },
];

const Project = () => {
  const controls = useAnimation();

  // Track whether the element is in view using the useInView hook
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  // Trigger animation based on whether the section is in view
  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, translateY: 0 });
    } else {
      controls.start({ opacity: 0, translateY: 50 });
    }
  }, [isInView, controls]);

  return (
    <section id="projects" className="py-20 text-white relative">
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 animate-pulse"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref} // Reference for useInView tracking
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative border hover:border-none group rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-90 hover:shadow-[0_0_15px_5px] hover:shadow-purple-500"
              onClick={() => window.open(project.link, "_blank")}
              initial={{ opacity: 0, translateY: 50 }}
              animate={controls} // Bind animation controls to scrolling behavior
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <h4 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 group-hover:animate-pulse">
                  {project.name}
                </h4>
                <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex justify-end mt-4">
                  <FaExternalLinkAlt className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
