export  function RiskGauge({ risk, temp, humidity, interpretation}) {
  const circumference = 2 * Math.PI * 30; // r=30
 
  return (
    <div className={`rounded-2xl p-5 mt-5 shadow-sm border ${risk.bg} ${risk.border}`}>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Indice de risque climatique
      </p>
      <div className="flex items-center gap-4 mb-4">
        <svg width="72" height="72" viewBox="0 0 72 72" className="flex-shrink-0">
          <circle cx="36" cy="36" r="30" fill="none" stroke="#e5e7eb" strokeWidth="6" />
          <circle
            cx="36" cy="36" r="30"
            fill="none"
            stroke={risk.color}
            strokeWidth="6"
            strokeDasharray={`${(risk.score / 100) * circumference} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(-90 36 36)"
            style={{ transition: "stroke-dasharray .6s ease" }}
          />
          <text x="36" y="41" textAnchor="middle" fontSize="15" fontWeight="700" fill={risk.color}>
            {risk.score}%
          </text>
        </svg>
        <div>
          <p className={`text-base font-bold ${risk.tailwind}`}>{risk.label}</p>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Température {temp.toFixed(1)}°C · Humidité {humidity}%
          </p>
        </div>
      </div>
 
      {/* <div className="bg-white/60 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${risk.score}%`, backgroundColor: risk.color }}
        />
      </div> */}
      {/* <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        <span>0 — Optimal</span>
        <span>100 — Critique</span>
      </div> */}
      {/* <button className="mt-3 text-xs font-semibold underline underline-offset-2" style={{ color: risk.color }}>
        Voir les détails →
      </button> */}
        {interpretation && (
        <div className="border-t border-gray-200/60 pt-3 mt-1 text-sm text-gray-600 italic">
          {interpretation}
        </div>
      )}
    </div>
  );
}

