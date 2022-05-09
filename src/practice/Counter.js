import { useState } from "react";

const Counter = ({ initialValue, initialIncrement }) => {
  const [count, setCount] = useState(initialValue);
  const [increment, setIncrement] = useState(initialIncrement);

  return (
    <div>
      <p>You clicked {count} times</p>
      <input
        type="number"
        value={initialIncrement}
        onChange={(e) => setIncrement(e.target.value)}
      />
      <button onClick={() => setCount(count + Number.parseInt(increment))}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
