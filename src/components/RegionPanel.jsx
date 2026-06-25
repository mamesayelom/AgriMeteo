import { ApiMeteo } from "../services/OpenWeatherMap";
import WeatherCard from "./WeatherCard";
import TemperatureChart from "./TemperatureChart";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import {RiskGauge} from "./RiskGauge.jsx"
import {calculateRisk} from "../utils/AlgoFonction.jsx"
import { number } from "framer-motion";
import { InterpretationIA } from "./IA";

function RegionPanel({region}) {

// on récupère tout depuis useMeteo
  const { donneesmeteo, charge, erreur } = ApiMeteo(region);


   const weatherData = donneesmeteo && {
    temp: donneesmeteo.main.temp,
    humidity: donneesmeteo.main.humidity,
    pressure: donneesmeteo.main.pressure,
    wind: donneesmeteo.wind.speed,
    weatherId: donneesmeteo.weather[0].id,
    icon: donneesmeteo.weather[0].icon,
    description: donneesmeteo.weather[0].description
  };
  const risk = weatherData
    ? calculateRisk(weatherData.temp, weatherData.humidity)
    : null;

  //Gestion des erreurs et états de chargement
  if (charge && !donneesmeteo) {
    return <LoadingState />;
  }
  if (erreur) {
    return <ErrorState/>
  }

   

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold mb-5">{region}</h1>
     {donneesmeteo && (
      <>
      <WeatherCard data={weatherData}/>
      <RiskGauge
        risk={risk}
        temp={weatherData.temp}
        humidity={weatherData.humidity}
        interpretation={<InterpretationIA temp={weatherData.temp} humidity={weatherData.humidity} risk={risk} />} 
      />
      <TemperatureChart currentTemp={weatherData.temp}/>
      
      </>
      )}
     
    </div>
  );
}

export default RegionPanel