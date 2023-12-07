// create ChildComponenet with property theme and use it to style the h1 tag and have grandchild component and pass the theme to it
// import react
import React from 'react';
import GrandChildComponent from './GrandChildComponent';


const ChildComponent = ({theme,loggedInUser}) => {
    return (
        <div>
            <h1 style={{backgroundColor: theme.theme === 'light' ? 'yellow' : 'blue'}}>Child Component</h1>
            <GrandChildComponent theme={theme} loggedInUser={loggedInUser} />
        </div>
    );
}

export default ChildComponent;


