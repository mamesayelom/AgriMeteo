//Ce composant React sert à afficher les informations météo d'une région sous forme de carte.
function WeatherCard({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

  function StatPill({ icon, label, value }) {
    return (
      <div style={{backgroundColor: "#223a2f"}} className=" p-3 rounded-xl text-center">
        
        <div className="text-xl">{icon}</div>
        <p className="text-xs text-white">{label}</p>
        <p className="font-bold text-sm text-white">{value}</p>
      </div>
    );
  }
 
  return (
    
    <div className="bg-panel border rounded-2xl p-5 shadow-sm">
      <div style={{backgroundColor: "#223a2f"}} className="rounded-xl p-4 flex items-center justify-between mb-5">
        <div>
          <div className="flex items-end gap-1">
            <span className="text-6xl font-bold text-white leading-none">{data.temp.toFixed(1)}</span>
            <span className="text-6xl font-bold text-white leading-none">°C</span>
          </div>
          <p className="text-sm text-white mt-1 capitalize">{data.description}</p>
        </div>
        <img src={iconUrl} alt="weather icon" className="w-16 h-16" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <StatPill
          icon={<img src={`https://openweathermap.org/img/wn/09d.png`} className="w-8 h-8" />}
          label="Humidité"
          value={`${data.humidity}%`}
        />

        <StatPill
          icon={<img src={`https://openweathermap.org/img/wn/50d.png`} className="w-8 h-8" />}
          label="Vent"
          value={`${data.wind} km/h`}
        />

        <StatPill
          icon={<img src={`https://openweathermap.org/img/wn/01d.png`} className="w-8 h-8" />}
          label="Pression"
          value={`${data.pressure} hPa`}
        />
      </div>
    </div>
  );
}
export default WeatherCard