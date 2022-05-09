import { useState } from "react";

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Counter setCount={setCount} count={count} />
    </div>
  );
}

export default App;
