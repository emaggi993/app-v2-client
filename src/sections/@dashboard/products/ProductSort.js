import { useState } from 'react';
// material
import { Menu, Button, MenuItem, Typography } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  {value: 'disponibilidad', label:'disponible-agotado'},
  { value: 'priceDesc', label: 'Precio: Alto-Bajo' },
  { value: 'priceAsc', label: 'Precio: Bajo-Alto' },
];

export default function ShopProductSort() {
  const [open, setOpen] = useState(null);
  const [orderBy, setOrderBy] = useState('disponibilidad');


  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (option) => {
    // const {valor} = event.currentTarget.dataset;
    console.log(option)
    setOrderBy(option)
    setOrderBy('disponibilidad');
    setOpen(null);
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Ord. por:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Disponible - Agotado
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === 'disponibilidad'}
            onClick={()=>handleClose(option.value)}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
