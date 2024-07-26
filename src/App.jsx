import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';
import ShoppingCart from './components/ShoppingCart';
import { ProductProvider } from './components/ProductContext';
import { UserProvider, UserContext } from './components/UserContext';
import { ShoppingCartContext, ShoppingCartProvider } from './components/ShoppingCartContext';
import Choices from './components/Choices';
import { WishListProvider } from './components/WishListContext';
import WishList from './components/WishList';
import NavigationBar from './components/NavigationBar';


const App = () => {
  
  

  
  const navigate = useNavigate();
  
  
  

  return (
    <>

    <NavigationBar/>
    <UserProvider>
      <ShoppingCartProvider>
        <ProductProvider>
          <WishListProvider>
          {/* Navbar codes go here */}

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/HomePage' element={<HomePage />} />
            <Route path='/AdminLogin' element={<AdminLogin />} />
            <Route path='/UserLogin' element={<UserLogin />} />
            <Route path='/AdminPanel' element={<AdminPanel />} />
            <Route path='/Cart' element={<ShoppingCart />} />
            <Route path='/Choices' element={<Choices />} />
            <Route path='/wishlist' element={<WishList />} />
          </Routes>
          </WishListProvider>
        </ProductProvider>
      </ShoppingCartProvider>
    </UserProvider>
    </>
  );
};

export default App;

















