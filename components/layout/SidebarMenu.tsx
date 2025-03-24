"use client";

import React, { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface SidebarMenuProps {
  title: ReactNode;
  children: ReactNode;
}

const SidebarMenu = ({ title, children }: SidebarMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-grey-light dark:text-grey-light">
      {/* Menu Toggle Button */}
      <button
        className="items-center gap-2 w-full p-3 rounded-lg hover:bg-grey hidden group-[.open]:flex"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        <FiChevronDown className={`ms-auto transition hidden group-[.open]:block ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Collapsible Section */}
      <div
        className={`duration-300 ms-0 group-[.open]:ms-6 group-[.open]:${isOpen ? "block" : "hidden"} space-y-2 mt-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarMenu;
