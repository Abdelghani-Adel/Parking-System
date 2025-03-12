"use client";

import React from "react";
import { TbParkingCircleFilled } from "react-icons/tb";
import ParkingCarsDonutChart from "./ParkingCarsDonutChart";
import { useLanguage } from "@/context/LanguageContext";

const ParkingCarsCard = () => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-between items-end">
      <div>
        <div className="rounded-full bg-amber-400 h-16 w-16 flex items-center justify-center">
          <TbParkingCircleFilled className="text-4xl text-white" />
        </div>

        <p className="text-2xl font-bold mt-5">65</p>
        <h6>{t("vehiclesParking")}</h6>
      </div>

      <div className="h-28 w-28">
        <ParkingCarsDonutChart />
      </div>
    </div>
  );
};

export default ParkingCarsCard;
