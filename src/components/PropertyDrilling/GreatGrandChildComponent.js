import React from 'react';

const GreatGrandChildComponent = ({theme,loggedInUser}) => {
    return (
        <div>
            <h1>{loggedInUser}</h1>
            <h1 style={{backgroundColor: theme === 'light' ? 'yellow' : 'blue'}}>GreatGrandChildComponent</h1>
        </div>
    );
}

export default GreatGrandChildComponent;