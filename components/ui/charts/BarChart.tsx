"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { FC } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IProps {
  categories: string[];
  colors: string[];
  info: { name: string; data: number[] }[];
}

const BarChart: FC<IProps> = (props) => {
  const { categories, colors, info } = props;

  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
    },
    legend: {
      show: false,
    },
    colors: colors,
  };

  return <Chart options={options} series={info} type="bar" height="100%" />;
};

export default BarChart;
