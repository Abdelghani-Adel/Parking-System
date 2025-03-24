"use client";

import { LogoutButton } from "@/components/layout/LogoutButton";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { LuLogOut } from "react-icons/lu";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <main className={`h-screen w-screen overflow-hidden flex group ${isSidebarOpen ? "open" : ""}`}>
      <section className="p-1 pb-8 flex flex-col bg-primary-dark dark:bg-grey-darker overflow-hidden transition-all duration-500 ease-in-out w-16 min-w-16 group-[.open]:w-80 group-[.open]:min-w-80">
        <div className="h-16 transition-all duration-500 ease-in-out origin-left scale-x-0 group-[.open]:scale-x-100">
          <Image src="/images/logo-white.png" className="h-14 w-max" width={500} height={306} alt="logo" />
        </div>

        <nav className="flex-grow overflow-y-auto overflow-x-hiddn overflow-overlay my-4 pe-1">
          <Sidebar />
        </nav>

        <LogoutButton className="mt-auto flex items-center h-10 rounded-lg  p-2 text-white justify-center bg-red-500 relative">
          <LuLogOut className="size-5 shrink-0" />
          <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-14 group-[.open]:max-w-44">
            Logout
          </span>
        </LogoutButton>
      </section>

      <section className="flex-grow flex flex-col">
        <header className="h-16 px-4 shrink-0 drop-shadow-lg bg-white dark:bg-grey-darker">
          <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        </header>

        <div className="overflow-auto">{children}</div>
      </section>
    </main>
  );
}
