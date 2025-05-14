import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IUser } from "@/redux/slices/userSlice";

let mockUsers: IUser[] = [
  {
    id: "1",
    name: "Ahmed Abdelnaby",
    email: "ahmed@royaldefense.com",
    roleId: "1",
    phone: "01000000000",
  },
  {
    id: "1",
    name: "Baher Elnaggar",
    email: "baher@royaldefense.com",
    roleId: "1",
    phone: "01000000000",
  },
];

export const userHandlers = [
  http.get(`${BASE_URL}/api/users`, () => {
    return HttpResponse.json(mockUsers);
  }),

  http.post(`${BASE_URL}/api/users`, async ({ request }) => {
    const newUser = (await request.json()) as IUser;
    const created = { ...newUser, id: Math.random().toString().slice(2, 6) };
    mockUsers.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/users/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IUser;
    mockUsers = mockUsers.map((u) => (u.id === id ? updated : u));
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/users/:id`, ({ params }) => {
    const id = params.id as string;
    mockUsers = mockUsers.filter((u) => u.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
