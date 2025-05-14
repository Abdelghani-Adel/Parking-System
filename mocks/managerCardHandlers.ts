import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IManagerCard } from "@/redux/slices/managerCardSlice";

let mockPlanCards: IManagerCard[] = [
  {
    id: "1",
    cardNumber: "1234567890123456",
    cardName: "John Doe",
    startDate: new Date("2023-01-01").toISOString(),
    cardTypeId: "1",
    period: "12",
    endDate: new Date("2023-12-31").toISOString(),
  },
  {
    id: "2",
    cardNumber: "2345678901234567",
    cardName: "Jane Smith",
    startDate: new Date("2023-02-01").toISOString(),
    cardTypeId: "1",
    period: "12",
    endDate: new Date("2023-12-31").toISOString(),
  },
  {
    id: "3",
    cardNumber: "2345678901234567",
    cardName: "Jane Smith",
    startDate: new Date("2023-02-01").toISOString(),
    cardTypeId: "1",
    period: "12",
    endDate: new Date("2023-12-31").toISOString(),
  },
];

export const managerCardHandlers = [
  http.get(`${BASE_URL}/api/managerCards`, () => {
    return HttpResponse.json(mockPlanCards);
  }),

  http.post(`${BASE_URL}/api/managerCards`, async ({ request }) => {
    const newPlanCard = (await request.json()) as IManagerCard;

    const created = {
      ...newPlanCard,
      id: Math.random().toString().slice(2, 6),
    };
    mockPlanCards.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/managerCards/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IManagerCard;
    mockPlanCards = mockPlanCards.map((card) =>
      card.id === id ? updated : card
    );
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/managerCards/:id`, ({ params }) => {
    const id = params.id as string;
    mockPlanCards = mockPlanCards.filter((card) => card.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
