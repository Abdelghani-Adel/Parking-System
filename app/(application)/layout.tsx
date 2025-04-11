import TopBar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";
import { SidebarProvider } from "@/components/ui/shadcn/ui/sidebar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <SideBar />

      <main className="flex-grow">
        <section className="">
          <TopBar />
        </section>

        <section className="p-4">{children}</section>
      </main>
    </SidebarProvider>
  );
}
