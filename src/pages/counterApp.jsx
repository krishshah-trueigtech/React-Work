import { useState } from "react";

export default Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
        <h1>Count {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Increement Count
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement Count
        </button>
      </div>
    </>
  );
};
