import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import { IParking } from "@/redux/slices/parkingSlice";

let mockParkings: IParking[] = [
  {
    id: "1",
    name: "Parking 1",
    currency: "1",
    vat: "14",
    lost_ticket_fees: "10",
    lost_card_fees: "50",
    capacity: "50",
    entry_grace_period: "5",
    exit_grace_period: "5",
    card_grace_period: "5",
    tag_grace_period: "5",
    address: "123 st.",
    is_active: true,
    working_days: ["2", "3", "4", "5", "6"],
    workingHours: {
      from: "06:00",
      to: "20:00",
    },
  },
  {
    id: "2",
    name: "Parking 2",
    currency: "2",
    vat: "14",
    lost_ticket_fees: "10",
    lost_card_fees: "50",
    capacity: "50",
    entry_grace_period: "5",
    exit_grace_period: "5",
    card_grace_period: "5",
    tag_grace_period: "5",
    address: "123 st.",
    is_active: false,
    working_days: ["2", "3", "4", "5", "6"],
    workingHours: {
      from: "06:00",
      to: "20:00",
    },
  },
  {
    id: "3",
    name: "Parking 3",
    currency: "1",
    vat: "14",
    lost_ticket_fees: "10",
    lost_card_fees: "50",
    capacity: "50",
    entry_grace_period: "5",
    exit_grace_period: "5",
    card_grace_period: "5",
    tag_grace_period: "5",
    address: "123 st.",
    is_active: true,
    working_days: ["2", "3", "4", "5", "6"],
    workingHours: {
      from: "06:00",
      to: "20:00",
    },
  },
];

export const parkingHandlers = [
  http.get(`${BASE_URL}/api/parkings`, () => {
    return HttpResponse.json(mockParkings);
  }),

  http.post(`${BASE_URL}/api/parkings`, async ({ request }) => {
    const newParking = (await request.json()) as IParking;

    const created = { ...newParking, id: Math.random().toString().slice(2, 6) };
    mockParkings.push(created);
    return HttpResponse.json(created, { status: 201 });
  }),

  http.put(`${BASE_URL}/api/parkings/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IParking;
    mockParkings = mockParkings.map((p) => (p.id === id ? updated : p));
    return HttpResponse.json(updated);
  }),

  http.delete(`${BASE_URL}/api/parkings/:id`, ({ params }) => {
    const id = params.id as string;
    mockParkings = mockParkings.filter((p) => p.id !== id);
    return HttpResponse.text("Deleted");
  }),
];
