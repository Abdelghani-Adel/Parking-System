import React from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import AreaChart from "../ui/AreaChart";

const DashPeakHours: React.FC = () => {
  const categories = [
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
  ];

  const colors = ["#22c55e", "#facc15"];

  const info = [
    {
      name: "Entries",
      data: [15, 40, 60, 75, 99, 125, 129, 140, 150, 165, 155, 140, 120, 100, 60],
    },
    {
      name: "Exits",
      data: [12, 35, 50, 70, 95, 105, 110, 112, 115, 120, 100, 90, 85, 75, 55],
    },
  ];

  return (
    <>
      <h2 className="text-lg font-bold mb-3 text-primary dark:text-grey-light flex items-center gap-2">
        <AiOutlineAreaChart />
        Peak Hours Traffic
      </h2>
      <AreaChart categories={categories} colors={colors} info={info} />
    </>
  );
};

export default DashPeakHours;
