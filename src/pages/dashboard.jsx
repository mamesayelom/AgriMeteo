import { useEffect, useState } from "react";
import LocationPopup from "../components/LocationPopup";

import { motion, AnimatePresence } from "framer-motion";
import Carte from "../components/carte"
import Sidebar from "../components/Sidebar"
import RegionPanel from "../components/RegionPanel"

function Dashboard(){
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [showLocationPopup,setShowLocationPopup] = useState(false);

    useEffect(()=>{

    const alreadyAsked = localStorage.getItem("locationAsked");

    if(!alreadyAsked){
        setShowLocationPopup(true);
    }

    },[]);

    //// Fonction asynchrone qui récupère la région à partir des coordonnées GPS (latitude, longitude)
    async function getRegionFromCoordinates(lat, lon) {

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
    console.log("adresse: ",address);
    

    // - address.state → retourne la région principale (ex: Dakar, Thiès)
    // - address.county → retourne le pays
    return address.state || address.county;
    }

    // Fonction déclenchée quand l'utilisateur accepte ou autorise la localisation GPS
    const allowLocation = () => {

        // (évite de redemander à chaque chargement de la page)
        localStorage.setItem("locationAsked","true");

        // On ferme le popup de demande de localisation
        setShowLocationPopup(false);

        // On demande la position GPS de l'utilisateur
        navigator.geolocation.getCurrentPosition(

           // CAS 1 : si l'utilisateur accepte et que la position est récupérée
           async (pos)=>{

                // On extrait la latitude et la longitude fournies par le navigateur
                const {latitude, longitude} = pos.coords;


                console.log(latitude, longitude);


                // On convertit les coordonnées GPS en région (appel API reverse geocoding)
                const region = await getRegionFromCoordinates(
                    latitude,
                    longitude
                );

                console.log(region)

                // On stocke la région sélectionnée dans l'état React
                setSelectedRegion(region);

            },

            // CAS 2 : si l'utilisateur refuse la localisation OU s'il y a une erreur
            ()=>{

                // On définit une région par défaut (Dakar)
                setSelectedRegion("dakar");

            }

        );


    };



    const refuseLocation = () => {

        localStorage.setItem("locationAsked","true");

        setShowLocationPopup(false);


        // région par défaut
        setSelectedRegion("dakar");

    };

    return(
        <>
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 bg-slate-50 w-full p-5 box-border">
                <div className="flex justify-between items-center overflow-hidden box-border gap-2">
                    <div className="flex items-center justify-center">
                        <div className="card card-border bg-base-100 w-90">
                            <div className="card-body">
                                <h2 className="card-title">Température nationale</h2>
                                <p>A card component has a figur</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <div className="card card-border bg-base-100 w-90">
                            <div className="card-body">
                                <h2 className="card-title">Humidité moyenne</h2>
                                <p>A card component has a figure</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <div className="card card-border bg-base-100 w-90">
                            <div className="card-body">
                                <h2 className="card-title">Régions à risque</h2>
                                <p>A card component has a figure</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Carte selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
                {selectedRegion && (
                <>
                {/* BACKDROP (overlay sombre) */}
                <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                onClick={() => setSelectedRegion(null)}
                />

                {/* PANEL */}
                <motion.div
                className="fixed right-0 top-0 h-full w-200 bg-white z-50 shadow-xl"
                initial={{x:"100%"}}
                animate={{x:0}}
                exit={{x:"100%"}}
                transition={{duration:0.2}}
                >
                <RegionPanel region={selectedRegion}/>
                </motion.div>
                </>
                )}
                {/* BACKDROP (overlay sombre) */}
                {showLocationPopup && (

                <LocationPopup
                onAccept={allowLocation}
                onReject={refuseLocation}
                />

                )}
            </div>
            

        </div>
        
        </>
    )
}

export default Dashboard