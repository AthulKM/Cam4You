import React, { useContext } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';
import { ProductProvider } from './components/ProductContext';
import { UserProvider, UserContext } from './components/UserContext';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const { currentUser, logoutUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/UserLogin');
  };

  const handleLoginSwitch = () => {
    navigate('/'); 
  };

  return (
    <UserProvider>
      <ProductProvider>
        <ShoppingCartProvider>
          <>
            <Navbar expand="lg" className="mainNavbar bg-body-tertiary">
              <Container className="header">
                <Navbar.Brand href="/HomePage"><h2>Cam4You</h2></Navbar.Brand>
                <Nav className='links'>
                  {currentUser ? (
                    
                    <Button onClick={handleLogout}>Logout</Button>
                  ) : (
                    <>
                      <Button className='switch' variant="outline-primary" onClick={handleLoginSwitch}>Switch Profile</Button>
                      <Nav.Link href="/UserLogin"><h4>Log in / Sign Up</h4></Nav.Link>
                    </>
                  )}
                </Nav>
              </Container>
            </Navbar>

            <Routes>
              <Route path='/App' element={ <App/>}/>
              <Route path='/' element={<Login />} />
              <Route path='/HomePage' element={<HomePage />} />
              <Route path='/AdminLogin' element={<AdminLogin />} />
              <Route path='/UserLogin' element={<UserLogin />} />
              <Route path='/AdminPanel' element={<AdminPanel />} />
              <Route path='/cart' element={<ShoppingCart />} />
            </Routes>
          </>
        </ShoppingCartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default App;
