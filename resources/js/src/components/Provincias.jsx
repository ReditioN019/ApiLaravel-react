import { useState, useEffect } from "react";
import { getData } from "../helper/getData";

const Provincias = ({idRegion,setIdProvincia}) => {

    const [provincias, setPronvincias] = useState([]);

    useEffect(() => {
        getData( 'provincia' )
            .then(provincia=>setPronvincias(provincia))
    }, []);

    const handleId = (e) =>{
        const option = e.target.value;
        setIdProvincia(option);
        
    }

    return (
        <>
            
            <label>Provincia:</label>
            <select 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-sm example" 
                onClick={handleId}
            >
                <option value={-1} >Escoge una Provincia</option>
                {   
                    provincias.filter(prov => prov.cod_region == idRegion)
                    .map(prov => (
                        <option 
                            key={prov.id} 
                            value={prov.id}
                            
                        >{prov.pro_nombre}</option>
                    ))
                }
            </select>
        </>
    )
}

export default Provincias
