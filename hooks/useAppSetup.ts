import { fetchParkings } from "@/redux/slices/parkingSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { isDev } from "../utils/constants";
import { fetchDispensers } from "@/redux/slices/dispenserSlice";
import { fetchPlans } from "@/redux/slices/planSlice";
import { fetchPolicies } from "@/redux/slices/policySlice";
import { fetchUsers } from "@/redux/slices/userSlice";
import { fetchPlanCards } from "@/redux/slices/planCardSlice";
import { fetchManagerCards } from "@/redux/slices/managerCardSlice";
import { fetchCurrencies } from "@/redux/slices/currencySlice";

export function useAppSetup() {
  const dispatch = useAppDispatch();
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) {
      registerWorkers().then(() => initializeAppData(dispatch));
    }
  }, []);
}

async function initializeAppData(dispatch: any) {
  dispatch(fetchParkings());
  dispatch(fetchCurrencies());

  dispatch(fetchDispensers());
  dispatch(fetchPlans());
  dispatch(fetchPolicies());
  dispatch(fetchUsers());
  dispatch(fetchPlanCards());
  dispatch(fetchManagerCards());
}

async function registerWorkers() {
  return import("../mocks/browser").then(({ worker }) => {
    return worker.start();
  });
}
