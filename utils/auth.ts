import { AuthApi, ILoggedInUser, LoginRequest } from "@/services/AuthApi";
import { BrowserStorage } from "./browserStorage";
import { USER_COOKIE_KEY } from "./constants";

export async function loginUser(loginRequest: LoginRequest) {
  const result = await AuthApi.login(loginRequest);
  if (result) {
    const cookie = JSON.stringify(result.data);
    BrowserStorage.setCookie(USER_COOKIE_KEY, cookie);
    return result.data;
  } else {
    return null;
  }
}

export async function logoutUser() {
  await AuthApi.logout();
  BrowserStorage.deleteCookie(USER_COOKIE_KEY);
}

export function getUserFromCookies(): ILoggedInUser | null {
  if (typeof window === "undefined") {
    // Server-side
    try {
      const { cookies } = require("next/headers");
      const userCookie = cookies().get(USER_COOKIE_KEY);
      if (!userCookie?.value) return null;
      return JSON.parse(userCookie.value);
    } catch (error) {
      console.error("Error parsing user from server cookies:", error);
      return null;
    }
  } else {
    // Client-side
    try {
      const userCookie = BrowserStorage.getCookie(USER_COOKIE_KEY);
      if (!userCookie) return null;
      return JSON.parse(userCookie);
    } catch (error) {
      console.error("Error parsing user from client cookies:", error);
      return null;
    }
  }
}

export const roles = {
  superAdmin: "superAdmin",
  admin: "admin",
  superVisor: "superVisor",
  operator: "operator",
};

export const protectedRoutes: Record<string, string[]> = {
  "/config": [roles.superAdmin],
  "/users": [roles.superAdmin, roles.admin],
};
