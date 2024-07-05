import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [adminData, setAdminData] = useState([
        {
            Name: 'Athul',
            Password: '1234',
        }
    ]);
    const [adminName, setAdminName] = useState('');
    const [adminPass, setAdminPass] = useState('');
    const navAdminLogin = useNavigate();
    
    function adminPassCheck() {
        console.log("Password is entered");
    }
    function navToAdminPanel() {
        navAdminLogin('/AdminPanel');
    }
    
    return (
      
      <div>
            <form className='f-dir-col admin-login-form'>
                <h3>No need to add any inputs, authentication is not enabled yet. Click on login to see the next page.</h3>
                <input type="text"
                    value={adminName} onChange={(e)=>setAdminName(e.target.value)} placeholder='AdminName' />
                <input type='password' value={adminPass}
                    onChange={ (e)=>setAdminPass(e.target.value)} placeholder='Password' />
                <button onClick={navToAdminPanel}>Login</button>
          </form>
          

    </div>
  )
}

export default AdminLogin