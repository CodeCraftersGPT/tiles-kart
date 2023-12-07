// create themecomponent with property theme and pass it to the ChildComponent

import React from 'react';
import ChildComponent from './ChildComponent';


const ThemeComponent = ({theme,loggedInUser}) => {
    return (
        <div>
            <h1>{JSON.stringify(theme)}</h1>
            <h1>{JSON.stringify(loggedInUser)}</h1>
            {/* if the theme is dark apply black backgroud color and white color for h1 tag */}
            {/* if the theme is light apply white backgroud color and black color for h1 tag */}
            <h1 style={{backgroundColor: theme.theme === 'light' ? 'yellow' : 'blue'}}>Theme Component</h1>
            <ChildComponent theme={theme} loggedInUser={loggedInUser} />
        </div>
    );
}

export default ThemeComponent;
