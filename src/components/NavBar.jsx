import React from 'react'
import CartWidget from './CartWidget'
import {
    Center,
    Button,
    Flex, 
    Spacer,
    Box,
    Heading,
    Container,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Container maxW="150rem" bg="lightgrey"> 
            <Flex alignItems="center" gap="2">
                <Box p="10" w="300" h="100">
                    <Heading size="lg"> Sietes Muebles </Heading>
                </Box>
                <Spacer />
                <Box p="10" w="300" h="100">
                    <Menu>
                        <MenuButton as={Button} size="lg" colorScheme="green">Acciones</MenuButton>
                        <MenuList>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>Compras</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p="10" w="300" h="100">
                    <CartWidget />
                </Box>
            </Flex>
        </Container>
    </div>
  )
}

export default NavBar