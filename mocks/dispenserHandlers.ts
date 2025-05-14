import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IDispenser } from "@/redux/slices/dispenserSlice";

let mockDispensers: IDispenser[] = [
  {
    id: "1",
    name: "dispenser 1",
    parkingId: "1",
    status: "Online",
    dispenserUrl: "192.168.20.11",
    dispenserTypeId: "1",
  },
  {
    id: "2",
    name: "dispenser 2",
    parkingId: "2",
    status: "Online",
    dispenserUrl: "192.168.20.12",
    dispenserTypeId: "2",
  },
  {
    id: "3",
    name: "dispenser 3",
    parkingId: "3",
    status: "Offline",
    dispenserUrl: "192.168.20.13",
    dispenserTypeId: "1",
  },
];

export const dispenserHandlers = [
  http.get(`${BASE_URL}/api/dispensers`, () => {
    return HttpResponse.json(mockDispensers);
  }),

  http.post(`${BASE_URL}/api/dispensers`, async ({ request }) => {
    const newDispenser = (await request.json()) as IDispenser;

    const created = {
      ...newDispenser,
      id: Math.random().toString().slice(2, 6),
    };
    mockDispensers.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/dispensers/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IDispenser;
    mockDispensers = mockDispensers.map((d) => (d.id === id ? updated : d));
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/dispensers/:id`, ({ params }) => {
    const id = params.id as string;
    mockDispensers = mockDispensers.filter((d) => d.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
