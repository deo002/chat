import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './styles.css';

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser() {
        const res = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            body: JSON.stringify({
                email, password
            })
        }).then(t => t.json()); //see here later on
        console.log(res);
    }

    return (
        <div className="form">
            <h1>Register</h1>
            <form className="form-fields">

                <TextField fullwidth label="Your Email" placeholder="you@awesome.com"
                    variant="outlined" onChange={e => setEmail(e.target.value)} value={email} />

                <TextField fullwidth label="Password" placeholder="password"
                    variant="outlined" onChange={e => setPassword(e.target.value)} value={password} />

                <Button variant="contained" color="primary" onClick={registerUser}>Register</Button>
            </form>
        </div>
    );

};