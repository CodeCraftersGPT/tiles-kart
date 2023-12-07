// import React from react

import React from 'react';	// import react

export class Welcome extends React.Component {	// export class Welcome

    // class component should have method with name render and it should return jsx.
    render() {	// render

        //render in multiple lines

        return (
                <div>
                <h1>Hello, {this.props.firstName},
                 {this.props.lastName}</h1>
                <h1>i am h1</h1>
                </div>
        );
        

        //return <h1>Hello, {this.props.firstName}, {this.props.lastName}</h1>;	// return
    }
}    // end of class Welcome