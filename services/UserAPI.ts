import axiosInstance from "@/lib/axiosInstance";

export interface IUser {
  id: string;
  username: string;
  roleId: string;
  isActive?: boolean;
  email?: string;
  phoneNumber?: string;
  countryCode?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  role?: {
    name: string;
    tag: string;
  };
}

export interface GetUserResponse {
  success: boolean;
  message: string;
  data: IUser;
}

export interface UpdateUserResponse {
  success: boolean;
  message: string;
  data: IUser;
}

export interface GetAllUsersResponse {
  success: boolean;
  message: string;
  data: {
    items: IUser[];
    totalItems: number;
  };
}

export interface CreateUserResponse {
  success: boolean;
  message: string;
  data: IUser;
}

export interface GetUserByIdResponse {
  success: boolean;
  message: string;
  data: IUser;
}

export interface DeleteUserResponse {
  success: boolean;
  message: string;
}

export class UserApi {
  static async getAll(): Promise<IUser[]> {
    try {
      const response = await axiosInstance.get<GetAllUsersResponse>("/user");
      return response.data.data.items;
    } catch (error) {
      return [];
    }
  }

  static async getById(id: string): Promise<IUser> {
    try {
      const response = await axiosInstance.get<GetUserByIdResponse>(
        `/users/${id}`
      );
      return response.data.data;
    } catch (error) {
      return {} as IUser;
    }
  }

  static async create(user: IUser): Promise<IUser> {
    try {
      const response = await axiosInstance.post<CreateUserResponse>(
        "/users",
        user
      );
      return response.data.data;
    } catch (error) {
      return {} as IUser;
    }
  }

  static async update(user: IUser): Promise<IUser> {
    try {
      const response = await axiosInstance.put<UpdateUserResponse>(
        `/users/${user.id}`,
        user
      );
      return response.data.data;
    } catch (error) {
      return {} as IUser;
    }
  }

  static async delete(id: string): Promise<void> {
    try {
      await axiosInstance.delete<DeleteUserResponse>(`/users/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}
