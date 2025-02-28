"use client";
import InputPassword from "@/components/ui/InputPassword";
import InputText from "@/components/ui/InputText";
import UIModal from "@/components/ui/UIModal";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { LiaSaveSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";

const UserRecord = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md p-3 flex items-center justify-between">
        <h4 className="text-gray-500">Ahmed Mohamed (Admin)</h4>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 py-2 justify-center w-28 bg-green-500 hover:bg-green-700 transition duration-300 rounded-lg text-white font-semibold"
          >
            <FaRegEdit /> Edit
          </button>
          <button
            onClick={() => setIsRemoving(true)}
            className="flex items-center gap-2 py-2 justify-center w-28 bg-red-500 hover:bg-red-700 transition duration-300 rounded-lg text-white font-semibold"
          >
            <RiDeleteBin6Line /> Remove
          </button>
        </div>
      </div>

      <UIModal isOpen={isRemoving} onClose={() => setIsRemoving(false)}>
        <div className="w-96 space-y-3">
          <h2 className="text-xl font-semibold">Remove User</h2>
          Are you sure you want to remove the user ?
          <button className="flex items-center gap-2 py-2 w-full justify-center bg-red-500 hover:bg-red-700 transition duration-300 rounded-lg text-white font-semibold">
            <RiDeleteBin6Line className="text-xl" />
            Yes, I want to remove
          </button>
        </div>
      </UIModal>

      <UIModal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <div className="w-96 space-y-3">
          <h2 className="text-xl font-semibold">Edit User</h2>

          <InputText label="Name" name="name" />
          <InputText label="Username" name="username" />
          <InputPassword label="New Password" name="password" placeholder="" />

          <button className="flex items-center gap-2 py-2 w-full justify-center bg-green-500 hover:bg-green-700 transition duration-300 rounded-lg text-white font-semibold">
            <LiaSaveSolid className="text-xl" />
            Save
          </button>
        </div>
      </UIModal>
    </>
  );
};

export default UserRecord;
