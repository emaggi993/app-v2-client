import { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography, Pagination } from '@mui/material';
// components
import Swal from 'sweetalert2';
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';

// mock
// import PRODUCTS from '../_mock/products';

import { getProductsPagination } from '../api/products.api';

// ----------------------------------------------------------------------

export default function ProductsPaginated() {
    
  const [openFilter, setOpenFilter] = useState(false);
  const [data, setData] = useState({})
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handlerChangePage=(e, page)=>{
    setCurrentPage(page)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const loadProducts= async (page=1) => {
    Swal.showLoading()
    await getProductsPagination(page).then(({data}) => {
        console.log(data)
        setData(data);
        setProducts(data.data); 
      });
    // console.log("data", data)
    Swal.close()
  };

  useEffect(() => {
    loadProducts(currentPage)
    
  },[currentPage]);
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
        <Pagination onChange={(e, p)=>handlerChangePage(e, p)} page={currentPage} count={data.total} color="primary" />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
