import axiosInstance from "@/lib/axiosInstance";

export interface IConfigPlan {
  id: string;
  isActive?: boolean;
  name: string;
  description?: string;
  parkingId?: string;
  type: string;
  fee: string;
  isDefault?: true;
  timeCalculationType: string;
  vehicleTypeId: string;
  validityFrom?: string;
  validityTo?: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface ICreateConfigPlanResponse {
  success: boolean;
  message: string;
  data: IConfigPlan;
}

export interface IGetAllConfigPlansResponse {
  success: boolean;
  message: string;
  data: {
    data: IConfigPlan[];
    total: number;
    skip: number;
    limit: number;
  };
}

export interface IUpdateConfigPlanResponse {
  success: boolean;
  message: string;
  data: IConfigPlan;
}

export interface IDeleteConfigPlanResponse {
  success: boolean;
  message: string;
}

export class ConfigPlanApi {
  static async getAll(): Promise<IConfigPlan[]> {
    try {
      const response = await axiosInstance.get<IGetAllConfigPlansResponse>(
        "/config-plan"
      );
      return response.data.data.data;
    } catch (error) {
      return [];
    }
  }

  static async create(configPlan: IConfigPlan): Promise<IConfigPlan> {
    try {
      const response = await axiosInstance.post<ICreateConfigPlanResponse>(
        "/config-plan",
        configPlan
      );
      return response.data.data;
    } catch (error) {
      return {} as IConfigPlan;
    }
  }

  static async update(configPlan: IConfigPlan): Promise<IConfigPlan> {
    try {
      const response = await axiosInstance.put<IUpdateConfigPlanResponse>(
        `/config-plan/${configPlan.id}`,
        configPlan
      );
      return response.data.data;
    } catch (error) {
      return {} as IConfigPlan;
    }
  }

  static async delete(id: string): Promise<boolean> {
    try {
      await axiosInstance.delete<IDeleteConfigPlanResponse>(
        `/config-plan/${id}`
      );
      return true;
    } catch (error) {
      return false;
    }
  }
}
