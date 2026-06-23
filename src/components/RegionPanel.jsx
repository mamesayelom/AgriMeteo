function RegionPanel({region}) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{region}</h2>

      {/* ici API météo */}
      <p>Température: ...</p>
      <p>Humidité: ...</p>
    </div>
  );
}

export default RegionPanel