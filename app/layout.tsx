import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
  title: "Quantum Parking",
  description: "Parking System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="font-sans bg-gray-50 dark:bg-black">
        <LanguageProvider>
          {children}
          <div id="modalContainer" />
        </LanguageProvider>
      </body>
    </html>
  );
}
