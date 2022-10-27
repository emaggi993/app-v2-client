import { useState, useContext, useEffect } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Badge, Button } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';
import { CartContext } from '../../../context/ContextCart';
import ItemCart from './ItemCart';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 },
}));

const CartStyle = styled('div')(({ theme }) => ({
  zIndex: 998,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  scrollBehavior: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: "#B9B9B9",
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.90 },
}));

// ----------------------------------------------------------------------

export default function CartWidget() {
  const [cartOpen, setCartOpen] = useState(false);
  const [productLength, setProductLength] = useState(0);
  const { cartItems , total} = useContext(CartContext);

  useEffect(() => {
    setProductLength(cartItems.reduce((previous, current) => previous + current.amount, 0));
  }, [cartItems]);
  
  return (
    <>
      <RootStyle>
        <Badge
          onClick={() => setCartOpen(!cartOpen)}
          badgeContent={!cartOpen ? productLength : 0}
          color="error"
          max={99}
        >
          <Iconify
            onClick={() => setCartOpen(!cartOpen)}
            icon={!cartOpen ? 'eva:shopping-cart-fill' : 'eva:close-fill'}
            width={24}
            height={24}
          />
        </Badge>
      </RootStyle>
      <CartStyle>
        {productLength === 0 && cartOpen && <div>No tiene productos</div>}
        {productLength !== 0 && cartOpen && (
          <div>
            {cartItems.map((item, i) => (
              <ItemCart cartItem={item} key={i} />
            ))}
            <div>Total: {total}</div>
          </div>
        )}
      </CartStyle>
    </>
  );
}
