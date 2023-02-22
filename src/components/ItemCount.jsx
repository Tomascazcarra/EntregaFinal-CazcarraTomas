import React from 'react'
import { useEffect, useState } from 'react';
import { Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Text, Image, Box, ButtonGroup, Link } from '@chakra-ui/react';

const ItemCount = ({data}) => {

    const [contador, setcontador] = useState(0);
    useEffect(() => {
    }, [contador]);

  return (
<>                
    <Center>
        <p>{contador}</p>
    </Center>
    <Center color='black'>
        <Button size="md" color="#111F5F" bgColor={"white"} onClick ={() => {
            setcontador(contador + 1);
            }}>
            +
        </Button> 
        <Link to={"/cart"}>
            <Button size="sm" color="#111F5F" bgColor={"#CDC2A6"} onClick ={() => {
                }}>
                Add to cart
            </Button>
        </Link>
        <Button size="md" color="#111F5F" bgColor={"white"} onClick ={() => {
            setcontador(contador - 1);
            }}>
            -
        </Button>
    </Center>
</>
  )
}

export default ItemCount