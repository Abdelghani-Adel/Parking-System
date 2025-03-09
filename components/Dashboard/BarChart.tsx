"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IoBarChartSharp } from "react-icons/io5";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "Cars Processed",
        data: [5, 8, 12, 20, 35, 50, 60, 75, 90, 85, 70, 40],
        backgroundColor: "#82c9e5",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h2 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
        <IoBarChartSharp />
        Total Cars Processed Today
      </h2>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
