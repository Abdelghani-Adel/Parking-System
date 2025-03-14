"use client";

import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { useLanguage } from "@/context/LanguageContext";
import { BsFillStopFill } from "react-icons/bs";

const ProfileActions = () => {
  const { t } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick} className="flex items-center gap-2  hover:text-primary px-3 py-2 rounded-full">
        <GoPerson className="text-3xl" />
        <span>Ahmed Mohamed</span>
        <FaChevronDown className="text-xs" />
      </button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PopoverClasses={{ paper: "w-72" }}>
        <MenuItem>
          <Link href="#" className="flex items-center gap-2">
            <IoSettingsOutline className="text-lg" />
            Account Settings
          </Link>
        </MenuItem>

        <hr className="my-3" />

        <MenuItem>
          <button className="flex items-center gap-2">
            <VscDebugStart className="text-lg" />
            {t("startShift")}
          </button>
        </MenuItem>

        <MenuItem>
          <button className="flex items-center gap-2">
            <BsFillStopFill className="text-lg" />
            {t("endShift")}
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileActions;
