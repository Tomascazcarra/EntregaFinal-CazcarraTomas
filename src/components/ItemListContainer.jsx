import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import Data from "../data.json";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {

  const {category} = useParams();
  const [datos, setDatos] = useState([]);

  console.log(category);
  
  useEffect(() => {
      async function fetchData(){
          try {
              const response = await fetch(Data);
              const data = await response.json();
              console.log(data)
              setDatos(data);
          }
          catch(error) {
          }
      }
      fetchData();
  }, []);

const catFilter = Data.filter((datos) => datos.category === category);

return (
  <>
    
    {category ? <ItemList data={catFilter} /> : <ItemList data={Data} />};

  </>
  );
};

export default ItemListContainer
