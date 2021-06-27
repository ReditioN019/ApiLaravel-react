import { useEffect, useState } from "react";
import { getData } from "../helper/getData";

const Ciudades = ({idRegion, idProvincia, setIdCiudad}) => {

    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        getData( 'ciudad' )
            .then(ciudad=>setCiudades(ciudad))
    }, []);

    const handleId = (e) =>{
        const option = e.target.value;
        setIdCiudad(option);
    }

    return (
        <>

            <label htmlFor="">Ciudad:</label>
            <select 
                className="form-select form-select-lg mb-3" 
                aria-label=".form-select-sm example" 
                onClick={handleId}
            >
               <option value={-1} >Escoge una ciudad</option>
               {
                   ciudades.filter(ciu => ciu.cod_provincia == idProvincia)
                   .map(ciudad => (
                       <option key={ciudad.id} value={ciudad.id}>{ciudad.ciu_nombre}</option>
                   ))
               }
           </select>
            
        </>
    )
}

export default Ciudades
