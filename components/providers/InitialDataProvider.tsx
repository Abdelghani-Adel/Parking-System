"use client";

import { ReactNode } from "react";
import { fetchCurrencies } from "@/redux/slices/currencySlice";
import { fetchDispensers } from "@/redux/slices/dispenserSlice";
import { fetchManagerCards } from "@/redux/slices/managerCardSlice";
import { fetchParkings } from "@/redux/slices/parkingSlice";
import { fetchPlanCards } from "@/redux/slices/planCardSlice";
import { fetchPlans } from "@/redux/slices/planSlice";
import { fetchPolicies } from "@/redux/slices/policySlice";
import { fetchUsers } from "@/redux/slices/userSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

const InitialDataProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) {
      dispatch(fetchParkings());
      dispatch(fetchCurrencies());
      dispatch(fetchDispensers());
      dispatch(fetchPlans());
      dispatch(fetchPolicies());
      dispatch(fetchUsers());
      dispatch(fetchPlanCards());
      dispatch(fetchManagerCards());
    }
  }, []);

  return children;
};

export default InitialDataProvider;
