import { useEffect, useState } from "react";
import { ApiMeteo } from "../services/OpenWeatherMap";
import {RiskGauge} from "./RiskGauge.jsx"
import {calculateRisk} from "./AlgoFonction.jsx"

function RegionPanel({region}) {
// on récupère tout depuis useMeteo
  const { donneesmeteo, charge, erreur } = ApiMeteo(region);
 const temp = Number(donneesmeteo?.main?.temp)
  const humidity = Number(donneesmeteo?.main?.humidity)
const risk = calculateRisk(temp, humidity);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{region}</h2>
     {charge && <p>Chargement.....</p>}
     {erreur && <p>{erreur}</p>}
     {donneesmeteo && (
      <>
      <p>Température: {temp}°C</p>
      <p>Humidité: {humidity}%</p>
      <RiskGauge
        risk={risk}
        temp={temp}
        humidity={humidity}
      />

     
      </>
 ) }
    </div>
  );
}

export default RegionPanel