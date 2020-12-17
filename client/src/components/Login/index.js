import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './styles.css';
import apiCall from '../utilties.js';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function loginUser() {
        const res = await apiCall('http://localhost:1337/api/login', { email, password }); //add await here because js code                                                         //is executed synchronously.Althouh
        if (res.status === 'ok') {                                                         //await is there is the inside function
            localStorage.setItem('token', res.data); //BAD PRACTICE : IMPLEMENT REFRESH TOKENS
            alert('Logged In');
            history.push('/chat');
        } else {
            console.log('Invalid Login');
        }
    }

    return (
        <div className="form">
            <h1>Login</h1>
            <form className="form-fields">

                <TextField fullwidth label="Your Email" placeholder="you@awesome.com" name="email"
                    variant="outlined" onChange={e => setEmail(e.target.value)} value={email} />

                <TextField fullwidth label="Password" placeholder="password" name="password"
                    variant="outlined" onChange={e => setPassword(e.target.value)} value={password} />

                <Button variant="contained" color="primary" onClick={loginUser}>Login</Button>
            </form>
        </div>
    );

};