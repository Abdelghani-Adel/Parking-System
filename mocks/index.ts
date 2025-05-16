import { parkingHandlers } from "./parkingHandlers";
import { dispenserHandlers } from "./dispenserHandlers";
import { planHandlers } from "./planHandlers";
import { policyHandlers } from "./policyHandlers";
import { userHandlers } from "./userHandlers";
import { planCardHandlers } from "./planCardHandlers";
import { managerCardHandlers } from "./managerCardHandlers";
import { currencyHandlers } from "./currencyHandlers";
import { authHandlers } from "./authHandlers";

export const handlers = [
  ...parkingHandlers,
  ...currencyHandlers,
  ...authHandlers,
  ...dispenserHandlers,
  ...planHandlers,
  ...policyHandlers,
  ...userHandlers,
  ...planCardHandlers,
  ...managerCardHandlers,
];
