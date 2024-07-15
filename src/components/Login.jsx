import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const adminLoginClicked = () => {
        navigate('/AdminLogin');
    }
    
  const userLoginClicked = ()=>navigate('/UserLogin')
  return (
    <div className='loginContent ta-center'>
        <h2>Choose your profile type : </h2>
        <div className=' loginButtons f-dir-col'>
          <button className='userLogin hCentered mt-10' onClick={userLoginClicked}>I'm a User</button>
          <button className='adminLogin hCentered mt-10' onClick={adminLoginClicked}> I'm an admin</button>
        </div>
      </div>
  )
}

export default Login;