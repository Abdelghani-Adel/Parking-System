import axiosInstance from "@/lib/axiosInstance";
import { IUser } from "./UserAPI";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ILoggedInUser {
  accessToken: string;
  user: IUser;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: IUser;
  } | null;
}

export interface RefreshTokenResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
}

export interface LogoutResponse {
  success: boolean;
  message: string;
  data: any;
}

export interface IUserRole {
  id: string;
  name: string;
  tag: string;
}

export class AuthApi {
  static async login(loginRequest: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await axiosInstance.post<LoginResponse>(
        "/auth/login",
        loginRequest
      );
      return response.data;
    } catch (error) {
      return {} as LoginResponse;
    }
  }

  static async refreshToken(): Promise<RefreshTokenResponse> {
    try {
      const response = await axiosInstance.post<RefreshTokenResponse>(
        "/auth/refresh-token"
      );
      return response.data;
    } catch (error) {
      return {} as RefreshTokenResponse;
    }
  }

  static async logout(): Promise<LogoutResponse> {
    try {
      const response = await axiosInstance.post<LogoutResponse>("/auth/logout");
      return response.data;
    } catch (error) {
      return {} as LogoutResponse;
    }
  }

  static async getUserRoles(): Promise<IUserRole[]> {
    try {
      const response = await axiosInstance.get<IUserRole[]>("/auth/user-roles");
      return response.data;
    } catch (error) {
      return [] as IUserRole[];
    }
  }
}
