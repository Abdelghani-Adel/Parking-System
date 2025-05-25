import axiosInstance from "@/lib/axiosInstance";

// Define interfaces for the data structures
export interface IParking {
  id: string;
  name: string;
  currencyId: string;
  vatPercentage: string;
  lostTicketFee: string;
  lostCardFee: string;
  lostTagFee: string;
  totalCapacity: string;
  entryGracePeriod: string;
  exitGracePeriod: string;
  cardGracePeriod: string;
  tagGracePeriod: string;
  address: string;
  isActive: boolean;
  workingDays: string[];
  workingHours: {
    from: string;
    to: string;
  };
}

export interface GetAllParkingsReponse {
  success: boolean;
  message: string;
  data: {
    data: IParking[];
    total: number;
    skip: number;
    limit: number;
  };
}

export interface CreateParkingResponse {
  success: boolean;
  message: string;
  data: IParking;
}

export interface GetParkingByIdReponse {
  success: boolean;
  message: string;
  data: IParking;
}

export interface UpdateParkingResponse {
  success: boolean;
  message: string;
  data: IParking;
}

export interface DeleteParkingResponse {
  success: boolean;
  message: string;
}

export class ParkingApi {
  static async getAll(): Promise<IParking[]> {
    try {
      const response = await axiosInstance.get<GetAllParkingsReponse>(
        "/parking"
      );
      return response.data.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async getById(id: string): Promise<IParking> {
    try {
      const response = await axiosInstance.get<GetParkingByIdReponse>(
        `/parking/${id}`
      );
      return response.data.data;
    } catch (error) {
      return {} as IParking;
    }
  }

  static async create(parking: IParking): Promise<IParking> {
    try {
      const response = await axiosInstance.post<CreateParkingResponse>(
        "/parking",
        parking
      );
      return response.data.data;
    } catch (error) {
      return {} as IParking;
    }
  }

  static async update(parking: IParking): Promise<IParking> {
    try {
      const response = await axiosInstance.put<UpdateParkingResponse>(
        `/parking/${parking.id}`,
        parking
      );
      return response.data.data;
    } catch (error) {
      return {} as IParking;
    }
  }

  static async delete(id: string): Promise<void> {
    try {
      await axiosInstance.delete<DeleteParkingResponse>(`/parking/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ParkingApi;
