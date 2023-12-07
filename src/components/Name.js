import { useState } from "react"

export function Name(props){

    const [name,setName] = useState("Pooja");// state
    //const [age,setAge] = useState(21);// dont put into the state

    //let age = 21;

    function updateName(){
        setName("Hegde");
    } ;  


    // function updateAge(){
    //     age = age + 1;
    //     console.log(age);
    // }

    return(
        <div>
            <h1>Name</h1>
            <h1>{name}</h1>
            <h1>{props.college}</h1>    
            <button onClick={updateName}>update Name</button>
            {/* <button onClick={updateAge}>update Age</button> */}

        </div>
    )

}