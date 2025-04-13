"use client";

import MuiModal from "@/components/ui/MuiModal";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import FormUser from "./forms/form-user";

const AddUser = () => {
  const { t } = useLanguage();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpened(true)}
        className="bg-green-500 py-2 px-5 rounded-lg text-white flex items-center gap-2"
      >
        <FaUserPlus className="text-2xl" />
        <span>New User</span>
      </button>

      <MuiModal isOpened={isOpened}>
        <div className="bg-white dark:bg-grey-dark p-5 rounded-lg relative max-w-xl">
          <h1 className="flex items-center gap-2 text-xl text-primary font-semibold mb-4">
            <FaUserPlus className="text-2xl" />
            New User
          </h1>

          <button
            onClick={() => setIsOpened(false)}
            className="flex items-center gap-2 text-red-500 p-1 rounded-full absolute top-4 right-4"
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>

          <FormUser mode="add" onSubmit={(data) => {}} />
        </div>
      </MuiModal>
    </div>
  );
};

export default AddUser;
