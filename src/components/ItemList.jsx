import React from 'react';
import { Container, Flex, Stack } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({data}) => {
  return (
    <>
    <Stack direction='row'>
    <Container maxW="container.sm" className="main-catalogue">
        {data?.map((datos) => (
        <Item 
            key={datos.id}
            id={datos.id}
            name={datos.name}
            description={datos.description}
            price={datos.price}
            stock={datos.stock}
            category={datos.category}
        />
        ))}
    </Container>
    </Stack>
    </>
  );
};



export default ItemList