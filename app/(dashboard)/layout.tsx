"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { GrPowerShutdown } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

export default function WithLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="h-screen overflow-hidden bg-gray-50">
      <div className="flex h-full">
        <section className="bg-accent-dark p-5 w-[20rem] shrink-0 h-full flex flex-col">
          <div className="mb-10">
            <Image
              src="/images/logo-white.png"
              className="h-14 w-max"
              width={500}
              height={306}
              alt="logo"
            />
          </div>
          <nav className="space-y-2">
            <Link
              href="/"
              className={`${
                pathname == "/" ? "bg-white" : ""
              } flex items-center gap-2 p-3 rounded-lg font-semibold hover:bg-accent-light hover:text-white duration-300 transition`}
            >
              <IoMdHome />
              Dashboard
            </Link>

            <Link
              href="/users"
              className={`${
                pathname == "/users"
                  ? "bg-accent-lighter text-white rounded-lg"
                  : ""
              } flex items-center gap-2 p-3 text-white rounded-lg font-semibold hover:bg-accent-light hover:text-white duration-300 transition`}
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
