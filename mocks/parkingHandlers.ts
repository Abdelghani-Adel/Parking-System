import { http, HttpResponse } from "msw";
import { BASE_URL } from "@/utils/constants";
import {
  CreateParkingResponse,
  DeleteParkingResponse,
  GetAllParkingsReponse,
  IParking,
  UpdateParkingResponse,
} from "@/services/ParkingApi";

let mockParkings: IParking[] = [
  {
    id: "1",
    name: "Parking 1",
    currencyId: "1",
    vatPercentage: "14",
    lostTicketFee: "10",
    lostCardFee: "50",
    lostTagFee: "50",
    totalCapacity: "50",
    entryGracePeriod: "5",
    exitGracePeriod: "5",
    cardGracePeriod: "5",
    tagGracePeriod: "5",
    address: "123 st.",
    isActive: true,
    workingDays: ["2", "3", "4", "5", "6"],
    workingHours: {
      from: "06:00",
      to: "20:00",
    },
  },
  {
    id: "2",
    name: "Parking 2",
    currencyId: "1",
    vatPercentage: "14",
    lostTicketFee: "10",
    lostCardFee: "50",
    lostTagFee: "50",
    totalCapacity: "50",
    entryGracePeriod: "5",
    exitGracePeriod: "5",
    cardGracePeriod: "5",
    tagGracePeriod: "5",
    address: "123 st.",
    isActive: true,
    workingDays: ["2", "3", "4", "5", "6"],
    workingHours: {
      from: "06:00",
      to: "20:00",
    },
  },
  {
    id: "3",
    name: "Parking 3",
    currencyId: "1",
    vatPercentage: "14",
    lostTicketFee: "10",
    lostCardFee: "50",
    lostTagFee: "50",
    totalCapacity: "50",
    entryGracePeriod: "5",
    exitGracePeriod: "5",
    cardGracePeriod: "5",
    tagGracePeriod: "5",
    address: "123 st.",
    isActive: true,
    workingDays: ["2", "3", "4", "5", "6"],
    workingHours: {
      from: "06:00",
      to: "20:00",
    },
  },
];

export const parkingHandlers = [
  // Catch get all parkings request
  http.get(`${BASE_URL}/parking`, () => {
    const response: GetAllParkingsReponse = {
      success: true,
      message: "Parkings retrieved successfully",
      data: {
        data: mockParkings,
        total: mockParkings.length,
        skip: 0,
        limit: 10,
      },
    };
    return HttpResponse.json(response);
  }),

  // Catch create parking request
  http.post(`${BASE_URL}/parking`, async ({ request }) => {
    const newParking = (await request.json()) as IParking;
    const created = { ...newParking, id: Math.random().toString().slice(2, 6) };
    mockParkings.push(created);

    const response: CreateParkingResponse = {
      success: true,
      message: "Parking created successfully",
      data: created,
    };

    return HttpResponse.json(response, { status: 201 });
  }),

  // Catch update parking request
  http.put(`${BASE_URL}/parking/:id`, async ({ request, params }) => {
    const id = params.id as string;
    const updated = (await request.json()) as IParking;
    mockParkings = mockParkings.map((p) => (p.id === id ? updated : p));

    const reponse: UpdateParkingResponse = {
      success: true,
      message: "Parking updated successfully",
      data: updated,
    };

    return HttpResponse.json(reponse);
  }),

  // Catch delete parking request
  http.delete(`${BASE_URL}/parking/:id`, ({ params }) => {
    const id = params.id as string;
    mockParkings = mockParkings.filter((p) => p.id !== id);

    const reponse: DeleteParkingResponse = {
      success: true,
      message: "Parking deleted successfully",
    };

    return HttpResponse.json(reponse);
  }),
];
