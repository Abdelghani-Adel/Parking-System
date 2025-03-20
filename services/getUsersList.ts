import users from "@/public/data/users.json";

export async function getUsersList(): Promise<IUsersListResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return users;
}

export interface ISystemUser {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface IUsersListResponse {
  records: ISystemUser[];
}
