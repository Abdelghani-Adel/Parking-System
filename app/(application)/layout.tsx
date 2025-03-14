"use client";

import DarkmodeToggler from "@/components/layout/DarkmodeToggler";
import LanguageToggle from "@/components/layout/LanguageToggle";
import Notifications from "@/components/layout/Notifications";
import ProfileActions from "@/components/layout/ProfileActions";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import Image from "next/image";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen overflow-hidden bg-gray-200 dark:bg-black flex">
      <div className="w-72 shrink-0 bg-white dark:bg-grey-darker h-full p-4 z-10">
        <Sidebar />
      </div>

      <div className="w-full">
        <div className="bg-white dark:bg-grey-darker drop-shadow-lg p-4">
          <TopBar />
        </div>

        {children}
      </div>
    </main>
  );
}
