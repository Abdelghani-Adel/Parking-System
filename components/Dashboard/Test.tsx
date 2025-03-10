import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PaymentsOverview: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#00C6FF", "#6236FF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "12 AM",
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
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
        "8 PM",
        "9 PM",
        "10 PM",
        "11 PM",
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
        5, 2, 3, 6, 8, 15, 40, 60, 75, 100, 120, 130, 140, 150, 130, 110, 100,
        95, 80, 60, 50, 30, 15, 8,
      ],
    },
    {
      name: "Exits",
      data: [
        4, 1, 2, 5, 6, 12, 35, 50, 70, 95, 110, 125, 135, 140, 120, 100, 90, 85,
        75, 55, 45, 25, 12, 6,
      ],
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default PaymentsOverview;
