import React,{Component} from 'react';

export class CounterClass extends Component{
    constructor(props){
        super(props);//? passing this props base class => Component
       // in class components recjts state is nothing but a object'
       // counter name age etc.
        this.state = {
            counter : 5,
            name : "Pooja"
        }
    }

    // 

    componentDidUpdate(prevProps,prevState){
        // component is rerendered.

        console.log("Component Did Update");
        // if the country is changed , you want to get the states of the country. do the logic here
        // if the state is changed , you want to get the cities of the state. do the logic here
        // if the state is changed , you have business logic to be executed , you can do that here.
        
    }

    componentWillUnmount(){
        // remove the event listeners , remove the timers.
        console.log("Component Will Unmount");
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    shouldComponentUpdate(nextProps,nextState){
        //compare the nextProps and nextState and determine component should re render or not.
        console.log("Should Component Update");  
    
    return true;}

    

   

    increment = () => {
        // this.state.counter = this.state.counter + 1; //? wrong way// render.
        // this.setState({counter : this.state.counter + 1});
        this.setState((prevState) => ({
            counter : prevState.counter + 1
        }));
    }

    decrement = () => {
        this.setState((prevState) => ({
            counter : prevState.counter - 1
        }));
    }

    render(){
        // this method return the jsx that needs to be rendered in the page.
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

    
}
