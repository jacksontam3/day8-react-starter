import React, {useState} from "react"; 

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onclick = {increment}>+</button>
            <span>{count}</span>
            <button onclick = {decrement}>-</button>
        </div>
    )
};



export default Counter;