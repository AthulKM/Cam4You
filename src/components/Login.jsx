import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const adminLoginClicked = () => {
        navigate('/AdminLogin');
  }

  const userLoginClicked = ()=>navigate('/UserLogin')
  return (
    <div className='ta-center w-100 h-100'>
        <h2>Choose your profile type : </h2>
        <div className='f-dir-col'>
          <button className='userLogin hCentered mt-10' onClick={userLoginClicked}>Login as a User</button>
          <button className='adminLogin hCentered mt-10' onClick={adminLoginClicked}> Login as an admin</button>
        </div>
      </div>
  )
}

export default Login;