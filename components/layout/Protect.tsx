"use client";

import { ReactNode } from "react";
import { getUserFromCookies } from "@/utils/auth";

interface ProtectedProps {
  children: ReactNode;
  roles: string[];
}

export default function Protect({ children, roles }: ProtectedProps) {
  const user = getUserFromCookies();

  if (!user) return null;

  // const decoded = decodeToken(token);

  // if (!decoded || !roles.includes(decoded.role)) {
  //   return null;
  // }

  return <>{children}</>;
}
