import React from 'react'
import CartWidget from './CartWidget'
import {
    Avatar,
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
    MenuItem
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Container maxW="150rem" bg="#111F5F"> 
            <Flex alignItems="center" gap="2">
                <Box p="2" w="300" h="70">
                        <Avatar name='siete' size="lg" src= "https://imgs.search.brave.com/hyGTN0IQ0EJlmXt527cqgZxRdtooj9tkC1CdtXlLzDI/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzE0NjMzMS9p/c29sYXRlZC9wcmV2/aWV3LzM0Yzc3NjNi/N2E5Zjc3ZTIyMTM1/M2Q3MTIyZmE3OWVj/LWJhcnJhLWRlLW9y/by1maWd1cmEtc2ll/dGUtcy0tbWJvbG8t/YnktdmV4ZWxzLnBu/Zw" />
                </Box>
                <Box p="1" w="300" h="30">
                    <Heading size="lg" color={"#CDC2A6"}> Siete Muebles </Heading>
                </Box>
                <Spacer />
                <Box p="10" w="300" h="100">
                    <Menu>
                        <MenuButton className="boton_menu" as={Button} size="lg" color="#111F5F" bgColor={"#CDC2A6"}>Acciones</MenuButton>
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