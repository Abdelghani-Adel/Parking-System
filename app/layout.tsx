import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import MockDataProvider from "@/components/providers/MockDataProvider";

export const metadata: Metadata = {
  title: "Quantum Parking",
  description: "Parking System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="font-sans bg-gray-50 dark:bg-black">
        <MockDataProvider> {children} </MockDataProvider>
      </body>
    </html>
  );
}
