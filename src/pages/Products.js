import { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
// import PRODUCTS from '../_mock/products';

import { getAllProducts, getProductsPagination } from '../api/products.api';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([])
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const loadProducts= async (page=1) => {
    const {data}= await getProductsPagination(page);
    setProducts(data.data);
    console.log(data)
  };
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadProducts();
  });
  return (
    <Page title="Productos">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Productos
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={products} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
