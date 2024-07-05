import React from 'react'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import { Nav, Navbar, Container } from 'react-bootstrap';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';





const App = () => {
  


  return (

    <>
       <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="header">
          <Navbar.Brand href="/HomePage">BuyCam</Navbar.Brand>
          
        </Container>
      </Navbar>





      <Routes>
        {/* <Route path='/' element={<App/>}/> */}
        <Route path='/' element={<Login />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/UserLogin' element={<UserLogin />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/AdminPanel' element={ <AdminPanel/>} />
      </Routes>


    </>


  )
}

export default App