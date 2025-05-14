"use client";
import axiosInstance from "@/lib/axiosInstance";
import { deleteCookie, TOKEN_KEY } from "@/utils/auth";
import { ReactNode } from "react";

export function LogoutButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/api/v1/auth/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    }

    // Remove the token from cookies
    deleteCookie(TOKEN_KEY);
    // Optionally, redirect the user to the login page or home page
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className={className}>
      {children}
    </button>
  );
}
