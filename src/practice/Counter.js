import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <input type="number" onChange={(e) => setIncrement(e.target.value)} />
      <button onClick={() => setCount(count + Number.parseInt(increment))}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
