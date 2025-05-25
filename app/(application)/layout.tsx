"use client";

import AppSidebar from "@/components/layout/app-sidebar";
import TopBar from "@/components/layout/app-topbar";
import InitialDataProvider from "@/components/providers/InitialDataProvider";
import { SidebarProvider } from "@/components/ui/shadcn/ui/sidebar";
import { LanguageProvider } from "@/context/LanguageContext";
import { store } from "@/redux/store";
import { getUserFromCookies } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";

export default function AppLayout({ children }: { children: ReactNode }) {
  const user = getUserFromCookies();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user]);

  if (!user) return null;

  return (
    <Provider store={store}>
      <InitialDataProvider>
        <LanguageProvider>
          <SidebarProvider>
            <AppSidebar />

            <main className="flex-grow">
              <section className="">
                <TopBar />
              </section>

              <section className="p-4">{children}</section>
            </main>
          </SidebarProvider>
        </LanguageProvider>
      </InitialDataProvider>
    </Provider>
  );
}
