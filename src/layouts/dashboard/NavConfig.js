// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  
  {
    title: 'productos',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  
];

export default navConfig;
