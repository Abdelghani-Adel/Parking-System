"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PeakHoursTraffic = () => {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "Entries",
        data: [
          5, 2, 3, 6, 8, 15, 40, 60, 75, 100, 120, 130, 140, 150, 130, 110, 100,
          95, 80, 60, 50, 30, 15, 8,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderRadius: 5,
      },
      {
        label: "Exits",
        data: [
          4, 1, 2, 5, 6, 12, 35, 50, 70, 95, 110, 125, 135, 140, 120, 100, 90,
          85, 75, 55, 45, 25, 12, 6,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Peak Hours Traffic",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PeakHoursTraffic;
