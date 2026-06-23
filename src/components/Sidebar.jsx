function Sidebar(){
    return(
        <div className="w-50 bg-green-500 p-3">
            <div className="w-full flex flex-col justify-between h-40">
                <div className="flex gap-2 items-center">
                    <div className="flex justify-center items-center w-10 h-10 rounded-xl bg-amber-50 bold text-green-500">AC</div>
                    <h1 className="text-white">AGRI CLIMATE</h1>
                </div>
                <ul className="flex flex-col gap-2 text-white bold">
                    <li><a href="">dashboard</a></li>
                    <li><a href="">Carte météo</a></li>
                    <li><a href="">Analyse</a></li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar