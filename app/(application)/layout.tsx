import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/SideBar";
import { SidebarProvider } from "@/components/ui/shadcn/ui/sidebar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="flex-grow">
        <section className="p-2 shadow-md">
          <TopBar />
        </section>

        <section className="p-4">{children}</section>
      </main>
    </SidebarProvider>
  );
}
