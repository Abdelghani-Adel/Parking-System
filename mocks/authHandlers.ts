import {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
} from "@/services/AuthApi";
import { BASE_URL } from "@/utils/constants";
import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post(`${BASE_URL}/auth/login`, async ({ request }) => {
    const loginRequest = (await request.json()) as LoginRequest;

    if (
      loginRequest.email === "admin@rd.com" &&
      loginRequest.password === "admin@123"
    ) {
      const response: LoginResponse = {
        success: true,
        message: "User logged in successfully",
        data: {
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU5MGZlOTk3LTg4NTYtNDc3Ni04NjdjLTQyYjQ4MDdkYTYzZSIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImlhdCI6MTc0NDg5NjYzMCwiZXhwIjoxNzQ0OTgzMDMwfQ.72F2Pn6xdw8MhoRnrD2-50ULGZDloiMd00wACyC97wQ",
          user: {
            id: "e90fe997-8856-4776-867c-42b4807da63e",
            username: "Super Admin",
            email: "admin@rd.com",
            roleId: "1",
            phoneNumber: "01234567890",
            countryCode: "+20",
            image: "https://example.com/image.jpg",
            isActive: true,
            createdAt: "2025-04-17T13:30:26.987Z",
            updatedAt: "2025-04-17T13:30:26.987Z",
            role: {
              name: "Super Admin",
              tag: "SUPER_ADMIN",
            },
          },
        },
      };

      return HttpResponse.json(response);
    } else {
      const response: LoginResponse = {
        success: false,
        message: "Invalid email or password",
        data: null,
      };

      return HttpResponse.json(response, { status: 401 });
    }
  }),

  http.post(`${BASE_URL}/auth/logout`, async () => {
    const response: LogoutResponse = {
      success: true,
      message: "User logged out successfully",
      data: null,
    };

    return HttpResponse.json(response);
  }),
];
