import { useEffect, useState } from "react";
import LocationPopup from "../components/LocationPopup";
import { motion, AnimatePresence } from "framer-motion";
import Carte from "../components/carte"
import Sidebar from "../components/Sidebar"
import RegionPanel from "../components/RegionPanel"
import { useGeolocation } from "../hooks/useGeolocation";
import { isLocationAsked, setLocationAsked } from "../utils/storage";
import { useNationalStats } from "../hooks/UseNationalStats";
//Une bibliothèque d'icônes appelée Lucide React, elle fournit des icônes prêtes à l'emploi
import { Menu, X } from "lucide-react";

function Dashboard(){
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [showLocationPopup,setShowLocationPopup] = useState(false);
     const { stats, charge } = useNationalStats();
    //Créer region
    //Créer getLocation
    //Retourner les deux
    const { region, getLocation } = useGeolocation();

    useEffect(() => {
    if (region) {
      setSelectedRegion(region);
    }
    }, [region]);

    useEffect(()=>{

    if(!isLocationAsked()){
        setShowLocationPopup(true);
    }

    },[]);

    // Fonction déclenchée quand l'utilisateur accepte ou autorise la localisation GPS
    const allowLocation = () => {
    setLocationAsked();
    setShowLocationPopup(false);
    getLocation();
    };

    const refuseLocation = () => {
    setLocationAsked();
    setShowLocationPopup(false);
    setSelectedRegion("dakar");
  };

    return(
        <>
        
         
            <div style={{backgroundColor: "#10201b"}} className=" w-full box-border">
               
                <div className="py-5 pl-7 flex flex-col lg:flex-row items-center overflow-hidden box-border gap-2">
                    <div className="flex shadow-sm items-center justify-center">
                        <div style={{width: 316}} className="card bg-base-100">
                            <div className="bg-panel border card-body">
                                <h2 className="text-white text-[11px] tracking-[0.08em] uppercase text-[var(--sand-dim)] font-['IBM_Plex_Mono'] font-mono">Température nationale</h2>
                                <p style={{color: "#e38a54", fontSize: 30, fontWeight:"600"}}>{charge ? "..." : stats ? `${stats.tempMoyenne}°C` : "--"}</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <div style={{width: 316}} className="card bg-base-100">
                            <div className="bg-panel border card-body">
                                <h2 className=" text-white text-[11px] tracking-[0.08em] uppercase text-[var(--sand-dim)] font-['IBM_Plex_Mono'] font-mono">Humidité moyenne</h2>
                                <p style={{color: "#6fa3a0", fontSize: 30, fontWeight:"600"}}> {charge ? "..." : stats ? `${stats.humidMoyenne}%` : "--"}</p>
                            </div>
                        </div>

                    </div>
                     {/* <p> {charge ? "..." : stats ? `${stats.regionsARisque} / 14` : "--"}</p> */}
                    
                </div> 
                
                <Carte selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
                
                <AnimatePresence>
                { (
                    
                <div key="panel-wrapper">
                {/* BACKDROP (overlay sombre) */}
                <motion.div
                //className="fixed inset-0 bg-black/40 z-40"
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                onClick={() => setSelectedRegion(null)}
                />

                {/* PANEL */}
                <motion.div
                className="fixed right-0 top-0 h-full w-100 lg:w-150 bg-night z-50 shadow-xl"
                initial={{x:"100%"}}
                animate={{x:0}}
                exit={{x:"100%"}}
                transition={{duration:0.2}}
                >
                <RegionPanel closePanel={() => setSelectedRegion(null)} region={selectedRegion}/>
                </motion.div>
                </div>
                )}
                </AnimatePresence>
                

                {/* BACKDROP (overlay sombre) */}
                {showLocationPopup && (

                <LocationPopup
                onAccept={allowLocation}
                onReject={refuseLocation}
                />

                )}
            </div>
        
        </>
    )
}

export default Dashboard