import React from 'react'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import { Nav, Navbar, Container } from 'react-bootstrap';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';
import { ProductProvider } from './components/ProductContext';





const App = () => {
  


  return (

    <>
       <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="header">
          <Navbar.Brand href="/HomePage">Cam4You</Navbar.Brand>
          <Nav className='links'>
            <Nav.Link href="/">Log in / Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>





      <Routes>
        {/* <Route path='/' element={<App/>}/> */}
        <Route path='/' element={<Login/>} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/AdminPanel' element={ <AdminPanel/>} />
      </Routes>


      
  
      <ProductProvider>
        <AdminPanel/>
   </ProductProvider>
  
    </>
    
    

  )
}

export default App