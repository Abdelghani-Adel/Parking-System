"use client";

import DonutChart from "@/components/ui/DonutChart";

const DashRevenueDonut = () => {
  const info = [2800, 900];
  const labels = ["Cash", "Card"];
  const colors = ["#22c55e", "#36527a"];

  return (
    <>
      <DonutChart labels={labels} colors={colors} info={info} />
    </>
  );
};

export default DashRevenueDonut;
