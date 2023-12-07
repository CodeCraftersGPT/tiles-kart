// define login component with username and password fields
// define inline styles for username and password fields
// define inline style for login button
// apply the same

import React from 'react';

const loginStyles = {
    width: '300px',
    margin: '0 auto',
    border: '1px solid #eee',
    padding: '10px',
    borderRadius: '5px'
}

const labelStyles = {
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '5px'
}

const inputStyles = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '20px'
}

const buttonStyles = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '20px',
    background: '#1c8adb',
    border: 'none',
    borderRadius: '5px',
    color: '#fff'
}

export const Login1 = () => {
    return (
        <div style={loginStyles}>
            <label style={labelStyles} htmlFor="username">Username</label>
            <input style={inputStyles} type="text" id="username" />
            <label style={labelStyles} htmlFor="password">Password</label>
            <input style={inputStyles} type="password" id="password" />
            <button style={buttonStyles}>Login</button>
        </div>
    )
}