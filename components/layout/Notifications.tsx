"use client";

import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notifications = () => {
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
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-grey-light dark:bg-grey hover:text-primary px-2 py-2 rounded-full"
      >
        <IoMdNotificationsOutline className="text-3xl" />
      </button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PopoverClasses={{ paper: "w-96 py-2 px-3" }}>
        <h5 className="font-semibold">Notifications</h5>

        <MenuItem>
          <p className="text-md m-auto">No notifications yet !</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Notifications;
