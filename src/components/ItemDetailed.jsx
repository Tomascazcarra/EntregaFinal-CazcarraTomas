import React from 'react'
import { useEffect, useState } from 'react';
import { Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Button, Text, Image, Box, ButtonGroup } from '@chakra-ui/react';
import ItemCount from './ItemCount';



const ItemDetailed = ({data}) => {


  return (
<>
    <Center>
        <Card maxW='350px' className="card-main">
            <CardBody>
                <Image
                src="https://imgs.search.brave.com/58ctH-lh9uRGWwWrMgqs6kcU6kVbaMy5H43VYu9zkAw/rs:fit:818:694:1/g:ce/aHR0cHM6Ly93d3cu/aS1kZWNvcmFjaW9u/LmNvbS9VcGxvYWRz/L2ktZGVjb3JhY2lv/bi5jb20vSW1hZ2Vu/ZXNHcmFuZGVzL3Np/bGxhcy1kaXNlbm8t/bGEtb2NhLTAuanBn"
                
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color='#111F5F'>{data.name}</Heading>
                    <Text color='#111F5F' fontSize='15px'>
                        Descripcion: {data.description}
                    </Text>
                    <Text color='#111F5F' fontSize='20px'>
                        Stock: {data.stock}
                    </Text>
                </Stack>
            </CardBody>
                <Divider />
            <CardFooter className="card-footer">
                <ButtonGroup spacing='2'>
                    <ItemCount />
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Center>
</>
  )
}

export default ItemDetailed