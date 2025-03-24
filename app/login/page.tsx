"use client";

import Image from "next/image";
import { useState } from "react";
import tokens from "@/public/data/tokens.json";
import { useRouter } from "next/navigation";

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

  const submitHandler = (e: any) => {
    e.preventDefault();
    switch (username) {
      case "superAdmin": {
        document.cookie = "quantumParkingToken=" + tokens.superAdmin;
        break;
      }
      case "admin": {
        document.cookie = "quantumParkingToken=" + tokens.admin;
        break;
      }
      case "superVisor": {
        document.cookie = "quantumParkingToken=" + tokens.superVisor;
        break;
      }
      case "operator": {
        document.cookie = "quantumParkingToken=" + tokens.operator;
        break;
      }
    }

    router.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-primary to-primary-darker animated-gradient h-screen w-screen flex items-center justify-center">
      <div className="absolute top-10">
        <img src="/images/logo-white.png" className="h-20 w-max" width={500} height={306} alt="logo" />
      </div>

      <div className="bg-primary-light p-10 rounded-xl w-[40rem] text-white">
        <h2 className="text-3xl font-bold text-center mb-10">Welcome to Quantum Parking</h2>

        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={onUsernameChange}
              placeholder="Enter your username"
              className="w-full py-2 px-2 text-sm text-grey-darker font-normal pr-8 border rounded-md focus:outline-none border-accent-light focus:ring-blue-500"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={onPasswordChange}
              placeholder="Enter your password"
              className="w-full py-2 px-2 text-sm text-grey-darker font-normal pr-8 border rounded-md focus:outline-none border-accent-light focus:ring-blue-500"
            />
          </div>

          <button type="submit" className="w-full bg-white text-primary font-bold rounded-xl py-3 mt-3">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
