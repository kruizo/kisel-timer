"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hearts = () => {
  const [positions, setPositions] = useState([]);
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  const generatePositions = (currentWindowSize) => {
    const generatedPositions = Array.from({ length: 10 }).map(() => ({
      x:
        Math.random() > 0.5
          ? Math.random() * (currentWindowSize.innerWidth * 0.2)
          : currentWindowSize.innerWidth -
            Math.random() * (currentWindowSize.innerWidth * 0.2),
      y: Math.random() * currentWindowSize.innerHeight,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 5,
    }));
    setPositions(generatedPositions);
  };

  useEffect(() => {
    generatePositions(windowSize); // Initial positions
    const handleResize = () => {
      const newWindowSize = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      };
      setWindowSize(newWindowSize);
      generatePositions(newWindowSize); // Generate positions on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute text-red-400 w-screen h-screen"
          style={{ fontSize: `${pos.size}px` }}
          initial={{ x: pos.x, y: pos.y }}
          animate={{ y: -50 }}
          transition={{ duration: pos.duration, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
};

export default Hearts;
