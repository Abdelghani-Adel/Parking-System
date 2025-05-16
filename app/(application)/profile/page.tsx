"use client";

import { getUserFromCookies } from "@/utils/auth";
import React from "react";

const page = () => {
  const user = getUserFromCookies();

  return (
    <div>
      <h1 className="text-2xl font-bold">User Profile</h1>
    </div>
  );
};

export default page;
