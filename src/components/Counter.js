import { useState } from "react";
export function Counter(){

    //let counter = 5;
   
    let [counter,setCounter] = useState(5);
    let [name,setName] = useState("Pooja");


     const PI = 3.14; 
     
    function updateName(e){
        console.log(e);
        setName(e.target.value)
    }
    function decremnetCount(){
        setCounter(counter-1);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <h1>Name is : {name}</h1>
            <h1>PI Value is {PI}</h1>
            <input type="text" value={name} onChange={updateName}></input>
            {/* i will addd the code to update the counter on button click */}
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={decremnetCount}>Decrement</button>
        </div>
    )
}