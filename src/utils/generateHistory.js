//Elle prend une température actuelle (ex: 32°C)
//et elle fabrique une fausse série de 7 jours autour de cette valeur
export const generateHistory = (currentTemp) => {
  // On crée un tableau vide qui va contenir les données des 7 jours
  const result = [];

  const jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  // On boucle 7 fois pour représenter J-7 jusqu'à J-1
  for (let i = 0; i < 7; i++) {

    // On génère une variation aléatoire entre -3°C et +3°C
    // pour simuler des variations météo naturelles
    const variation = Math.random() * 6 - 3;

    // On ajoute un objet représentant un jour dans le tableau
    result.push({
      day: jours[i],
       // - on part de la température actuelle
      // - on ajoute une variation aléatoire
      // - on arrondit à 2 chiffres après la virgule
      temp: Number((currentTemp + variation).toFixed(2))
    });
  }

  return result;
};