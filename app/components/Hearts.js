"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hearts = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generatedPositions = Array.from({ length: 20 }).map(() => ({
      x:
        Math.random() > 0.5
          ? Math.random() * (window.innerWidth * 0.2)
          : window.innerWidth - Math.random() * (window.innerWidth * 0.2),
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 5,
    }));
    setPositions(generatedPositions);
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
