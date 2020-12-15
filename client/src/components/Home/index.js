import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './styles.css';

export default function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Simple Chat Application</h1>
                <div className="buttons">
                    <Button variant="contained" color="secondary" component={Link} to="/login">Login</Button>
                    <Button variant="contained" color="primary" component={Link} to="/register">Register</Button>
                </div>
            </header>
        </div>
    );
};