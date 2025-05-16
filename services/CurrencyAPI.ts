import axiosInstance from "@/lib/axiosInstance";

export interface ICurrency {
  id: string;
  name: string;
  nameAr: string;
  code: string;
  symbol: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllCurrenciesReponse {
  success: boolean;
  message: string;
  data: {
    data: ICurrency[];
    total: number;
    skip: number;
    limit: number;
  };
}

export class CurrencyApi {
  static async getAll(): Promise<ICurrency[]> {
    try {
      const response = await axiosInstance.get<GetAllCurrenciesReponse>(
        "/currency"
      );
      return response.data.data.data;
    } catch (error) {
      return [];
    }
  }
}
