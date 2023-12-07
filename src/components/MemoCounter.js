
import React, { useState, useMemo } from 'react';

// add todo items and button to add todo items

const MemoCounter = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(['buy milk', 'buy eggs and bread']);


  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>

    <div>
        <h1>Todo List</h1>
        <ul>
            {todo.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        <button onClick={() => setTodo([...todo, 'new todo' + Math.random()])}>
            Add Todo
        </button>
    </div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Expensive Calculation Result: {expensiveCalculation}</h2>
    </div>
  );
};

export default MemoCounter;
