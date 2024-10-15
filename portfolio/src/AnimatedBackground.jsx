import React from "react";

// Sample styles for each animation
const animations = {
  starryNight: {
    backgroundImage: "url('path-to-your-starry-night-animation.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  // Add more animations as needed
};

const AnimatedBackground = ({ animationName, style }) => {
  const animationStyle = animations[animationName] || animations.starryNight;

  return (
    <div
      style={{
        ...animationStyle,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        ...style, // Add any additional styles passed via props
      }}
    ></div>
  );
};

export default AnimatedBackground;
