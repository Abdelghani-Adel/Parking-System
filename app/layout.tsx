"use client";
import { LanguageProvider } from "@/context/LanguageContext";
import { store } from "@/redux/store";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import "./globals.css";
import { useAppSetup } from "@/hooks/useAppSetup";
import SetupProvider from "@/components/layout/SetupProvider";

// export const metadata: Metadata = {
//   title: "Quantum Parking",
//   description: "Parking System",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="font-sans bg-gray-50 dark:bg-black">
        <Provider store={store}>
          <SetupProvider>
            <LanguageProvider>
              {children}
              <div id="modalContainer" />
            </LanguageProvider>
          </SetupProvider>
        </Provider>
      </body>
    </html>
  );
}
