"use client";

import React, { useEffect, useState } from "react";
import { calculateTimeDifference } from "../utils/calculateTimeDifference";

const TotalCounts = () => {
  const [time, setTime] = useState(null);
  const [totalCounts, setTotalCounts] = useState({
    totalSeconds: 0,
    totalMinutes: 0,
    totalHours: 0,
    totalDays: 0,
    totalMonths: 0,
    totalYears: 0,
  });

  useEffect(() => {
    const startDate = new Date("2021-10-02T00:00:00");
    const updateTimer = () => {
      const timeDiff = calculateTimeDifference(startDate);
      setTime(timeDiff);

      // Calculate total counts
      const now = new Date();
      const totalMilliseconds = now - startDate;

      const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
      const totalYears = now.getFullYear() - startDate.getFullYear();
      const totalMonths =
        totalYears * 12 + (now.getMonth() - startDate.getMonth());

      setTotalCounts({
        totalSeconds: Math.floor(totalMilliseconds / 1000),
        totalMinutes: Math.floor(totalMilliseconds / (1000 * 60)),
        totalHours: Math.floor(totalMilliseconds / (1000 * 60 * 60)),
        totalDays: totalDays,
        totalMonths: totalMonths,
        totalYears: totalYears,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="text-center">
      <div className="text-lg mt-4 flex gap-4">
        <p>Years: {totalCounts.totalYears}</p>
        <p>Months: {totalCounts.totalMonths}</p>
        <p>Days: {totalCounts.totalDays}</p>
        <p>Hours: {totalCounts.totalHours}</p>
        <p>Minutes: {totalCounts.totalMinutes}</p>
        <p>Seconds: {totalCounts.totalSeconds}</p>
      </div>
    </div>
  );
};

export default TotalCounts;
