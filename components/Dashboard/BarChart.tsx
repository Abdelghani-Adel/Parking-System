"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { IoBarChartSharp } from "react-icons/io5";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Cars Processed",
    },
    xaxis: {
      categories: [
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
      ],
    },
    legend: {
      show: false,
    },
    colors: ["#22c55e"],
  };

  const series = [
    {
      name: "Cars Processed",
      data: [5, 8, 12, 20, 35, 50, 60, 75, 90, 85, 70, 40],
    },
  ];

  return (
    <>
      {/* <h2 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
        <IoBarChartSharp />
        Total Cars Processed Today
      </h2> */}
      <Chart options={options} series={series} type="bar" height="100%" />
    </>
  );
};

export default BarChart;
