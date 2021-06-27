import { useEffect, useState } from "react";
import Provincias from "./Provincias";
import Regiones from "./Regiones";
import Ciudades from "./Ciudades";
import Calles from "./Calles";

const Prueba = () => {
    
    const [idRegion, setidRegion] = useState(-1);
    const [idProvincia, setIdProvincia] = useState(-1);
    const [idCiudad, setIdCiudad] = useState(-1);


    return (
        <div className="container">
           <h1 className="text-center mb-5 mt-2">Mundo Pacífico</h1> 

           <div className="row">
               <div className="col">
                <Regiones 
                        setidRegion={setidRegion}
                    />
               </div>
                
                <div className="col">
                    <Provincias 
                        idRegion={idRegion} 
                        setIdProvincia={setIdProvincia}
                        setIdCiudad={setIdCiudad}
                    />
                </div>
                
                <div className="col">
                    <Ciudades 
                        idProvincia={idProvincia}
                        setIdCiudad={setIdCiudad}
                        idRegion={idRegion}
                    />
                </div>
              
              {(idRegion !=-1 && idProvincia !=-1 && idCiudad != -1) &&
                <Calles
                    idCiudad={idCiudad}
                />
              }
                
                    
                
           </div>

        </div>
    )
}

export default Prueba
