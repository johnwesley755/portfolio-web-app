import React from "react";
import { ToastContainer } from "react-toastify"; // Moved ToastContainer here
import Particle from "./Particle";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {


  return (
    <div className="bg-gray-90">
      <Particle />
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
