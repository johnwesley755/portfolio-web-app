import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify"; // Moved ToastContainer here
import { AnimatedBackground } from "animated-backgrounds"; // Import AnimatedBackground
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  const [animationName, setAnimationName] = useState("starryNight");

  // Cycle through backgrounds on page reload
  useEffect(() => {
    const animations = [
      "starryNight",
      "particleNetwork",
    ];
    const storedIndex = localStorage.getItem("backgroundAnimationIndex");
    const newIndex = storedIndex
      ? (parseInt(storedIndex) + 1) % animations.length
      : 0;
    setAnimationName(animations[newIndex]);
    localStorage.setItem("backgroundAnimationIndex", newIndex.toString());
  }, []);

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Animated Background with full-page coverage */}
      <AnimatedBackground
        animationName={animationName}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // Ensure the background is behind all content
        }}
      />

      {/* Your app content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Timeline />
      <Contact />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
