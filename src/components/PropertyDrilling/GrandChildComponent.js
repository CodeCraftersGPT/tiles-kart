import React from 'react';
import GreatGrandChildComponent from './GreatGrandChildComponent';




const GrandChildComponent = ({theme,loggedInUser}) => {
    return (
        <div>
            <h1 style={{backgroundColor: theme.theme === 'light' ? 'yellow' : 'blue'}}>GrandChildComponent</h1>
            <GreatGrandChildComponent theme={theme} loggedInUser={loggedInUser} />
        </div>
    );
}

export default GrandChildComponent;