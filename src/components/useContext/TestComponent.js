import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';


const TestComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1 style={{backgroundColor: theme.theme === 'light' ? 'blue' : 'yellow'}}>i am styled via useContext</h1>
        </div>
    );
};

export default TestComponent;
 // Replace '../path/to/ThemeContext' with the actual path to your ThemeContext file
