"use client";

import { MOCK_WORKER_ENABLED } from "@/utils/constants";
import { ReactNode, useEffect } from "react";

const MockDataProvider = ({ children }: { children: ReactNode }) => {
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser && MOCK_WORKER_ENABLED) {
      registerWorker();
    }
  }, []);

  return children;
};

async function registerWorker() {
  const { worker } = await import("../../mocks/browser");
  await worker.start();
}

export default MockDataProvider;
