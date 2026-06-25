import { useEffect, useState } from "react";

const CLE_OPENROUTER = import.meta.env.VITE_OPENROUTER_KEY;

export function InterpretationIA({ temp, humidity, risk }) {
  const [interpretation, setInterpretation] = useState("");
  const [chargement, setChargement] = useState(false);

  useEffect(() => {
    if (!temp || !humidity || !risk) return;

    setChargement(true);
    setInterpretation("");

    const fetchIA = async () => {
      try {
        const reponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${CLE_OPENROUTER}`,
           
          },
          body: JSON.stringify({
            model: "meta-llama/llama-3-8b-instruct",
            messages: [{
              role: "user",
              content: `Température ${temp}°C, Humidité ${humidity}%, Risque ${risk.label} à ${risk.score}%. Donne une interprétation courte en 2 phrases.`
            }]
          })
        });

        const res = await reponse.json();
        const data = res.choices[0].message.content;
        setInterpretation(data);
        setChargement(false);
      } catch (e) {
        console.error("ERREUR:", e);
        setInterpretation("Impossible de charger l'interprétation.");
        setChargement(false);
      }
    };

    fetchIA();
  }, [temp, humidity, risk?.label, risk?.score]);

  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-xl text-sm text-gray-700">
      {chargement ? "Analyse en cours..." : interpretation}
    </div>
  );
}