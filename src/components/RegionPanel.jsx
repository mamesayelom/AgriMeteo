import { ApiMeteo } from "../services/OpenWeatherMap";
import WeatherCard from "./WeatherCard";
import TemperatureChart from "./TemperatureChart";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
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
      <TemperatureChart currentTemp={weatherData.temp} />
      </>
      )}
     
    </div>
  );
}

export default RegionPanel