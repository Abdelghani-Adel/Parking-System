import { configureStore } from "@reduxjs/toolkit";
import parkingSlice from "./slices/parkingSlice";
import dispenserSlice from "./slices/dispenserSlice";
import planSlice from "./slices/planSlice";
import policySlice from "./slices/policySlice";
import userSlice from "./slices/userSlice";
import planCardSlice from "./slices/planCardSlice";
import managerCardSlice from "./slices/managerCardSlice";
import currencySlice from "./slices/currencySlice";
import profileSlice from "./slices/profileSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    parkings: parkingSlice,
    users: userSlice,
    currencies: currencySlice,
    profile: profileSlice,
    dispensers: dispenserSlice,
    plans: planSlice,
    policies: policySlice,
    planCards: planCardSlice,
    managerCards: managerCardSlice,
  },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
