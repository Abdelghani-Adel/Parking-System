"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/shadcn/ui/collapsible";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/shadcn/ui/sidebar";
import { Car, ChevronDown, Contrast, DollarSign, IdCard, LayoutDashboard, SquareParking, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/ui/tooltip";

const AppSidebar = () => {
  return (
    <ShadcnSidebar collapsible="icon" variant="sidebar" className="rtl:right-0 rtl:left-auto ltr:left-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-max hover:bg-transparent">
                <Link href="/" className="flex items-center">
                  <Image src="/icons/white-logo-icon.png" alt="MyCompany Logo" width={40} height={40} />
                  <Image src="/images/white-text-logo.png" alt="MyCompany Logo" width={140} height={50} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            <SideLink href="/" icon={<LayoutDashboard />} label="Dashboard" tooltip="dashboard" />
            <SideLink href="/users" icon={<Users />} label="Users" tooltip="users" />
          </SidebarMenu>
        </SidebarGroup>

        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Parking
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SideLink href="/parking/setup" icon={<SquareParking />} label="Setup" tooltip="Parkings Setup" />

                  <SideLink href="/parking/categories" icon={<Car />} label="Categories" tooltip="Categories" />

                  <SideLink href="/parking/dispensers" icon={<Contrast />} label="Dispensers" tooltip="Dispensers" />
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Cards
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SideLink href="/cards/setup" icon={<IdCard />} label="Setup" tooltip="Cards Setup" />
                  <SideLink href="/cards/list" icon={<IdCard />} label="List" tooltip="Cards List" />
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible defaultOpen>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Operations
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SideLink href="/operations/pos" icon={<DollarSign />} label="POS" tooltip="POS" />
                  <SideLink
                    href="/operations/recharge"
                    icon={<IdCard />}
                    label="Recharge Cards"
                    tooltip="Recharge Cards"
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

interface SideLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  tooltip: string;
}

const SideLink: FC<SideLinkProps> = (props) => {
  const pathName = usePathname();
  const isActive = pathName === props.href;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link href={props.href}>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>{props.icon}</TooltipTrigger>
            <TooltipContent side="right">{props.tooltip}</TooltipContent>
          </Tooltip>

          <span>{props.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default AppSidebar;
