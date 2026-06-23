import { useEffect, useState } from "react";
import { ApiMeteo } from "../services/OpenWeatherMap";

function RegionPanel({region}) {
// on récupère tout depuis useMeteo
  const { donneesmeteo, charge, erreur } = ApiMeteo(region);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{region}</h2>
     {charge && <p>Chargement.....</p>}
     {erreur && <p>{erreur}</p>}
     {donneesmeteo && (
      <>
      <p>Température: {donneesmeteo?.main?.temp}°C</p>
      <p>Humidité: {donneesmeteo?.main?.humidity}</p>
      </>
 ) }
    </div>
  );
}

export default RegionPanel