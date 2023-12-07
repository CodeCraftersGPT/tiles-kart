export function Greet(props)
{

    // compnent it self can have some data// ( state)
    // here name of the person is hard coded
    // i want to pass the name of the person as a parameter
    return <h1>hello {props.firstName}, and lastname is {props.lastName}</h1>;// jsx
}