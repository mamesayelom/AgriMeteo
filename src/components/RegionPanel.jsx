import { ApiMeteo } from "../services/OpenWeatherMap";
import WeatherCard from "./WeatherCard";
import TemperatureChart from "./TemperatureChart";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import {RiskGauge} from "./RiskGauge.jsx"
import {calculateRisk} from "../utils/AlgoFonction.jsx"
import { number } from "framer-motion";
import { InterpretationIA } from "./IA";
import { X } from "lucide-react";

function RegionPanel({region, closePanel}) {

// on récupère tout depuis useMeteo
  const { donneesmeteo, charge, erreur } = ApiMeteo(region);
  
  //Gestion des erreurs et états de chargement
  if (charge && !donneesmeteo) {
    return <LoadingState />;
  }
  if (erreur) {
    return <ErrorState/>
  }

   const weatherData = donneesmeteo ? {
    temp: donneesmeteo.main.temp,
    humidity: donneesmeteo.main.humidity,
    pressure: donneesmeteo.main.pressure,
    wind: donneesmeteo.wind.speed,
    weatherId: donneesmeteo.weather[0].id,
    icon: donneesmeteo.weather[0].icon,
    description: donneesmeteo.weather[0].description
  }:null;

  const risk = weatherData
    ? calculateRisk(weatherData.temp, weatherData.humidity)
    : null;

  return (
    <div className="relative p-4 h-full overflow-y-auto">
      <div
        className="relative rounded-2xl overflow-hidden mb-5 h-32 flex items-end p-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <span className="absolute top-5 right-5 cursor-pointer z-50" onClick={closePanel}><X color="white" /></span>
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative z-10 text-2xl font-bold text-white">{region}</h1>
      </div>

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