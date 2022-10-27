import { useState, useEffect, useContext } from 'react';
// material
import { Button, Container, Stack, Typography } from '@mui/material';
import { ProductSort, ProductList,ProductCartWidget,  ProductFilterSidebar } from '../sections/@dashboard/products';
// components
import Page from '../components/Page';
import  OrderList  from '../sections/@dashboard/orders/OrderList';

function Order() {
  const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  
  const [orderBy, setOrderBy] = useState(null);
  const [filtro, setFiltro] = useState(null);

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
    return (
        <Page title="Pedidos">
          <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Pedidos Realizados
            </Typography>
            <ProductCartWidget/>
            
        
        <OrderList pedidos={[]} />
        
          </Container>
        </Page>
      );
}

export default Order