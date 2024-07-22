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


const App = () => {
  
  
  const { currentUser, logoutUser } = useContext(UserContext);
  const { cart } = useContext(ShoppingCartContext);
  
  
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  
  const countCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <UserProvider>
      <ShoppingCartProvider>
        <ProductProvider>
          <WishListProvider>
          <Navbar expand="lg" className="mainNavbar bg-body-tertiary">
            <Container className="header">
              <Navbar.Brand href="/Choices"><h2>Cam4You</h2></Navbar.Brand>
              <Nav>
                {currentUser ? (
                  <>
                      <Nav.Link href="/wishlist">
                        <div className='wishlistIcon'>
                        {/* <h6 className='wishlistItemsCount'>{incrementCount}</h6> */}
                          <svg fill="#187e16" width="35px" height="35px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#187e16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="24 wishlist" id="_24_wishlist"> <path d="M27.11,17.74a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,17.74Z"></path> <path d="M39.79,16.65,35.71,20a1.025,1.025,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,16.65Z"></path> <path d="M27.11,27.06a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,27.06Z"></path> <path d="M39.79,25.97l-4.08,3.35a.97.97,0,0,1-.64.23.948.948,0,0,1-.65-.25l-2.78-2.42a1,1,0,0,1-.1-1.41,1.011,1.011,0,0,1,1.42-.1l2.13,1.87,3.44-2.82a.989.989,0,0,1,1.4.14A1,1,0,0,1,39.79,25.97Z"></path> <path d="M27.11,36.38a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,36.38Z"></path> <path d="M39.79,35.29l-4.08,3.36a1.015,1.015,0,0,1-.64.22.987.987,0,0,1-.65-.24L31.64,36.2a1,1,0,0,1-.1-1.41,1.01,1.01,0,0,1,1.42-.09l2.13,1.86,3.44-2.82a1,1,0,0,1,1.26,1.55Z"></path> <path d="M27.11,45.7a1,1,0,0,1-1,1H16.79a1,1,0,0,1,0-2h9.32A1,1,0,0,1,27.11,45.7Z"></path> <path d="M45.75,38.46V9.93A3.718,3.718,0,0,0,41.96,6.3H35.5V5.5a2.006,2.006,0,0,0-2-2H22.45a2.006,2.006,0,0,0-2,2v.8H13.99a3.727,3.727,0,0,0-3.8,3.63V52.2a3.728,3.728,0,0,0,3.8,3.64H33.45a11.248,11.248,0,1,0,12.3-17.38ZM22.45,5.5H33.5V9.09H22.45ZM13.99,53.84a1.752,1.752,0,0,1-1.8-1.64V9.93a1.751,1.751,0,0,1,1.8-1.63h6.46v.79a2,2,0,0,0,2,2H33.5a2,2,0,0,0,2-2V8.3h6.46a1.741,1.741,0,0,1,1.79,1.63V38.06a11.726,11.726,0,0,0-1.2-.07A11.238,11.238,0,0,0,32.29,53.84ZM42.55,58.5a9.255,9.255,0,1,1,9.26-9.25A9.261,9.261,0,0,1,42.55,58.5Z"></path> <path d="M49.52,46.61c-.01-.11-.03-.21-.05-.32a3.519,3.519,0,0,0-3.48-2.94h-.02a5,5,0,0,0-3.42,1.46,4.963,4.963,0,0,0-3.42-1.46h-.01a3.326,3.326,0,0,0-.96.15.749.749,0,0,0-.16.04,3.5,3.5,0,0,0-2.01,1.73c-.01.03-.02.05-.03.08a3.682,3.682,0,0,0-.33.95c-.02.1-.03.2-.05.31-.65,4.9,4.37,8.58,5.89,9.57l.51.35a.931.931,0,0,0,.57.19.959.959,0,0,0,.58-.19l.47-.33C45.15,55.19,50.17,51.51,49.52,46.61ZM42.55,54.5c-2.67-1.76-5.38-4.67-4.98-7.63l.03-.21a1.526,1.526,0,0,1,1.52-1.31,3.026,3.026,0,0,1,2.54,1.58,1.039,1.039,0,0,0,1.78,0,3.039,3.039,0,0,1,2.54-1.58,1.518,1.518,0,0,1,1.52,1.3l.04.22C47.93,49.82,45.25,52.72,42.55,54.5Z"></path> </g> </g></svg>
                      </div></Nav.Link>
                    <Nav.Link onClick={() => navigate('/Cart')}>
                      <div className='cartIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024" className="icon" version="1.1">
                          <path d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z" fill="#33CC99" />
                          <path d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A" />
                          <path d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A" />
                          <path d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#45484C" />
                          <path d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z" fill="#45484C" />
                          <path d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z" fill="#45484C" />
                        </svg>
                        {(countCartItems == 0) ?
                          <h6 className='countCartItems'>
                          </h6>
                          :
                          <h6 className='countCartItems'>
                            {countCartItems}
                          </h6>
                        }
                  
                        
                      </div>
                    </Nav.Link>

                    <Nav.Link onClick={handleLogout}>
                      <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z" />
                      </svg>
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate('/')}>
                      <svg width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m 12 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m -8 2 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 7 3 c -1.3125 0 -2.417969 0.832031 -2.832031 2 h 7.664062 c -0.414062 -1.167969 -1.519531 -2 -2.832031 -2 z m -8 2 c -1.660156 0 -3 1.339844 -3 3 c 0 0.554688 0.445312 1 1 1 h 6 c 0.554688 0 1 -0.445312 1 -1 c 0 -1.660156 -1.339844 -3 -3 -3 z m 9 1 c -0.257812 0 -0.511719 0.097656 -0.707031 0.292969 l -2 2 c -0.183594 0.1875 -0.289063 0.441406 -0.285157 0.707031 h -0.007812 v 1 h 2 v 1 c -0.105469 0.800781 -0.5 1 -1 1 h -4 c -1 0 -1 -1 -1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 c 0 1.332031 0.8125 2.273438 1.550781 2.644531 c 0.742188 0.371094 1.449219 0.355469 1.449219 0.355469 h 4 s 0.707031 0.015625 1.449219 -0.355469 c 0.738281 -0.371093 1.550781 -1.3125 1.550781 -2.644531 v -1 h 2 v -1 h -0.007812 c 0.003906 -0.265625 -0.101563 -0.519531 -0.285157 -0.707031 l -2 -2 c -0.195312 -0.195313 -0.449219 -0.292969 -0.707031 -0.292969 z m 0 0" fill="#2e3436" />
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
            <Route path='/Choices' element={<Choices />} />
            <Route path='/wishlist' element={<WishList />} />
          </Routes>
          </WishListProvider>
        </ProductProvider>
      </ShoppingCartProvider>
    </UserProvider>
  );
};

export default App;

















