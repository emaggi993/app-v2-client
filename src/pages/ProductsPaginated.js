import { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography, Pagination } from '@mui/material';
// components
import Swal from 'sweetalert2';
import Page from '../components/Page';
import { ProductSort, ProductList,  ProductFilterSidebar } from '../sections/@dashboard/products';

// mock
// import PRODUCTS from '../_mock/products';

import { getProductsPagination, getListaPrecio } from '../api/products.api';
import ExcelButton from '../components/ExcelButton';

// ----------------------------------------------------------------------

export default function ProductsPaginated() {
    
  const [openFilter, setOpenFilter] = useState(false);
  const [data, setData] = useState({})
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState('disponibilidad');
  const [filtro, setFiltro] = useState('general');
  const [listaPrecio, setListaPrecio] = useState([])
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };
  const handlerChangePage=(e, page)=>{
    setCurrentPage(page)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  const loadListaPrecios = async ()=>{
    await getListaPrecio().then(({data}) => {
      console.log("lista de precios", data)
      setListaPrecio(data);
    });
  }
  const loadProducts= async (page=1, orderBy='disponibilidad', category='general') => {
    Swal.showLoading()
    await getProductsPagination(page, orderBy, category).then(({data}) => {
        console.log(data)
        setData(data);
        setProducts(data.data); 
      });
    // console.log("data", data)
    Swal.close()
  };

  useEffect(() => {
    loadProducts(currentPage, orderBy, filtro)
    
  },[currentPage, orderBy, filtro]);
  useEffect(() => {
    loadListaPrecios()
  
    
  }, [])
  
  return (
    <Page title="Productos">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Productos
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ExcelButton data={listaPrecio} />
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
              setFiltro = {setFiltro}
            />
            <ProductSort setOrderBy= {setOrderBy }/>
          </Stack>
        </Stack>
        
        <ProductList products={products} />
        <Pagination style={{
        marginTop:"20px",
        display: "flex",
        justifyContent: "Center"
    }} onChange={(e, p)=>handlerChangePage(e, p)} page={currentPage} count={data.total} color="primary" />
        
      </Container>
    </Page>
  );
}
