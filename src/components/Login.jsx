import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const adminLoginClicked = () => {
        navigate('/AdminLogin');
    }
    
  const userLoginClicked = ()=>navigate('/UserLogin')
  return (
    <div className='loginContent ta-center d-flex'>
        <h2>Profile : </h2>
        <div className=' loginButtons f-dir-col'>
          <button className='userLogin hCentered mt-10' onClick={userLoginClicked}>Customer</button>
          <button className='adminLogin hCentered mt-10' onClick={adminLoginClicked}>Admin</button>
        </div>
      </div>
  )
}

export default Login;