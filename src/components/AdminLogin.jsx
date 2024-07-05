import React from 'react'

const AdminLogin = () => {
    const adminAuth = () => alert('Admin logged in');
    function adminPassCheck() {
        console.log("Password is entered");
    }

    return (
      
      <div>
          <form>
        <input type="text" value="adminName" onChange={(e)=>e.target.value} placeholder='AdminName' />
          <input type='password' value="adminPass" placeholder='Password' onChange={adminPassCheck}/>
          <button onClick={adminAuth}>Submit</button>
          </form>
          

    </div>
  )
}

export default AdminLogin