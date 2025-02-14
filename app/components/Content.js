"use client";
import React from "react";
import Hearts from "./Hearts";
import Timer from "./Timer";
import TotalCounts from "./TotalCounts";
import { useEffect, useState } from "react";
import { useRef } from "react";
const Content = () => {
  const [visible, setVisible] = useState(false);

  const [opacity, setOpacity] = useState(100);

  const handleClick = () => {
    if (opacity > 0) {
      setOpacity(Math.max(opacity - 40, 0));
    }
  };

  const handleYesClick = () => {
    setVisible(true);
    setOpacity(100);
  };
  return (
    <div
      style={{
        opacity: opacity / 100,
      }}
      className="h-screen w-screen bg-white flex flex-col items-center justify-center overflow-hidden relative"
    >
      {!visible && (
        <>
          <h1 className="text-2xl font-extrabold">Will you be my Valentine?</h1>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleYesClick}
              className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 text-lg"
            >
              Yes
            </button>
            <button
              onClick={handleClick}
              className="px-6 py-3 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-400 text-lg"
            >
              No
            </button>
          </div>
        </>
      )}
      {visible && (
        <>
          <Hearts />
          <Timer />
          <TotalCounts />
        </>
      )}
    </div>
  );
};

export default Content;
