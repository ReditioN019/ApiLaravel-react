import { useEffect, useState } from "react";
import { getData } from "../helper/getData";

const Regiones = ({setidRegion}) => {

    const [regiones, setRegiones] = useState([]);

    useEffect(() => {
        getData( 'region' )
            .then(region=>setRegiones(region));
    }, [])

    const handleId = (e) =>{
        const option = e.target.value;
        setidRegion(option); 
    }

    return (
        <>
            
            <label >Region:</label>
            <select 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-sm example" 
                onClick={handleId}
            >
               <option value={-1} >Escoge una Region</option>
               {
                    regiones.map(rg => (
                        <option 
                            key={rg.id} 
                            value={rg.id}
                            
                        >{rg.re_nombre}</option>
                    ))
               }
           </select>
           
        </>
    )
}

export default Regiones
