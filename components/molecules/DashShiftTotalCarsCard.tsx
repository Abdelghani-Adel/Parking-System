"use client";

import React from "react";
import { FaCar } from "react-icons/fa";
import DashShiftCarsDonut from "./DashShiftCarsDonut";
import { useLanguage } from "@/context/LanguageContext";

const DashShiftTotalCarsCard = () => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-between items-end">
      <div>
        <div className="rounded-full bg-primary h-16 w-16 flex items-center justify-center">
          <FaCar className="text-4xl text-white" />
        </div>

        <p className="text-2xl font-bold mt-5">65</p>
        <h6>{t("shiftVehicles")}</h6>
      </div>

      <div className="h-28 w-28">
        <DashShiftCarsDonut />
      </div>
    </div>
  );
};

export default DashShiftTotalCarsCard;
