"use client";
import { logoutUser } from "@/redux/slices/profileSlice";
import { useAppDispatch } from "@/redux/store";
import { ReactNode } from "react";

export function LogoutButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await dispatch(logoutUser());
    // Optionally, redirect the user to the login page or home page
    window.location.href = "/login";
  };

  return (
    <button onClick={handleLogout} className={className}>
      {children}
    </button>
  );
}
