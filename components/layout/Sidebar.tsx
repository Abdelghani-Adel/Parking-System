"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaUser, FaTasks, FaFileAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";
import { FaRegAddressCard } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa6";
import { VscDebugStart } from "react-icons/vsc";
import { BsFillStopFill } from "react-icons/bs";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const Sidebar = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <Image src="/images/logo2.png" className="h-14 w-max dark:hidden" width={500} height={306} alt="logo" />

      <Image
        src="/images/logo-white.png"
        className="h-14 w-max hidden dark:block"
        width={500}
        height={306}
        alt="logo"
      />

      <NavItem title={t("dashboard")} icon={<FaHome />} path="/" />

      <NavItem title={t("cards")} icon={<FaRegAddressCard />} path="/cards" />

      <ShiftActions />
    </div>
  );
};

interface INavItemProps {
  title: string;
  icon: JSX.Element;
  path: string;
}
const NavItem: FC<INavItemProps> = ({ title, icon, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={clsx("flex items-center gap-2 w-full p-3 rounded-lg hover:bg-grey-lighter dark:hover:bg-grey", {
        "bg-grey-lighter text-primary dark:bg-grey": isActive,
        "text-grey dark:text-grey-light ": !isActive,
      })}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

const ShiftActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="text-grey dark:text-grey-light">
      <button
        className="flex items-center gap-2 w-full p-3 rounded-lg  hover:bg-grey-lighter dark:hover:bg-grey"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaHourglassStart />
        <span>{t("shiftActions")}</span>
        <FiChevronDown className={`ms-auto transition ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="ml-8 mt-2 space-y-1 flex flex-col items-start gap-3">
          <button className="flex items-center gap-2">
            <VscDebugStart />
            {t("startShift")}
          </button>

          <button className="flex items-center gap-2">
            <BsFillStopFill />
            {t("endShift")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
