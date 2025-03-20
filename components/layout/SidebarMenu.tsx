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
        className="flex items-center gap-2 w-full p-3 rounded-lg hover:bg-grey"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="relative">{title}</span>
        <FiChevronDown className={`ms-auto transition hidden group-[.open]:block ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Collapsible Section */}
      {isOpen && <div className="ms-6 space-y-1 hidden group-[.open]:block">{children}</div>}
    </div>
  );
};

export default SidebarMenu;
