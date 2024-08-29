import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart = () => {
  const data = {
    labels: [
      "Abril",
      "Maio",
      "Junho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
      "Janeiro",
      "Fevereiro",
      "Março",
    ],
    datasets: [
      {
        label: "Número de Doações nos ultimos 12 meses",
        data: [12, 19, 3, 5, 2, 3, 15, 18, 12, 40, 22, 12],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Tendência de Doações dos Ultímos 12 meses",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
