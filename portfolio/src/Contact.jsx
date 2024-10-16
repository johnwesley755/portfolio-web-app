import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import emailjs from "emailjs-com"; // EmailJS integration
import { toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toastify styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const controls = useAnimation(); // Controls for form animation
  const ref = useRef(null); // Reference for tracking inView
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 }); // Trigger animation when 30% of the form is visible

  // Handle visibility-based animations
  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        "service_8gun33x", // Replace with your Service ID
        "template_srp7yyk", // Replace with your Template ID
        formData,
        "POr8PxVjcg0j2Aoo5" // Replace with your User ID
      );
      console.log("Message sent:", response.status, response.text);
      toast.success("Message sent successfully! 🎉", {
        icon: "✅",
        style: { backgroundColor: "#1a1a1a", color: "white" },
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.", {
        icon: "❌",
        style: { backgroundColor: "#1a1a1a", color: "white" },
      });
    }
  };
  const inputAnimation = {
    whileHover: {
      scale: 1.05,
      boxShadow:
        "0 0 15px 3px rgba(236, 72, 153, 0.8), 0 0 15px 3px rgba(37, 99, 235, 0.8)",
      backgroundColor: "rgba(31, 41, 55, 0.9)",
    },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <section className="py-20" id="contact">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
        Contact Me
      </h2>

      <motion.form
        ref={ref} // Attach the ref to the form for inView tracking
        className="max-w-3xl max-sm:bg-transparent border-none mx-auto p-10 bg-gray-90 rounded-lg shadow-lg border border-gray-700"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }} // Initial off-screen position
        animate={controls} // Controls animation dynamically
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            Name
          </label>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border bg-gray-90 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            {...inputAnimation}
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            Email
          </label>
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border bg-gray-90 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            {...inputAnimation}
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            Message
          </label>
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border bg-gray-90 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="5"
            required
            {...inputAnimation}
          ></motion.textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full p-4 text-lg font-bold text-white bg-transparent border rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 0 20px 5px rgba(236, 72, 153, 0.8), 0 0 20px 5px rgba(37, 99, 235, 0.8)",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
