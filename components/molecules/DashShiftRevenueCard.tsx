"use client";

import React from "react";
import { MdAttachMoney } from "react-icons/md";
import DashRevenueDonut from "./DashRevenueDonut";
import { useLanguage } from "@/context/LanguageContext";

const DashShiftRevenueCard = () => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-between items-end">
      <div>
        <div className="rounded-full bg-green-500 h-16 w-16 flex items-center justify-center">
          <MdAttachMoney className="text-5xl text-white" />
        </div>

        <p className="text-2xl font-bold mt-5">
          470 <span>{t("egp")}</span>
        </p>
        <h6>{t("shiftRevenue")}</h6>
      </div>

      <div className="h-28 w-28">
        <DashRevenueDonut />
      </div>
    </div>
  );
};

export default DashShiftRevenueCard;
