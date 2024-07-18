import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Brands from './components/Brands/Brands';
import Notfound from './components/Notfound/Notfound';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import UseerContextProvider from './Context/UseerContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetalis from './components/ProductDetails/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import WishListContextProvider from './Context/WishListContext';
import WishList from './components/WishList/WishList';
import Adress from './components/Adress/Adress';
import UserInfo from './components/UserInfo/UserInfo';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Profile from './components/Profile/Profile';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/orders/orders';

let query = new QueryClient();

let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'wishlist', element: <ProtectedRoute>< WishList /></ProtectedRoute> },
      {
        path: 'profile', element: <ProtectedRoute>< Profile /></ProtectedRoute>, children: [
          { index: true, element: <UserInfo /> },
          { path: 'changepassword', element: <ChangePassword /> },
          { path: 'adress', element: <Adress /> },
          // { path: '', element:< />},
        ]
      },
      { path: 'products', element: <ProtectedRoute>< Products /></ProtectedRoute> },
      { path: 'productdetails/:id/:category', element: <ProtectedRoute>< ProductDetalis /></ProtectedRoute> },
      { path: 'chechout', element: <ProtectedRoute>< Checkout /></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute>< Orders /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: < Register /> },
      { path: '*', element: < Notfound /> },
    ]
  }
])






function App() {

  return (
    <WishListContextProvider>
      <CartContextProvider>
        <QueryClientProvider client={query}>
          <UseerContextProvider>
            <RouterProvider router={x}></RouterProvider>
            <Toaster />
            <ReactQueryDevtools />
          </UseerContextProvider>
        </QueryClientProvider>
      </CartContextProvider>
    </WishListContextProvider>)
}

export default App
