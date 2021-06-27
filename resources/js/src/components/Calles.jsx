import { useEffect, useState } from "react";
import { getData } from "../helper/getData";

const Calles = ({idCiudad}) => {

    const [calles, setCalles] = useState([]);
    const [showList, setShowList] = useState(false)

    useEffect(() => {
        getData( 'calle' )
            .then(calle=>setCalles(calle))
    }, [])
    
    return (
        <div className="container-sm mt-5">

            {
                idCiudad !== -1 && <h3>Calles: </h3>
            }       
                
            <div className="d-flex justify-content-center">
                <ul className="list-group w-75 ">
                {
                    calles.filter(c => c.cod_ciudad == idCiudad)
                    .map(calle => (
                        <li className="list-group-item" key={calle.id}>{calle.calle_nombre}</li>
                    ))
                }
                </ul>
            </div>

        </div>
    )
}

export default Calles
