"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const LanguageToggle = () => {
  const { changeLang, currentLang } = useLanguage();
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
      <button onClick={handleClick} className="flex items-center gap-2 px-2 py-2 rounded-lg ">
        {currentLang === "en" ? <English /> : <Arabic />}
        <FaChevronDown className="text-xs" />
      </button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PopoverClasses={{ paper: "w-32" }}>
        <MenuItem
          onClick={() => {
            changeLang("en");
            handleClose();
          }}
        >
          <English />
        </MenuItem>

        <MenuItem
          onClick={() => {
            changeLang("ar");
            handleClose();
          }}
        >
          <Arabic />
        </MenuItem>
      </Menu>
    </div>
  );
};

const English = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/icons/english.png" alt="English" width={20} height={20} />
      English
    </div>
  );
};

const Arabic = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/icons/egypt.png" alt="Arabic" width={20} height={20} />
      العربية
    </div>
  );
};

export default LanguageToggle;
