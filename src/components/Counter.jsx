import React from "react";

const Counter = ({ index, count, setCount }) => (
    <div>
        <button onClick={() => setCount(index, count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(index, count - 1)}>-</button>
    </div>
);

export default Counter;