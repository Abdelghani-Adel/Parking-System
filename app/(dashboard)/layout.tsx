"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { GrPowerShutdown } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineAccessTime } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export default function WithLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="h-screen overflow-hidden bg-gray-200 p-5">
      <div className="flex gap-5 h-full">
        <section className="bg-white p-5 rounded-lg w-[20rem] shrink-0 h-full flex flex-col">
          <div className="mb-3">
            <Image
              src="/images/logo.png"
              className="h-32 w-max m-auto"
              width={500}
              height={306}
              alt="logo"
            />
          </div>
          <nav>
            <Link
              href="/"
              className={`${
                pathname == "/" ? "font-bold" : ""
              } flex items-center gap-2 p-3`}
            >
              <RxDashboard />
              Dashboard
            </Link>

            <Link
              href="/users"
              className={`${
                pathname == "/users" ? "font-bold" : ""
              } flex items-center gap-2 p-3`}
            >
              <HiOutlineUsers />
              Users
            </Link>
          </nav>

          <div className="space-y-3 mt-auto">
            <button className="w-full flex items-center justify-center gap-2 py-2 px-5 bg-green-500 hover:bg-green-700 transition duration-300 rounded-lg text-white font-semibold">
              <MdOutlineAccessTime /> Start Shift
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2 px-5 bg-gray-500 hover:bg-gray-700 transition duration-300 rounded-lg text-white font-semibold">
              <GrPowerShutdown /> End Shift
            </button>
          </div>
        </section>
        {children}
      </div>
    </main>
  );
}
