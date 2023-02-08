import React from 'react'
import { Button } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
        <Button size="lg" color="#111F5F" bgColor={"#CDC2A6"}>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>3</span>
        </Button>
    </div>
  )
}

export default CartWidget