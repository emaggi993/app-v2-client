import { Navigate, useRoutes, Routes, Route } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Order from './pages/Orders';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Products from './pages/ProductsPaginated';
import Cart from './pages/Cart';
import { ProtectedRoute } from './components/ProtectedRoute';

// ----------------------------------------------------------------------

export default function Router() {
  return (
    <Routes>
        <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Order />} />
        </Route>
        </Route>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<LogoOnlyLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export function RouterBk() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'products', element: <Products /> },
        { path: 'cart', element: <Cart /> },
        { path: 'orders', element: <Order /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/products" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
