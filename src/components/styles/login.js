// define login component with username and password fields
// define inline styles for username and password fields
// define inline style for login button
// apply the same

import React from 'react';
// import styles form login.module.css as style alias
import styles from './login.module.css'; // local to the component.

export const Login = () => {
    return (
        <div className={styles.loginstyles}>
            <label className={styles.lablestyles} htmlFor="username">Username</label>
            <input className={styles.inputstyles} type="text" id="username" />
            <label className={styles.lablestyles} htmlFor="password">Password</label>
            <input className={styles.inputstyles} type="password" id="password" />
            <button className={styles.buttonstyles}>Login</button>
        </div>
    )
}