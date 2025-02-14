"use client"; // Mark as client-side because it deals with dynamic data

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { calculateTimeDifference } from "../utils/calculateTimeDifference";

const Timer = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const startDate = new Date("2021-10-02T00:00:00");
    const updateTimer = () => {
      setTime(calculateTimeDifference(startDate));
    };

    updateTimer(); // Set the initial time
    const interval = setInterval(updateTimer, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (!time) return null; // Wait until the time is calculated

  return (
    <motion.div
      className="text-center max-w-screen-lg px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-sm md:text-3xl italic font-light">
        In case you forgot kizel, we are
      </h1>
      <h2 className="text-lg md:text-4xl my-10 font-mono">
        {time.years} years, {time.months} months, {time.days} days,
        <br />
        {time.hours} hours, {time.minutes} minutes, {time.seconds} seconds.
      </h2>
    </motion.div>
  );
};

export default Timer;
