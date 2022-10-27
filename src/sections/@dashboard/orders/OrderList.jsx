import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import OrderItem from './OrderItem';
import { UserContext } from '../../../context/ContextUser';
import { getAllOrdersByUser } from '../../../api/orders.api';

function OrderList() {
    const [orders, setOrders] = useState([])
    const {user} = useContext(UserContext)
    const loadOrders=  async ()=>{
        await getAllOrdersByUser(user).then(response => {
            setOrders(response.data)
            console.log(response)
        })
    }
    useEffect(()=>{
        loadOrders()
    },[] );
    return (
        <Box sx={{ width: 1 }}>
      <Stack direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
  spacing={1}
  >
      {orders.map((order)=>
      
      <OrderItem key={order.id} order={order}/>
      
      
      )}
      </Stack>
    </Box>
      );
}

export default OrderList

