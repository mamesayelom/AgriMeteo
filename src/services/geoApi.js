// Fonction asynchrone qui récupère la région à partir des coordonnées GPS (latitude, longitude)
export async function getRegionFromCoordinates(lat, lon) {
    // Appel API vers OpenStreetMap (Nominatim)
    // On envoie la latitude et la longitude pour obtenir une adresse lisible
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  );
// On transforme la réponse HTTP en JSON exploitable
  const data = await res.json();

  // On récupère la partie "address" du résultat
  // Elle contient les infos comme pays, région, ville, etc.
  const address = data.address;

  // - address.state → retourne la région principale (ex: Dakar, Thiès)
  // - address.county → retourne le pays
  return address.state || address.county;
}