"use client";

import AppSidebar from "@/components/layout/app-sidebar";
import TopBar from "@/components/layout/app-topbar";
import { SidebarProvider } from "@/components/ui/shadcn/ui/sidebar";
import { useAppSetup } from "@/hooks/useAppSetup";
import { getUserFromCookies } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const user = getUserFromCookies();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user]);

  if (!user) return null;

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
