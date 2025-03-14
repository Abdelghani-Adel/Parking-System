import React from "react";
import DarkmodeToggler from "./DarkmodeToggler";
import Notifications from "./Notifications";
import ProfileActions from "./ProfileActions";
import LanguageToggle from "./LanguageToggle";
import TopBarSearch from "./TopBarSearch";

const TopBar = () => {
  return (
    <div className="flex items-center">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="ms-auto flex gap-4 items-center">
        <TopBarSearch />
        <DarkmodeToggler />
        <Notifications />
        <ProfileActions />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default TopBar;
