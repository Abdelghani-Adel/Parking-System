export const TOKEN_KEY = "quantumParkingToken";

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

// ✅ Save Cookie
export function setCookie(name: string, value: string) {
  if (typeof window !== "undefined") {
    document.cookie = `${name}=${value}; path=/; secure; HttpOnly`;
  }
}

// ✅ Get Cookie
export function getCookie(name: string): string | undefined | null {
  if (typeof window === "undefined") return null;

  const cookieMatch = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));
  return cookieMatch ? cookieMatch.split("=")[1] : null;
}

// ✅ Delete Cookie
export function deleteCookie(name: string) {
  if (typeof window !== "undefined") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}

// ✅ Get Token
export function getAuthToken(): string | undefined | null {
  if (typeof window === "undefined") {
    // Dynamically import next/headers only on the server
    const { cookies } = require("next/headers");
    return cookies().get(TOKEN_KEY)?.value;
  } else {
    // Client-side: Access cookies from document.cookie
    return getCookie(TOKEN_KEY);
  }
}

// ✅ Decode token
export function decodeToken(token: string): Record<string, any> | null {
  try {
    const base64Url = token.split(".")[1]; // Get payload part
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
