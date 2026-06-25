import { useState, useEffect } from "react";
import { calculateRisk } from "../utils/AlgoFonction";

const la_cle = import.meta.env.VITE_OPENWEATHER_KEY;

const REGIONS = [
  "Dakar", "Thiès", "Diourbel", "Fatick", "Kaolack",
  "Kaffrine", "Saint-Louis", "Louga", "Matam", "Tambacounda",
  "Kédougou", "Kolda", "Ziguinchor", "Sédhiou"
];

export function useNationalStats() {
  const [stats, setStats] = useState(null);
  const [charge, setCharge] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setCharge(true);
      try {
        const resultats = await Promise.all(
          REGIONS.map(r =>
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r},SN&appid=${la_cle}&units=metric&lang=fr`)
              .then(res => res.json())
          )
        );

        const valides = resultats.filter(d => d.main);

        const tempMoyenne = valides.reduce((acc, d) => acc + d.main.temp, 0) / valides.length;
        const humidMoyenne = valides.reduce((acc, d) => acc + d.main.humidity, 0) / valides.length;
        const regionsARisque = valides.filter(d => {
          const risk = calculateRisk(d.main.temp, d.main.humidity);
          return risk.score >= 60;
        }).map(d => d.name);

        setStats({
          tempMoyenne: tempMoyenne.toFixed(1),
          humidMoyenne: humidMoyenne.toFixed(1),
          regionsARisque,
        });
      } catch (e) {
        console.error("Erreur stats nationales:", e);
      } finally {
        setCharge(false);
      }
    };

    fetchAll();
  }, []);

  return { stats, charge };
}