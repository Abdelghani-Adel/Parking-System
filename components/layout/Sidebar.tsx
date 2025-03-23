"use client";

import { useLanguage } from "@/context/LanguageContext";
import { roles } from "@/utils/auth";
import { FC } from "react";
import { BsCardChecklist, BsCreditCard2Back, BsFillStopFill } from "react-icons/bs";
import { FaHome, FaHourglassStart, FaRegAddressCard } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GiCardExchange } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { GrUserManager, GrUserWorker } from "react-icons/gr";
import { TbHttpPost, TbUsersPlus } from "react-icons/tb";
import { VscDebugStart } from "react-icons/vsc";
import Protect from "./Protect";
import MenuLink from "./MenuLink";
import SidebarMenu from "./SidebarMenu";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar: FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2 font-bold mt-5">
      {/* Users */}
      <Protect roles={[roles.admin, roles.superAdmin]}>
        <MenuLink href="/users">
          <FiUsers className="h-5 w-5 shrink-0" />
          <span className="absolute left-10 opacity-0 scale-x-0 group-[.open]:opacity-100 group-[.open]:scale-x-100 transition-all duration-300 origin-left whitespace-nowrap">
            Users
          </span>
        </MenuLink>
      </Protect>

      {/* Dashboard */}
      <MenuLink href="/">
        <FaHome className="h-5 w-5 shrink-0" />
        <span className="absolute left-10 opacity-0 scale-x-0 group-[.open]:opacity-100 group-[.open]:scale-x-100 transition-all duration-300 origin-left whitespace-nowrap">
          {t("dashboard")}
        </span>
      </MenuLink>

      {/* Parking Management */}
      <Protect roles={[roles.superAdmin]}>
        <SidebarMenu
          title={
            <div className="flex items-center gap-2">
              <GoGear className="h-5 w-5 shrink-0" />
              <span className="absolute left-7 opacity-0 scale-x-0 group-[.open]:opacity-100 group-[.open]:scale-x-100 transition-all duration-300 origin-left whitespace-nowrap">
                Parking Management
              </span>
            </div>
          }
        >
          <MenuLink href="/config/setup">
            <GoGear />
            Setup
          </MenuLink>

          <MenuLink href="#">
            <VscDebugStart />
            Parking Categories
          </MenuLink>

          <MenuLink href="#">
            <VscDebugStart />
            Parking Dispensers
          </MenuLink>
        </SidebarMenu>
      </Protect>

      {/* Cards */}
      <SidebarMenu
        title={
          <div className="flex items-center gap-2">
            <FaRegAddressCard className="h-5 w-5 shrink-0" />
            <span className="absolute left-7 opacity-0 scale-x-0 group-[.open]:opacity-100 group-[.open]:scale-x-100 transition-all duration-300 origin-left whitespace-nowrap">
              Cards
            </span>
          </div>
        }
      >
        <Protect roles={[roles.superAdmin]}>
          <MenuLink href="/config/cards">
            <GoGear />
            Configurations
          </MenuLink>
        </Protect>

        <Protect roles={[roles.superAdmin, roles.admin]}>
          <MenuLink href="/cards/manager">
            <GrUserManager />
            Manager Cards
          </MenuLink>

          <MenuLink href="/cards/subscriber">
            <BsCardChecklist />
            Subscriber Cards
          </MenuLink>

          <MenuLink href="/cards/stored-value">
            <BsCreditCard2Back />
            Stored Value Cards
          </MenuLink>
        </Protect>

        <MenuLink href="/cards/recharge">
          <GiCardExchange />
          Recharge Cards
        </MenuLink>
      </SidebarMenu>

      {/* Parking Operations */}
      <SidebarMenu
        title={
          <div className="flex items-center gap-2">
            <GrUserWorker className="h-5 w-5 shrink-0" />
            <span className="absolute left-7 opacity-0 scale-x-0 group-[.open]:opacity-100 group-[.open]:scale-x-100 transition-all duration-300 origin-left whitespace-nowrap">
              Parking Operations
            </span>
          </div>
        }
      >
        <MenuLink href="/operations/pos">
          <TbHttpPost />
          POS
        </MenuLink>

        <MenuLink href="/cards/recharge">
          <GiCardExchange />
          Recharge Cards
        </MenuLink>
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;
