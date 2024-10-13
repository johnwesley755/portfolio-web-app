import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section id="projects" className="py-20 bg-gray-90 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, translateY: -50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer hover:border-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50"
              onClick={() => window.open(project.link, "_blank")}
              initial={{ opacity: 0, translateY: 30 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-40 group-hover:opacity-20"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 p-6">
                <h4 className="text-2xl font-bold text-white group-hover:text-violet-500 transition-colors duration-300">
                  {project.name}
                </h4>
                <p className="mt-2 text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
