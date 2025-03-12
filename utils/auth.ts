export type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];

const ROLES = {
  admin: ["update:parkingType"],
  manager: ["view:parkingType"],
  operator: ["create:payment"],
  accountant: ["view:payment"],
};

export function hasPermission(
  user: { id: string; role: Role },
  permission: Permission
) {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
}
