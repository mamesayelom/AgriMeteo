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
         <div className="flex">
            <Sidebar/>
            <div className="flex-1 bg-slate-50 w-full box-border">
                <div className="p-5 bg-white mb-5 flex justify-between items-center">
                    <div className="lg:w-full w-65">
                        <h1 className="font-bold text-sm lg:text-2xl " style={{color:"#2D5A16"}}>Carte Climatique Interactive</h1>
                        <p className="text-slate-300 text-xs lg:text-sm" style={{color:"#2D5A16"}}>Visualisez les conditions météorologiques en temps réel par région</p>
                    </div>

                    {/* Burger visible seulement mobile */}
                    <button className="lg:hidden p-2 rounded-md shadow">
                        <Menu  color="#2D5A16"/>
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row  justify-center items-center overflow-hidden box-border gap-2">
                    <div className="flex shadow-sm items-center justify-center">
                        <div className="card card-border bg-base-100 w-80">
                            <div className="card-body">
                                <h2 className="card-title">Température nationale</h2>
                                <p>{charge ? "..." : stats ? `${stats.tempMoyenne}°C` : "--"}</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <div className="card card-border bg-base-100 w-80">
                            <div className="card-body">
                                <h2 className="card-title">Humidité moyenne</h2>
                                <p> {charge ? "..." : stats ? `${stats.humidMoyenne}%` : "--"}</p>
                            </div>
                        </div>

                    </div>
                     {/* <p> {charge ? "..." : stats ? `${stats.regionsARisque} / 14` : "--"}</p> */}
                    
                </div> 
                <Carte selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
                
                <AnimatePresence>
                {selectedRegion && (
                    
                <div key="panel-wrapper">
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
                className="fixed right-0 top-0 h-full w-100 lg:w-100 bg-white z-50 shadow-xl"
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
            

        </div>
        
        </>
    )
}

export default Dashboard