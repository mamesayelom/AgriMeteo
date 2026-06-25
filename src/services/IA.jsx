import { useEffect, useState } from "react";

const cle_openrouter = import.meta.env.VITE_OPENROUTER_KEY; 

export function InterpretationIA({ temp, humidity, risk }) {
  const [interpretation, setInterpretation] = useState("");
  const [chargement, setChargement] = useState(false);

  useEffect(() => {
    setChargement(true);
    setInterpretation("");

    const fetchIA = async () => {
      const reponse = await fetch("https://openrouter.ai/api/v1/chat/completions", { 
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${cle_openrouter}`
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-8b-instruct",
          messages: [{ role: "user", content: `Température ${temp}°C, Humidité ${humidity}%, Risque ${risk.label} à ${risk.score}%. Donne une interprétation courte en 2 phrases.` 
}] 
        })
      });

      const res = await reponse.json();
      const data = res?.choices[0]?.message?.content; 
      setInterpretation(data);
      setChargement(false);
    };

    fetchIA(); 
    

  }, []); 

  return (
    <div>
      {chargement ? "Analyse en cours..." : interpretation}
    </div>
  );
}
