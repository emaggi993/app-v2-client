import {useContext} from 'react'
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { UserContext } from '../../../context/ContextUser';
import './Orders.css'
import { fFloat } from '../../../utils/utils';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'rigth',
  position: 'relative',
  margin: 2,
  width: '100%',
  color: theme.palette.text.secondary,
}));


function OrderItem({order}) {
    const {user} = useContext(UserContext)
    const {details}= order
    const formatDate= (fecha)=>{
        const f = new Date(fecha)
        let dd = f.getDate()
        let mm = f.getMonth()+1; 
const yyyy = f.getFullYear();
        if(dd<10) 
{
    dd=`0${dd}`;
} 
if(mm<10) 
{
    mm=`0${mm}`;
}
const today = `${dd}/${mm}/${yyyy}`;
return today;
    }
  return (
    
    <Item>
      <div className='item-container'>

      <Typography variant="h6" gutterBottom>
      ID pedido: {order.id}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Fecha del pedido: {formatDate(order.fecha)}
      </Typography>
      <ul>
        {JSON.parse(details).map(
          item => (
            <li>{item.descripcion} x{item.amount}</li>
            )
            )}
      </ul>
      <div className={order.completed? 'item-status-completed': 'item-status-pending'}>{order.completed? 'completado': 'pendiente'}</div>
      <div className='item-total'>{fFloat( order.total)}</div>
            </div>
    </Item>
      
  )
}

export default OrderItem