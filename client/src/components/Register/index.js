import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './styles.css';
import apiCall from '../utilties.js';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser() {
        const res = await apiCall('http://localhost:1337/api/login', { email, password });
    }

    return (
        <div className="form">
            <h1>Register</h1>
            <form className="form-fields">

                <TextField fullwidth label="Your Email" placeholder="you@awesome.com" name="email"
                    variant="outlined" onChange={e => setEmail(e.target.value)} value={email} />

                <TextField fullwidth label="Password" placeholder="password" name="password"
                    variant="outlined" onChange={e => setPassword(e.target.value)} value={password} />

                <Button variant="contained" color="primary" onClick={registerUser}>Register</Button>
            </form>
        </div>
    );

};