"use client";
import UserRecord from "@/components/routes/users/UserRecord";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import UIModal from "@/components/ui/UIModal";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { LiaSaveSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";

const Page = () => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div className="w-full grid grid-rows-[max-content_1fr] gap-5">
      <section className="">
        <button
          onClick={() => setIsAdding(true)}
          className="py-3 px-5 flex items-center gap-2 bg-green-500 hover:bg-green-700 transition duration-300 rounded-lg text-white font-semibold"
        >
          <FaUserPlus />
          Add User
        </button>

        <UIModal isOpen={isAdding} onClose={() => setIsAdding(false)}>
          <div className="w-96 space-y-3">
            <h2 className="text-xl font-semibold">Add New User</h2>

            <InputText label="Name" name="name" />
            <InputText label="Username" name="username" />
            <InputPassword label="Password" name="password" placeholder="" />

            <button className="flex items-center gap-2 py-2 w-full justify-center bg-green-500 hover:bg-green-700 transition duration-300 rounded-lg text-white font-semibold">
              <LiaSaveSolid className="text-xl" />
              Save
            </button>
          </div>
        </UIModal>
      </section>

      <section className="bg-white p-5 rounded-lg overflow-auto">
        <div className="flex justify-between items-center gap-3 mb-5">
          <h2 className="text-xl font-semibold text-gray-500 shrink-0">
            System Users
          </h2>

          <input
            type="text"
            placeholder="Search by username"
            className="w-full text-sm py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
          />
        </div>
        <div className="space-y-2">
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
          <UserRecord />
        </div>
      </section>
    </div>
  );
};

export default Page;
