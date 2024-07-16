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
import { ShoppingCartProvider } from './components/ShoppingCartContext';

const App = () => {
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useContext(UserContext);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <UserProvider>
      <ShoppingCartProvider>
        <ProductProvider>
          <Navbar expand="lg" className="mainNavbar bg-body-tertiary">
            <Container className="header">
              <Navbar.Brand href="/HomePage"><h2>Cam4You</h2></Navbar.Brand>
              <Nav>
                {currentUser ? (
                  <>
                    
                    <Nav.Link onClick={() => navigate('/Cart')}><svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 1024 1024" class="icon" version="1.1"><path d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z" fill="#33CC99"/><path d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"/><path d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"/><path d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#45484C"/><path d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z" fill="#45484C"/><path d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z" fill="#45484C"/></svg></Nav.Link>
                  
                    <Nav.Link onClick={handleLogout}>
                    <svg fill="#000000" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z"/></svg>
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate('/')}>
                    <svg width="35px" height="35px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="m 12 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m -8 2 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 7 3 c -1.3125 0 -2.417969 0.832031 -2.832031 2 h 7.664062 c -0.414062 -1.167969 -1.519531 -2 -2.832031 -2 z m -8 2 c -1.660156 0 -3 1.339844 -3 3 c 0 0.554688 0.445312 1 1 1 h 6 c 0.554688 0 1 -0.445312 1 -1 c 0 -1.660156 -1.339844 -3 -3 -3 z m 9 1 c -0.257812 0 -0.511719 0.097656 -0.707031 0.292969 l -2 2 c -0.183594 0.1875 -0.289063 0.441406 -0.285157 0.707031 h -0.007812 v 1 h 2 v 1 c -0.105469 0.800781 -0.5 1 -1 1 h -4 c -1 0 -1 -1 -1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 c 0 1.332031 0.8125 2.273438 1.550781 2.644531 c 0.742188 0.371094 1.449219 0.355469 1.449219 0.355469 h 4 s 0.707031 0.015625 1.449219 -0.355469 c 0.738281 -0.371093 1.550781 -1.3125 1.550781 -2.644531 v -1 h 2 v -1 h -0.007812 c 0.003906 -0.265625 -0.101563 -0.519531 -0.285157 -0.707031 l -2 -2 c -0.195312 -0.195313 -0.449219 -0.292969 -0.707031 -0.292969 z m 0 0" fill="#2e3436"/>
</svg>
                    </Nav.Link>
                    </>
                ) : (
                  <Nav.Link href="/"><h4>Login / Sign Up</h4></Nav.Link>
                )}
                
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/HomePage' element={<HomePage />} />
            <Route path='/AdminLogin' element={<AdminLogin />} />
            <Route path='/UserLogin' element={<UserLogin />} />
            <Route path='/AdminPanel' element={<AdminPanel />} />
            <Route path='/Cart' element={<ShoppingCart />} />
          </Routes>
        </ProductProvider>
      </ShoppingCartProvider>
    </UserProvider>
  );
};

export default App;
