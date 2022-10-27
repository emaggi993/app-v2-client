// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  
  {
    title: 'Catálogo',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Carrito',
    path: '/dashboard/cart',
    icon: getIcon('eva:shopping-cart-outline'),
  },
  {
    title: 'Pedidos',
    path: '/dashboard/orders',
    icon: getIcon('eva:list-fill'),
  },
  
];

export default navConfig;
