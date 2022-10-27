import { useState, useEffect, useContext } from 'react';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// import CartList  from '../sections/@dashboard/cart/CartList';
import { ProductCartWidget } from '../sections/@dashboard/products';
import  CartList  from '../sections/@dashboard/cart/CartList';
import {CartContext} from "../context/ContextCart"

function Cart() {
   const {confirmaCarrito,lenCartItems }= useContext(CartContext)
    return (
        <Page title="Carrito">
          <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Carrito
            </Typography>
            <ProductCartWidget/>
            <CartList/>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 1 }}>
            {lenCartItems() > 0 && <Button onClick={confirmaCarrito}>Confirmar</Button>}
            </Stack>
            
            
    
          </Container>
        </Page>
      );
}

export default Cart