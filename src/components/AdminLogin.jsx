import React, { useState, useContext } from 'react'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const isLoggedIn = login(username, password);
        if (isLoggedIn) {
            navigate('/AdminPanel');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='adminLoginBody'>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );

};

export default AdminLogin