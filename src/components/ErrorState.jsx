function ErrorState() {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-center">
      <div className="text-3xl mb-3">⚠️</div>
      <p className="text-sm font-semibold text-red-700 mb-1">Données indisponibles</p>
      <p className="text-xs text-red-500 mb-4 leading-relaxed">
        Impossible de joindre l'API météo. Vérifiez votre connexion ou votre clé OpenWeatherMap.
      </p>
      <button className="text-xs font-semibold text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition">
        Réessayer
      </button>
    </div>
  );
}

export default ErrorState