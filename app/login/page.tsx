"use client";

import Image from "next/image";
import { useState } from "react";
import tokens from "@/public/data/tokens.json";
import { useRouter } from "next/navigation";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { Label } from "@/components/ui/shadcn/ui/label";
import { Input } from "@/components/ui/shadcn/ui/input";
import { Button } from "@/components/ui/shadcn/ui/button";
import { cn } from "@/components/ui/shadcn/utils";
import axiosInstance from "@/lib/axiosInstance";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/api/v1/auth/login", {
        email: username,
        password: password,
      });

      if (response.data.success) {
        document.cookie =
          "quantumParkingToken=" + response.data.data.accessToken;
        router.push("/");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <img
            src="/images/dark-logo.png"
            className="h-20 w-max m-auto"
            width={500}
            height={306}
            alt="logo"
          />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form
              className={cn("flex flex-col gap-6")}
              onSubmit={submitHandler}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Username</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="ُEnter your username"
                    onChange={onUsernameChange}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    onChange={onPasswordChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
