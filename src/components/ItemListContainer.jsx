import React from 'react'
import { Center, Heading } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
        <Center bg='green' h='50px' color='black'>
            <Heading size="md">{greeting}</Heading>
        </Center>
    </>
  )
}
export default ItemListContainer