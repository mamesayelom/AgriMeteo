import { useState } from "react";
import { getRegionFromCoordinates } from "../services/geoApi";

export function useGeolocation() {
  const [region, setRegion] = useState(null);

  const getLocation = () => {
    // On demande la position GPS de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      // CAS 1 : si l'utilisateur accepte et que la position est récupérée
      async (pos) => {
        // On extrait la latitude et la longitude fournies par le navigateur
        const { latitude, longitude } = pos.coords;

        // On convertit les coordonnées GPS en région (appel API reverse geocoding)
        const regionName = await getRegionFromCoordinates(latitude, longitude);

        // On stocke la position GPS
        setRegion(regionName);
      },

      // CAS 2 : si l'utilisateur refuse la localisation OU s'il y a une erreur
      () => {
        // On définit une région par défaut (Dakar)
        setRegion("dakar");
      }
    );
  };

  return { region, setRegion, getLocation };
}