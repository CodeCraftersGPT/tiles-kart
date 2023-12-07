import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1 style={{backgroundColor: theme.theme === 'light' ? 'yellow' : 'blue'}}>Child Component</h1>
        </div>
    );
}

export default ChildComponent;