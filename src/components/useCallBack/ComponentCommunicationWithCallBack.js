import React, { useState, useCallback } from 'react';

const ComponentCommunicationWithCallBack = () => {
  const [count, setCount] = useState(0);

  // Callback function that increments the count
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the callback never changes

  return (
    <div>
      <h1>Callback Example</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <ChildComponent onIncrement={increment} />
    </div>
  );
};

// ChildComponent receives the callback as a prop
const ChildComponent = ({ onIncrement }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
};

export default ComponentCommunicationWithCallBack;
