import parkings from "@/public/data/ParkingsList.json";

export async function getParkingsList(): Promise<IParkingListResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return parkings;
}

export interface IParking {
  id: string;
  name: string;
  type: string;
  dispensers: {}[];
  currency: string;
  feesType: string;
  lostTicketFees: number;
}

export interface IParkingListResponse {
  records: IParking[];
}
