import { parkingHandlers } from "./parkingHandlers";
import { dispenserHandlers } from "./dispenserHandlers";
import { planHandlers } from "./planHandlers";
import { policyHandlers } from "./policyHandlers";
import { userHandlers } from "./userHandlers";
import { planCardHandlers } from "./planCardHandlers";
import { managerCardHandlers } from "./managerCardHandlers";

export const handlers = [
  ...parkingHandlers,
  ...dispenserHandlers,
  ...planHandlers,
  ...policyHandlers,
  ...userHandlers,
  ...planCardHandlers,
  ...managerCardHandlers,
];
