"use client";

import DonutChart from "../ui/charts/DonutChart";

const ParkingCarsDonutChart = () => {
  const info = [20, 3, 5];
  const labels = ["Car", "Truck", "Motorcycle"];
  const colors = ["#facc15", "#82c9e5", "#36527a"];

  return (
    <>
      <DonutChart labels={labels} colors={colors} info={info} />
    </>
  );
};

export default ParkingCarsDonutChart;
