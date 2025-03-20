"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { BsFillPieChartFill } from "react-icons/bs";
import { FC } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IProps {
  labels: string[];
  colors: string[];
  info: number[];
  showLabels?: boolean;
  labelsPosition?: "bottom" | "top" | "right" | "left";
}

const DonutChart: FC<IProps> = (props) => {
  const { labels, colors, showLabels, labelsPosition, info } = props;

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: labels,
    colors: colors,
    legend: {
      position: labelsPosition ?? "bottom",
      show: showLabels,
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <>
      <Chart options={options} series={info} type="donut" height="100%" width="100%" />
    </>
  );
};

export default DonutChart;
