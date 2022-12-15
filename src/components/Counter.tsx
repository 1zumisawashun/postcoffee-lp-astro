import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Counter</h1>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </>
  );
};
