import { useAppSelector } from "@/redux/store";
import {
  CARD_TYPES,
  DISPENSER_TYPES,
  FEES_CALCULATOR,
  PARKING_TYPES,
  PLAN_TYPES,
  ROLES,
  VEHICLE_TYPES,
} from "@/utils/constants";

export function useParkingDictionary() {
  const parkings = useAppSelector((state) => state.parkings.data);
  const parkingMap: Record<string, string> = parkings.reduce(
    (acc: Record<string, string>, parking) => {
      acc[parking.id] = parking.name;
      return acc;
    },
    {} as Record<string, string>
  );

  return parkingMap;
}

export function useCurrencyDictionary() {
  const currencies = useAppSelector((state) => state.currencies.data);
  const currencyMap: Record<string, string> = currencies.reduce(
    (acc: Record<string, string>, currency) => {
      acc[currency.id] = currency.code;
      return acc;
    },
    {} as Record<string, string>
  );

  return currencyMap;
}

export function usePolicyDictionary() {
  const policies = useAppSelector((state) => state.policies.data);
  const policyMap: Record<string, string> = policies.reduce(
    (acc: Record<string, string>, policy) => {
      acc[policy.id] = policy.name;
      return acc;
    },
    {} as Record<string, string>
  );

  return policyMap;
}

export function useVehicleTypesDictionary() {
  return VEHICLE_TYPES.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}

export function useFeeCalculatorDictionary() {
  return FEES_CALCULATOR.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}

export function useDispenserTypeDictionary() {
  return DISPENSER_TYPES.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}

export function useParkingTypesDictionary() {
  return PARKING_TYPES.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}

export function useRoleDictionary() {
  return ROLES.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}

export function usePlanTypesDictionary() {
  return PLAN_TYPES.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}

export function useCardTypesDictionary() {
  return CARD_TYPES.reduce((map, obj) => {
    map[obj.id] = obj.name;
    return map;
  }, {} as Record<string, string>);
}
