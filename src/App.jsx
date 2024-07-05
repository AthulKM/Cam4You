import React from 'react'
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';





const App = () => {
  const navigate = useNavigate();
  const adminLoginClicked = () => navigate('/AdminLogin');
  const userLoginClicked = ()=>navigate('/UserLogin')


  return (

    < div className='hCentered w-100 h-100'>
      <div className='ta-center w-100 h-100'>
        <h2>Choose your profile type : </h2>
        <div className='f-dir-col'>
          <button className='userLogin hCentered mt-10' onClick={userLoginClicked}>Login as a User</button>
          <button className='adminLogin hCentered mt-10' onClick={adminLoginClicked}> Login as an admin</button>
        </div>
      </div>





      <Routes>
        {/* <Route path='/' element={<App/>}/> */}
        <Route path='/Login' element={<Login />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/UserLogin' element={<UserLogin/>} />
      </Routes>


    </div>


  )
}

export default App