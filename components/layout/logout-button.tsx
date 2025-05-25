"use client";
import { logoutUser } from "@/utils/auth";
import { ReactNode } from "react";

export function LogoutButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const handleLogout = async () => {
    await logoutUser();
    // Optionally, redirect the user to the login page or home page
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className={className}>
      {children}
    </button>
  );
}
