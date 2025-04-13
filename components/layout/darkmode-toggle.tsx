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
    <div className="bg-sidebar-accent w-max flex gap-3 rounded-full text-2xl px-2 py-1">
      <button onClick={toggleDarkMode} className="bg-white dark:bg-transparent  rounded-full p-1 cursor-pointer">
        <PiSunDim />
      </button>

      <button onClick={toggleDarkMode} className="dark:bg-gray-600 rounded-full p-1 cursor-pointer">
        <LuMoon />
      </button>
    </div>
  );
};

export default DarkmodeToggler;
