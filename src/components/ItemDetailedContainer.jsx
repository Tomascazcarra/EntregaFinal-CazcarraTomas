import React, { useEffect, useState } from 'react';
import Data from "../data.json";
import ItemDetailed from './ItemDetailed';
import { useParams } from 'react-router-dom';


const ItemDetailedContainer = () => {
    const {id} = useParams();
    console.log(id);
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try {
                const response = await fetch(Data);
                const data = await response.json();
                setDatos(data);
            } catch(error){
            }
        }
        fetchData ();
    }, []);

    const datosFilter = Data.filter((datos) => datos.id === id);
    console.log(datosFilter)
  return (
    
    <ItemDetailed data={datosFilter[0]} /> 
   
    
  )
}

export default ItemDetailedContainer