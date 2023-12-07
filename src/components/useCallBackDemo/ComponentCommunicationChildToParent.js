// create parent component with counter being in state and button to increment counter. increment function should be arrow function at the component layer.

import React, { useState } from 'react';
import { useCallback } from 'react';

const ParentComonent = () => {
    const [counter, setCounter] = useState(0);
    //const [name,setName] = useState('Tiles Kart');

    // i want cache => memoization
    // useCallback to cache the increment function
    // useCallback will return a function

    // const updateName = ()=>{
    //     setName('Tiles Kart Updated' + Math.random());
    // }

        // const increment = useCallback(() => {
        //     setCounter(counter + 1);
        //     // setCounter((prevCount) =>
        //     // {
        //     //     console.log('prevCount', prevCount);
        //     //     return prevCount + 1;
        //     // });
        // }, []);

        // useEffect can be used to run only dependencies changed.
        //useCallback is used to memoize function.
        // u1: from paret to child if we want to pass function as prop.
        // u2: if we need cache the eventhandler.
        const increment = () => {
            // if we are not updating the state variables here it should not cause child component rerender.
            //setCounter(counter + 1);
        }


    return (
        <div>
            <h1>Parent Component</h1>
            <p>Counter: {counter}</p>
            {/* <p>Name: {name}</p> */}
            <button onClick={increment}>Increment</button>
            {/* <button onClick={updateName}>updateName</button> */}
            <ChildComponent onIncrement={increment} />
        </div>
    );
}
const ChildComponent = ({onIncrement}) => {
    console.log('Child Component Rendered');
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={onIncrement}>Increment from Child</button>
        </div>
    );
}

export default ParentComonent;