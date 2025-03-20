"use client";

import { BsFillBarChartLineFill } from "react-icons/bs";
import BarChart from "../ui/BarChart";

const DashShiftCarsBarchart = () => {
  const categories = [
    "00-02",
    "02-04",
    "04-06",
    "06-08",
    "08-10",
    "10-12",
    "12-14",
    "14-16",
    "16-18",
    "18-20",
    "20-22",
    "22-24",
  ];

  const info = [
    {
      name: "Cars Processed",
      data: [5, 8, 12, 20, 35, 50, 60, 75, 90, 85, 70, 40],
    },
  ];

  return (
    <>
      <h2 className="text-lg font-bold mb-3 text-primary dark:text-grey-light flex items-center gap-2">
        <BsFillBarChartLineFill />
        Processed Cars
      </h2>
      <BarChart categories={categories} info={info} colors={["#22c55e"]} />
    </>
  );
};

export default DashShiftCarsBarchart;
