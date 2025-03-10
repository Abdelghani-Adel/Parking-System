"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { BsFillPieChartFill } from "react-icons/bs";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenuePieChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Cash", "Card"],
    legend: {
      position: "bottom",
      show: false,
    },
    colors: ["#22c55e", "#36527a"],
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [2800, 900];

  return (
    <>
      {/* <h2 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
        <BsFillPieChartFill />
        Revenue Type
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

export default RevenuePieChart;
