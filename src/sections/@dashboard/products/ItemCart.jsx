import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { CartContext } from '../../../context/ContextCart';

function ItemCart({cartItem}) {
  const { addItemsToCart, deleteItemToCart} = useContext(CartContext)
  return (
    <>
    <div>{cartItem.descripcion}</div>
    <div>{cartItem.amount}</div>
    <Button onClick={()=>addItemsToCart(cartItem)}>add</Button>
    <Button onClick={()=>deleteItemToCart(cartItem)}>Eliminar</Button>
    </>
  )
}

export default ItemCart;