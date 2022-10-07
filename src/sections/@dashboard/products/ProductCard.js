import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
// material
import { Box, Card, Link, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import { fFloat, fRenderImageBlob } from '../../../utils/utils';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';
import { CartContext } from '../../../context/ContextCart';


// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { descripcion, precio, colors, status, existencia } = product;
  const blobImagen = product.blob_imagen;
  const { addItemsToCart } =  useContext(CartContext)
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={descripcion} src={fRenderImageBlob(blobImagen)} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {descripcion}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: (existencia==='disponible') ?"green":'red',
                textDecoration: (existencia==='disponible') ?"":'line-through',
              }}
            >
              {existencia}
            </Typography>
            &nbsp;
            {fFloat(precio)}
          </Typography>
          <Button onClick={()=> addItemsToCart(product)}>🛒</Button>
        </Stack>
      </Stack>
    </Card>
  );
}
