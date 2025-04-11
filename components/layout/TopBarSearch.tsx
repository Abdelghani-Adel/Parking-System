import React from "react";
import { CiSearch } from "react-icons/ci";

const TopBarSearch = () => {
  return (
    <div className="relative h-full">
      <input
        type="text"
        placeholder="Search for anything"
        className="w-72 h-full text-sm py-3 px-2 pr-8  rounded-full focus:outline-none font-normal pl-8 bg-sidebar-accent"
      />

      <CiSearch className="absolute top-[50%] -translate-y-[50%] left-2 text-xl" />
    </div>
  );
};

export default TopBarSearch;
