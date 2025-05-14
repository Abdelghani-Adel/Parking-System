"use client";

import AppSidebar from "@/components/layout/app-sidebar";
import TopBar from "@/components/layout/app-topbar";
import { SidebarProvider } from "@/components/ui/shadcn/ui/sidebar";
import { useAppSetup } from "@/hooks/useAppSetup";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  useAppSetup();

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-grow">
        <section className="">
          <TopBar />
        </section>

        <section className="p-4">{children}</section>
      </main>
    </SidebarProvider>
  );
}
