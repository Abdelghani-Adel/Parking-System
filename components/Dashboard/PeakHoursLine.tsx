import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PeakHoursLine: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#22c55e", "#facc15"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Peak Hours",
    },
    xaxis: {
      categories: [
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
      ],
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 5,
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
  };

  const series = [
    {
      name: "Entries",
      data: [
        15, 40, 60, 75, 99, 125, 129, 140, 150, 165, 155, 140, 120, 100, 60,
      ],
    },
    {
      name: "Exits",
      data: [12, 35, 50, 70, 95, 105, 110, 112, 115, 120, 100, 90, 85, 75, 55],
    },
  ];

  return <Chart options={options} series={series} type="area" height="100%" />;
};

export default PeakHoursLine;
