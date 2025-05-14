import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IPlanCard } from "@/redux/slices/planCardSlice";

let mockPlanCards: IPlanCard[] = [
  {
    id: "1",
    cardNumber: "1234567890123456",
    cardName: "John Doe",
    startDate: new Date("2023-01-01").toISOString(),
    cardTypeId: "2",
    period: "12",
    endDate: new Date("2023-12-31").toISOString(),
    tagId: "",
    planId: "1",
    policies: ["1"],
  },
  {
    id: "2",
    cardNumber: "2345678901234567",
    cardName: "Jane Smith",
    startDate: new Date("2023-02-01").toISOString(),
    period: "6",
    endDate: new Date("2023-08-31").toISOString(),
    tagId: "",
    planId: "2",
    cardTypeId: "2",
    policies: [],
  },
  {
    id: "3",
    cardNumber: "3456789012345678",
    cardName: "Bob Johnson",
    startDate: new Date("2023-03-01").toISOString(),
    period: "12",
    endDate: new Date("2024-03-01").toISOString(),
    tagId: "132132132131",
    planId: "3",
    cardTypeId: "2",
    policies: [],
  },
];

export const planCardHandlers = [
  http.get(`${BASE_URL}/api/planCards`, () => {
    return HttpResponse.json(mockPlanCards);
  }),

  http.post(`${BASE_URL}/api/planCards`, async ({ request }) => {
    const newPlanCard = (await request.json()) as IPlanCard;

    const created = {
      ...newPlanCard,
      id: Math.random().toString().slice(2, 6),
    };
    mockPlanCards.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/planCards/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IPlanCard;
    mockPlanCards = mockPlanCards.map((card) =>
      card.id === id ? updated : card
    );
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/planCards/:id`, ({ params }) => {
    const id = params.id as string;
    mockPlanCards = mockPlanCards.filter((card) => card.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
