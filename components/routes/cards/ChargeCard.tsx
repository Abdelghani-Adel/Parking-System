"use client";
import { useLanguage } from "@/context/LanguageContext";
import { FormControl, TextField } from "@mui/material";
import React from "react";
import { IoIosSave } from "react-icons/io";
import { AiOutlineIdcard } from "react-icons/ai";

const ChargeCard = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold text-primary dark:text-grey-light flex items-center gap-2">
        <AiOutlineIdcard className="text-3xl" />
        <span>Charge Card</span>
      </h2>

      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Card id" variant="outlined" />
      </FormControl>

      <FormControl fullWidth>
        <TextField id="outlined-basic" label="Amount" variant="outlined" />
      </FormControl>

      <button className="m2-3 w-full text-sm flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary-darker transition duration-300 px-5 rounded-lg text-white">
        <IoIosSave className="text-2xl" />
        <span>{t("save")}</span>
      </button>
    </div>
  );
};

export default ChargeCard;
