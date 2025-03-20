"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IProps {
  categories: string[];
  colors: string[];
  info: { name: string; data: number[] }[];
}

const AreaChart: FC<IProps> = (props) => {
  const { categories, colors, info } = props;

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
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

  return <Chart options={options} series={info} type="area" height="100%" />;
};

export default AreaChart;
