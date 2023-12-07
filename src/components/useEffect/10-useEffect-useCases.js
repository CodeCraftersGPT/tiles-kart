// define namecounter component with name and counter being state variables
// define useEffect with no dependencies to log the name and counter in the console
// define buttons to increment and decrement the counter
// define button to change the name with a random number as suffix
// observe the useEffect being called on every render.

import React, { useState, useEffect } from 'react';

const NameCounter = () => {
    const [name, setName] = useState('John');
    const [counter, setCounter] = useState(0);
    
    // useEffect compinetwillunmount
    useEffect(() => {
        // call for the very first time component is mounted and prevent it from calling on every render
        console.log(`Name: ${name}, Counter: ${counter}`);

        return () => {
            // cleanup code
            console.log('Component will unmount');
            // this will be called when component is unmounted
            // this will be called before the component is removed from the DOM
            //unsubscribe from the event listeners
            // cancel the timers
            // cancel the http requests
            // close the connections
            // remove the event handlers
            // remove the DOM nodes
            // remove the global variables
        }
    },[]);// i have not given any dependencies here, so this useEffect will be called on every render

    // useEffect with name as dependency

    useEffect(() => {
        // call for the very first time component is mounted and prevent it from calling on every render
        console.log(`Name: ${name}`);
    },[name]);// i have given name as dependency here, so this useEffect will be called only when name changes

    // useEffect with counter as dependency

    useEffect(() => {
        // call for the very first time component is mounted and prevent it from calling on every render
        console.log(`Counter: ${counter}`);
    },[counter]);// i have given counter as dependency here, so this useEffect will be called only when counter changes


    // useEffect with name and counter as dependency
    useEffect(() => {
        // call for the very first time component is mounted and prevent it from calling on every render
        console.log(`Name: ${name}, Counter: ${counter}`);
    }
    ,[name,counter]);// i have given name and counter as dependency here, so this useEffect will be called only when name and counter changes
    
    
    return (
        <div>
        <p>Name: {name}</p>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        {/* <button onClick={() => setCounter(counter - 1)}>Decrement</button> */}
        <button onClick={() => setName(`${name}${Math.random()}`)}>Change Name</button>
        </div>
    );
}

export default NameCounter;