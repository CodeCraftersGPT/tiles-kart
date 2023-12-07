import React, { useContext, useState } from 'react';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';

const ThemedComponent = () => {
    // i want to use the theme here. i dont want acces as a property
    const theme = useContext(ThemeContext);
    const [name] = useState('Sushma');

    return (
        <div>
            <h1 style={{backgroundColor: theme.theme === 'light' ? 'blue' : 'yellow'}}>i am styled via useContext</h1>
            <ChildComponent/>
        </div>
    );
}

export default ThemedComponent;