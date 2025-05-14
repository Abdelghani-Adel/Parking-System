import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IPolicy } from "@/redux/slices/policySlice";

let mockPolicies: IPolicy[] = [
  {
    id: "1",
    name: "Policy 1",
    activeDays: ["2", "3"],
    activeHours: {
      from: "08:00",
      to: "20:00",
    },
    dailyMax: "4",
    monthlyMax: "50",
  },
  {
    id: "2",
    name: "Policy 2",
    activeDays: ["2", "3"],
    activeHours: {
      from: "08:00",
      to: "20:00",
    },
    dailyMax: "4",
    monthlyMax: "50",
  },
  {
    id: "3",
    name: "Policy 3",
    activeDays: ["2", "3"],
    activeHours: {
      from: "08:00",
      to: "20:00",
    },
    dailyMax: "4",
    monthlyMax: "50",
  },
];

export const policyHandlers = [
  http.get(`${BASE_URL}/api/policies`, () => {
    return HttpResponse.json(mockPolicies);
  }),

  http.post(`${BASE_URL}/api/policies`, async ({ request }) => {
    const newPolicy = (await request.json()) as IPolicy;
    const created = { ...newPolicy, id: Math.random().toString().slice(2, 6) };
    mockPolicies.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/policies/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IPolicy;
    mockPolicies = mockPolicies.map((p) => (p.id === id ? updated : p));
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/policies/:id`, ({ params }) => {
    const id = params.id as string;
    mockPolicies = mockPolicies.filter((p) => p.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
