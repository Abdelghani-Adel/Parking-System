import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IPlan } from "@/redux/slices/planSlice";

let mockPlans: IPlan[] = [
  {
    id: "1",
    name: "plan 1",
    planTypeId: "1",
    feesCalculatorId: "2",
    rate: "10",
    parkingTypeId: "1",
    parkingId: "1",
    status: "",
    categoryTypes: ["1", "2"],
    validity: {
      from: "",
      to: "",
    },
  },
  {
    id: "2",
    name: "plan 2",
    planTypeId: "1",
    feesCalculatorId: "2",
    rate: "10",
    parkingTypeId: "1",
    parkingId: "2",
    status: "",
    categoryTypes: ["1", "2"],
    validity: {
      from: "",
      to: "",
    },
  },
  {
    id: "3",
    name: "plan 3",
    planTypeId: "1",
    feesCalculatorId: "2",
    rate: "10",
    parkingTypeId: "1",
    parkingId: "1",
    status: "",
    categoryTypes: ["1", "2"],
    validity: {
      from: "",
      to: "",
    },
  },
];

export const planHandlers = [
  http.get(`${BASE_URL}/api/plans`, () => {
    return HttpResponse.json(mockPlans);
  }),

  http.post(`${BASE_URL}/api/plans`, async ({ request }) => {
    const newPlan = (await request.json()) as IPlan;
    const created = { ...newPlan, id: Math.random().toString().slice(2, 6) };
    mockPlans.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/plans/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IPlan;
    mockPlans = mockPlans.map((p) => (p.id === id ? updated : p));
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/plans/:id`, ({ params }) => {
    const id = params.id as string;
    mockPlans = mockPlans.filter((p) => p.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
