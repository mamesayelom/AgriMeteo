//Ce composant React sert à afficher les informations météo d'une région sous forme de carte.
function WeatherCard({ data }) {
  const ICONS = { 800: "☀️", 801: "🌤️", 802: "⛅", default: "🌥️" };
  const icon = ICONS[data.weatherId] ?? ICONS.default;
 
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Conditions actuelles
      </p>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="flex items-end gap-1">
            <span className="text-6xl font-bold text-gray-900 leading-none">{data.temp.toFixed(1)}</span>
            <span className="text-2xl font-light text-gray-400 mb-1">°C</span>
          </div>
          <p className="text-sm text-gray-500 mt-1 capitalize">{data.description}</p>
        </div>
        <span className="text-5xl">{icon}</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <StatPill icon="💧" label="Humidité" value={`${data.humidity}%`} />
        <StatPill icon="🌬️" label="Vent"     value={`${data.wind} km/h`} />
        <StatPill icon="📊" label="Pression" value={`${data.pressure} hPa`} />
      </div>
    </div>
  );
}
export default WeatherCard