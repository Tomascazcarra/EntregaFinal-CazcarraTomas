import React from 'react'
import { Center, Heading } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
        <Center bg='#CDC2A6' h='50px' color='black'>
            <Heading size="md" color={"#111F5F"}>{greeting}</Heading>
        </Center>
    </>
  )
}
export default ItemListContainer