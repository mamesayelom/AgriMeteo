function Sidebar(){
    return(
        <div className="w-50 p-3" style={{ backgroundColor: "#2D5A16" }}>
            <div className="w-full flex flex-col gap-4 h-40">
                <div className="flex gap-2 items-center ">
                    <div style={{color:"#2D5A16"}} className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-50 font-bold text-green-500 text-sm ">AC</div>
                    <h1 className="text-white font-bold">AGRI <span style={{color:"#16A34A"}}>CLIMATE</span></h1>
                </div>
                <ul className="text-white font-bold">
                    <li><a href="">dashboard</a></li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar