//Ce composant React sert à afficher les informations météo d'une région sous forme de carte.
function WeatherCard({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

  function StatPill({ icon, label, value }) {
    return (
      <div className="bg-gray-50 p-3 rounded-xl text-center">
        
        <div className="text-xl">{icon}</div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-bold">{value}</p>
      </div>
    );
  }
 
  return (
    
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      
      <h1 className="font-bold mb-4">Conditions actuelles</h1>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-end gap-1">
            <span className="text-6xl font-bold text-gray-900 leading-none">{data.temp.toFixed(1)}</span>
            <span className="text-6xl font-bold text-gray-900 leading-none">°C</span>
          </div>
          <p className="text-sm text-gray-500 mt-1 capitalize">{data.description}</p>
        </div>
        {/*<span className="text-5xl">{icone}</span>*/}
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