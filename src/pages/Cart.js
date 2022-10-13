import { useState, useEffect, useContext } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// import CartList  from '../sections/@dashboard/cart/CartList';
import { ProductCartWidget } from '../sections/@dashboard/products';
import  CartList  from '../sections/@dashboard/cart/CartList';

function Cart() {
    return (
        <Page title="Carrito">
          <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Carrito
            </Typography>
            <ProductCartWidget/>
            <CartList/>
            
    
          </Container>
        </Page>
      );
}

export default Cart