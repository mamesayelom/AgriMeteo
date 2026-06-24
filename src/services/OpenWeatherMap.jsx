 const la_cle = import.meta.env.VITE_OPENWATHER_KEY_API
 import { useEffect, useState } from "react";

 export function ApiMeteo(region) {
        //state
  const [donneesmeteo, setDonneesMeteo] = useState(null)
  const [charge, setCharge] = useState(false)
  const [erreur, setErreur] = useState(null)
 
 useEffect(() =>{
  
 if(!region) return; //si aucune region n est trouvée(au demarrage vue qu aucune region n est selectionnée)
  const fetchMeteo =async() =>{
    setCharge(true) //chargement
    try{
  
    //await attend la réponse de fetch
   const reponse = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${la_cle}&units=metric&lang=fr`)
   
     const data = await reponse.json()//convertir en format json
     
    
     setDonneesMeteo(data)//stockage dans le state
    }catch(e){
        setErreur("Impossible de charger la méteo")
    } finally{
     setCharge(false) //fini le chargement
    }

      
  }
  fetchMeteo()
  },[region]) 

  return {donneesmeteo, charge, erreur}
}