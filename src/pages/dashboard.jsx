import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carte from "../components/carte"
import Sidebar from "../components/Sidebar"
import RegionPanel from "../components/RegionPanel"
function Dashboard(){
    const [selectedRegion, setSelectedRegion] = useState(null);
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
                className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-xl"
                initial={{x:"100%"}}
                animate={{x:0}}
                exit={{x:"100%"}}
                transition={{duration:0.2}}
                >
                <RegionPanel region={selectedRegion}/>
                </motion.div>
                </>
                )}
            </div>
            

        </div>
        
        </>
    )
}

export default Dashboard