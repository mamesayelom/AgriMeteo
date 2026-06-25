export function calculateRisk(temp, humidity) {
  let score = 0;

  // température
  if (temp >= 40) score += 50;
  else if (temp >= 38) score += 40;
  else if (temp >= 35) score += 25;
  else if (temp >= 30) score += 10;

  // humidité
  if (humidity >= 80) score += 40;
  else if (humidity >= 60) score += 25;
  else if (humidity >= 40) score += 10;

  // effet canicule (interaction)
  if (temp > 38 && humidity > 60) {
    score = Math.min(100, score + 20);
  }

  score = Math.min(100, score);

  let label = "";
  let color = "";
  let bg = "";
  let border = "";
  let tailwind = "";

  if (score >= 80) {
    label = "Risque Canicule Élevé";
    color = "#FF4500";
    bg = "bg-red-50";
    border = "border-red-300";
    tailwind = "text-red-600";
  } else if (score >= 50) {
    label = "Risque Modéré";
    color = "#FFA500";
    bg = "bg-orange-50";
    border = "border-orange-300";
    tailwind = "text-orange-600";
  } else {
    label = "Risque Faible";
    color = "#2ECC71";
    bg = "bg-green-50";
    border = "border-green-300";
    tailwind = "text-green-600";
  }

  return {
    score,
    label,
    color,
    bg,
    border,
    tailwind,
  };
}