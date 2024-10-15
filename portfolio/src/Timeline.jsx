import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaHackerrank,
  FaAward,
} from "react-icons/fa";

const events = [
  {
    icon: FaGraduationCap,
    title: "B. Tech AI & Data Science",
    date: "11/2022 - Present",
    details: "St. Joseph's Institute of Technology, CGPA: 8.36",
  },
  {
    icon: FaBriefcase,
    title: "Web Developer - Unified Mentor",
    date: "06/2024 - 07/2024",
    details: "Developed responsive websites and optimized usability.",
  },
  {
    icon: FaHackerrank,
    title: "Smart India Hackathon",
    date: "09/2024",
    details: "Presented AI-based virtual try-on platform.",
  },
  {
    icon: FaAward,
    title: "Innothon '24",
    date: "09/2024",
    details: "Developed innovative solutions for online shopping.",
  },
];

const TimelineCard = ({ icon: Icon, title, date, details, index }) => {
  const controls = useAnimation(); // Animation controls
  const ref = useRef(null); // Element reference for inView tracking
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 }); // Trigger on both scroll directions

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref} // Attach ref to track visibility
      className="relative flex items-center p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-lg transition-all duration-300 w-full sm:max-w-[calc(50%-20px)] lg:max-w-[calc(33.33%-20px)]"
      initial={{ opacity: 0, y: 50 }} // Initial off-screen state
      animate={controls} // Control animation dynamically
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px 5px rgba(236, 72, 153, 0.8)", // Pink Glow Effect
      }}
    >
      <Icon className="text-4xl text-white bg-gradient-to-r from-pink-500 to-purple-400 mr-6" />
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-300">{date}</p>
        <p className="text-sm text-gray-400">{details}</p>
      </div>
    </motion.div>
  );
};

const Timeline = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16">
    <h2 className="text-6xl max-sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse">
      Experience Timeline
    </h2>
    <div className="relative max-w-6xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <TimelineCard key={index} {...event} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
