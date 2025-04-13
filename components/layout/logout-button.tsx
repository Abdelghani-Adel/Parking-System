"use client";
import { deleteCookie, TOKEN_KEY } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function LogoutButton({ className, children }: { className: string; children: ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie(TOKEN_KEY);
    router.replace("/login");
  };

  return (
    <button onClick={handleLogout} className={className}>
      {children}
    </button>
  );
}
