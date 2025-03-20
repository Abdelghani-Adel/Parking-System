"use client";

import { ReactNode } from "react";
import { decodeToken, getAuthToken } from "@/utils/auth";

interface ProtectedProps {
  children: ReactNode;
  roles: string[];
}

export default function Protect({ children, roles }: ProtectedProps) {
  const token = getAuthToken();

  if (!token) return null;

  const decoded = decodeToken(token);

  if (!decoded || !roles.includes(decoded.role)) {
    return null;
  }

  return <>{children}</>;
}
