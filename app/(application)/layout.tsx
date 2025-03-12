"use client";

import DarkmodeToggler from "@/components/layout/DarkmodeToggler";
import LanguageToggle from "@/components/layout/LanguageToggle";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen overflow-hidden bg-gray-200 dark:bg-black">
      <div className="bg-white dark:bg-grey-darker shadow-md p-4 z-10 relative">
        <div className="flex items-center">
          <div className="">
            <Image src="/images/logo2.png" className="h-14 w-max dark:hidden" width={500} height={306} alt="logo" />
            {/* Dark Mode Logo */}
            <Image
              src="/images/logo-white.png"
              className="h-14 w-max hidden dark:block"
              width={500}
              height={306}
              alt="logo"
            />
          </div>
          <div className="ms-auto flex gap-4 items-center">
            <DarkmodeToggler />
            <LanguageToggle />
          </div>
        </div>
      </div>

      <div className="flex h-full">
        <div className="bg-white dark:bg-grey-darker  shrink-0 h-full p-4 relative z-20 shadow-md">
          <Sidebar />
        </div>

        {children}
      </div>
    </main>
  );
}
