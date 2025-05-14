import { useAppSelector } from "@/redux/store";
import {
  CARD_TYPES,
  CURRENCIES,
  DISPENSER_TYPES,
  FEES_CALCULATOR,
  PARKING_TYPES,
  PLAN_TYPES,
  ROLES,
  VEHICLE_TYPES,
  WEEK_DAYS,
} from "@/utils/constants";

export function useParkingsForSelect() {
  const parkings = useAppSelector((state) => state.parkings.data);

  const parkingOptions = parkings.map((parking) => ({
    id: parking.id,
    name: parking.name,
  }));

  return parkingOptions;
}

export function usePoliciesForSelect() {
  const policies = useAppSelector((state) => state.policies.data);

  const policiesOptions = policies.map((policy) => ({
    id: policy.id,
    name: policy.name,
  }));

  return policiesOptions;
}

export function useFeeCalculatorForSelect() {
  return FEES_CALCULATOR;
}

export function useParkingTypesForSelect() {
  return PARKING_TYPES;
}

export function usePlanTypesForSelect() {
  return PLAN_TYPES;
}

export function useVehicleTypesForSelect() {
  return VEHICLE_TYPES;
}

export function useDispenserTypesForSelect() {
  return DISPENSER_TYPES;
}

export function useWeekDaysForSelect() {
  return WEEK_DAYS;
}

export function useCardTypesForSelect() {
  return CARD_TYPES;
}

export function useRolesForSelect() {
  return ROLES;
}

export function useCurrenciesForSelect() {
  return CURRENCIES;
}
