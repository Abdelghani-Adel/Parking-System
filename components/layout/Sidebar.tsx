"use client";

import { useLanguage } from "@/context/LanguageContext";
import { roles } from "@/utils/auth";
import { FC } from "react";
import { FaHome, FaRegAddressCard } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { VscDebugStart } from "react-icons/vsc";
import MenuLink from "./MenuLink";
import Protect from "./Protect";
import SidebarMenu from "./SidebarMenu";
import { BsCardChecklist, BsCreditCard2Back } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { TbHttpPost } from "react-icons/tb";
import { LuCircleParking } from "react-icons/lu";
import { GiBuyCard } from "react-icons/gi";
import { LuTicketCheck } from "react-icons/lu";
import { TfiLayoutAccordionList } from "react-icons/tfi";
import { BsPersonVcard } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";

const Sidebar: FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2 font-bold mt-5 transition-all duration-300 origin-left text-start whitespace-nowrap overflow-x-hidden">
      {/* Users */}
      <Protect roles={[roles.admin, roles.superAdmin]}>
        <MenuLink href="/users" title="Users">
          <FiUsers className="h-5 w-5 shrink-0" />
          <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
            Users
          </span>
        </MenuLink>
      </Protect>

      {/* Dashboard */}
      <MenuLink href="/" title="Dashboard">
        <FaHome className="h-5 w-5 shrink-0" />
        <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
          {t("dashboard")}
        </span>
      </MenuLink>

      {/* Parking Management */}
      <Protect roles={[roles.superAdmin]}>
        <SidebarMenu
          title={
            <div className="flex items-center gap-2 text-start whitespace-nowrap">
              <LuCircleParking className="h-5 w-5 shrink-0" />
              <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
                Parking Management
              </span>
            </div>
          }
        >
          <MenuLink href="/parking-management/setup" title="Parking Setup">
            <LuCircleParking className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Setup
            </span>
          </MenuLink>

          <MenuLink href="/parking-management/cards-categories" title="Card Categories">
            <GiBuyCard className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Cards Categories Setup
            </span>
          </MenuLink>

          <MenuLink href="/parking-management/ticket-categories" title="Ticket Categories">
            <LuTicketCheck className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Ticket Categories Setup
            </span>
          </MenuLink>

          <MenuLink href="/parking-management/dispensers" title="Dispensers">
            <TfiLayoutAccordionList className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Parking Dispensers Setup
            </span>
          </MenuLink>
        </SidebarMenu>
      </Protect>

      {/* Cards */}
      <SidebarMenu
        title={
          <div className="flex items-center gap-2 text-start">
            <BsPersonVcard className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-44 group-[.open]:max-w-44">
              Cards Management
            </span>
          </div>
        }
      >
        <Protect roles={[roles.superAdmin]}>
          <MenuLink href="/cards-management/cards-config" title="Cards Configurations">
            <BsPersonVcard className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Cofnigruations
            </span>
          </MenuLink>
        </Protect>

        <Protect roles={[roles.superAdmin, roles.admin]}>
          <MenuLink href="/cards-management/manager" title="Manager Cards">
            <BsCreditCard2Back className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Manager Cards
            </span>
          </MenuLink>

          <MenuLink href="/cards-management/subscriber" title="Subscriper Cards">
            <BsCardChecklist className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Subscriber Cards
            </span>
          </MenuLink>

          <MenuLink href="/cards-management/stored-value" title="Stored-Value Cards">
            <BsCreditCard2Back className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
              Stored Value Cards
            </span>
          </MenuLink>
        </Protect>
      </SidebarMenu>

      {/* Parking Operations */}
      <SidebarMenu
        title={
          <div className="flex items-center gap-2 text-start">
            <BsPersonWorkspace className="h-5 w-5 shrink-0" />
            <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-44 group-[.open]:max-w-44">
              Parking Operations
            </span>
          </div>
        }
      >
        <MenuLink href="/parking-operations/pos" title="POS">
          <TbHttpPost className="h-5 w-5 shrink-0" />
          <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
            POS
          </span>
        </MenuLink>

        <MenuLink href="/parking-operations/recharge-cards" title="Recharge Cards">
          <GiCardExchange className="h-5 w-5 shrink-0" />
          <span className="duration-300 overflow-hidden w-0 min-w-0 group-[.open]:w-52 group-[.open]:max-w-52">
            Recharge Cards
          </span>
        </MenuLink>
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;
