import React, { FC } from "react";
import DarkmodeToggler from "./DarkmodeToggler";
import Notifications from "./Notifications";
import ProfileActions from "./ProfileActions";
import LanguageToggle from "./LanguageToggle";
import TopBarSearch from "./TopBarSearch";
import { MdMenu } from "react-icons/md";

interface IProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const TopBar: FC<IProps> = (props) => {
  return (
    <div className="flex items-center w-full h-full">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <button onClick={props.toggleSidebar}>
          <MdMenu />
        </button>
        <span>Dashboard</span>
      </h2>

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
