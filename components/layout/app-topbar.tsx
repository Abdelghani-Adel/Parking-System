"use client";
import { useSidebar } from "@/components/ui/shadcn/ui/sidebar";
import { Menu } from "lucide-react";
import { FC } from "react";
import DarkmodeToggler from "./darkmode-toggle";
import LanguageToggle from "./language-toggle";
import Notifications from "./Notifications";
import ProfileActions from "./profile-actions";
import TopBarSearch from "./TopBarSearch";

const TopBar: FC = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center bg-white dark:bg-sidebar p-2 shadow-md">
      <button onClick={toggleSidebar}>
        <Menu />
      </button>

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
