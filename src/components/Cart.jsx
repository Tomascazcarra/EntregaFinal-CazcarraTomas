import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button,
    Divider,
    Container,
    Center, 
    Text, 
    Box,
    Heading
} from '@chakra-ui/react'


const Cart = () => {

return(
<>
    <Container className="cart-container">
        <Box p="0" w="350" h="50">
            <Heading size="sm" color={"#111F5F"}> Si desea finalizar la compra complete el siguiente formulario: </Heading>
        </Box>  
        <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
                <Input placeholder='Nombre' />
                <FormLabel>Email</FormLabel>
                <Input placeholder='Email' />
            <FormLabel>Pais de origen</FormLabel>
                <Select>
                    <option>Argentina</option>
                    <option>Resto del mundo</option>
                </Select>
                <Divider />

                <Center>
                    <Box p="1" w="350" h="50">
                        <Button as={Button} color="#111F5F" bgColor={"#CDC2A6"} type='submit'>
                            Finalizar
                        </Button>
                    </Box>
                </Center>     
        </FormControl>
    </Container>
</>
  );
};

export default Cart