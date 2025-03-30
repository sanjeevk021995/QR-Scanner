

import React, { useState, useContext } from 'react';
import { loginUser } from '../api/auth';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
      console.log("email",email)
      console.log("password",password)
        e.preventDefault();
        try {
            const data = await loginUser(email, password);
            login(data);
            console.log("login data",data)
            alert(data)
            // Redirect based on user type
            // if (data.user_type === 'master_admin') {
            //     window.location.href = '/master-admin-dashboard';
            // } else if (data.user_type === 'staff') {
            //     window.location.href = '/staff-dashboard';
            // } else {
            //     window.location.href = '/user-dashboard';
            // }
            window.location.href = '/staff-dashboard';
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
