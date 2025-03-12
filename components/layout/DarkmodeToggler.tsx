"use client";
import React from "react";
import { PiSunDim } from "react-icons/pi";
import { LuMoon } from "react-icons/lu";

import { useState, useEffect } from "react";

const DarkmodeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-grey-light dark:bg-black w-max flex gap-3 rounded-full text-2xl p-2">
      <button
        onClick={toggleDarkMode}
        className="bg-white dark:bg-transparent dark:text-grey-light rounded-full p-1 cursor-pointer"
      >
        <PiSunDim />
      </button>

      <button onClick={toggleDarkMode} className="dark:bg-grey dark:text-white rounded-full p-1 cursor-pointer">
        <LuMoon />
      </button>
    </div>
  );
};

export default DarkmodeToggler;
