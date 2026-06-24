import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
);

import { generateHistory } from "../utils/generateHistory";

function TemperatureChart({ currentTemp }) {

  const history = generateHistory(currentTemp);

  const data = {
    labels: history.map(h => h.day),
    datasets: [
      {
        label: "Température (°C)",
        data: history.map(h => h.temp),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
      }
    ]
  };

  const options = {
    //le graphique s’adapte automatiquement à la taille de l’écran
    responsive: true,
    maintainAspectRatio: false,
    //affiche ou cache le nom du dataset
    plugins: {
      legend: {
        display: false,
      },
    },
    //ça force l’axe Y à commencer à 0
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 my-5">
        <h1 className="font-bold mb-4">Évolution de la Température</h1>
    <div>
      <Line data={data} options={options} />
    </div>
    </div>

  );
}

export default TemperatureChart;