import React, { useState } from 'react';

const ComponentCommunication = () => {
  const [count, setCount] = useState(0);

  // Callback function that increments the count
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Without useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <ChildComponent onIncrement={increment} />
    </div>
  );
};

// ChildComponent receives the callback as a prop
const ChildComponent = ({ onIncrement }) => {
  console.log('Child Component Rendered');
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
};

export default ComponentCommunication;
