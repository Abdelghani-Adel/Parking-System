import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";
import { BsFillPieChartFill } from "react-icons/bs";
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Cash", "Card"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 5000],
        backgroundColor: ["#82c9e5", "#36527a"],
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <>
      <h2 className="text-lg font-bold mb-3 text-accent flex items-center gap-2">
        <BsFillPieChartFill />
        Revenue Type
      </h2>
      <Pie data={data} options={options} />
    </>
  );
};

export default PieChart;
