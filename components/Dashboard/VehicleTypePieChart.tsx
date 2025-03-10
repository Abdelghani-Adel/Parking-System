"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { BsFillPieChartFill } from "react-icons/bs";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const VehicleTypePieChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut", // ✅ Explicitly typed
    },
    labels: ["Car", "Truck", "Motorcycle"],
    legend: {
      position: "bottom",
      show: false,
    },
    colors: ["#facc15", "#82c9e5", "#36527a"],
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [7, 3, 5];

  return (
    <>
      {/* <h2 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
        <BsFillPieChartFill />
        Vehicle Type
      </h2> */}
      <Chart
        options={options}
        series={series}
        type="donut"
        height="100%"
        width="100%"
      />
    </>
  );
};

export default VehicleTypePieChart;
