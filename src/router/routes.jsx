import { LoginPage } from '../pages/LoginPage.jsx';
import { SignupPage } from '../pages/SignupPage.jsx';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { Navigate } from 'react-router-dom';
import { OptionalAuthRoute } from './OptionalAuthRoute';
import { CartPage } from '../pages/CartPage/CartPage';
import { PublicationsPage } from '../pages/PublicationsPage/PublicationsPage';
import { TransactionsPage } from '../pages/TransactionsPage/TransactionsPage';
import { KycPage } from '../pages/KycPage/KycPage';
import { OneProductPage } from '../pages/ProductsPage/OneProductPage.jsx';
import { AdminPage } from '../pages/AdminPage/AdminPage';
import { EditProfilePage } from '../pages/ProfilePage/EditProfilePage.jsx';
import { ManagementPage } from '../pages/ManagementPage/ManagementPage';
import { UserManagementPage } from '../pages/ManagementPage/UserManagementPage';
import { ModifyProductPage } from '../pages/ProductsPage/ModifyProductPage';
import { CreateProductPage } from '../pages/ProductsPage/CreateProductPage';

export default [
  {
    path: '/',
    element: <Navigate to="/productos"></Navigate>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/profile',
    element: (
      <OptionalAuthRoute>
        <ProfilePage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/productos',
    element: (
      <OptionalAuthRoute>
        <ProductsPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/productos/:id',
    element: (
      <OptionalAuthRoute>
        <OneProductPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/carrito',
    element: (
      <OptionalAuthRoute>
        <CartPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/publicaciones',
    element: (
      <OptionalAuthRoute>
        <PublicationsPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/compras',
    element: (
      <OptionalAuthRoute>
        <TransactionsPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/kyc',
    element: (
      <OptionalAuthRoute>
        <KycPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/admin',
    element: (
      <OptionalAuthRoute>
        <AdminPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/profileEdition',
    element: (
      <OptionalAuthRoute>
        <EditProfilePage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/gestionar',
    element: (
      <OptionalAuthRoute>
        <ManagementPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/gestionar/usuarios',
    element: (
      <OptionalAuthRoute>
        <UserManagementPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/publicaciones/:id',
    element: (
      <OptionalAuthRoute>
        <ModifyProductPage />
      </OptionalAuthRoute>
    ),
  },
  {
    path: '/crear',
    element: (
      <OptionalAuthRoute>
        <CreateProductPage />
      </OptionalAuthRoute>
    ),
  },
];
