import { useAppSetup } from "@/hooks/useAppSetup";
import React, { ReactNode } from "react";

const SetupProvider = ({ children }: { children: ReactNode }) => {
  useAppSetup();
  return <>{children}</>;
};

export default SetupProvider;
