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
        borderColor: "rgb(227, 178, 61)",
        backgroundColor: "rgba(227, 178, 61, 0.1)",
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
    <div className="bg-panel rounded-2xl p-5 shadow-sm my-5">
        <h1 className="text-white font-bold mb-4">Évolution de la Température</h1>
    <div>
      <Line data={data} options={options} />
    </div>
    </div>

  );
}

export default TemperatureChart;