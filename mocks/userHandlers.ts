import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import {
  CreateUserResponse,
  DeleteUserResponse,
  GetAllUsersResponse,
  IUser,
  UpdateUserResponse,
} from "@/services/UserAPI";

let mockUsers: IUser[] = [
  {
    id: "1",
    username: "Ahmed Abdelnaby",
    email: "ahmed@royaldefense.com",
    roleId: "1",
    phoneNumber: "01000000000",
  },
  {
    id: "1",
    username: "Baher Elnaggar",
    email: "baher@royaldefense.com",
    roleId: "1",
    phoneNumber: "01000000000",
  },
];

export const userHandlers = [
  http.get(`${BASE_URL}/users`, () => {
    const response: GetAllUsersResponse = {
      success: true,
      message: "Parkings retrieved successfully",
      data: {
        items: mockUsers,
        totalItems: mockUsers.length,
      },
    };

    return HttpResponse.json(response);
  }),

  http.post(`${BASE_URL}/users`, async ({ request }) => {
    const newUser = (await request.json()) as IUser;
    const created = { ...newUser, id: Math.random().toString().slice(2, 6) };
    mockUsers.push(created);

    const response: CreateUserResponse = {
      success: true,
      message: "User created successfully",
      data: created,
    };

    return HttpResponse.json(response, { status: 201 });
  }),

  http.put(`${BASE_URL}/users/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IUser;
    mockUsers = mockUsers.map((u) => (u.id === id ? updated : u));

    const reponse: UpdateUserResponse = {
      success: true,
      message: "User updated successfully",
      data: updated,
    };

    return HttpResponse.json(reponse);
  }),

  http.delete(`${BASE_URL}/users/:id`, ({ params }) => {
    const id = params.id as string;
    mockUsers = mockUsers.filter((u) => u.id !== id);

    const reponse: DeleteUserResponse = {
      success: true,
      message: "User deleted successfully",
    };

    return HttpResponse.json(reponse);
  }),
];
