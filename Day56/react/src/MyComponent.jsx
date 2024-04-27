import React, { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
    };

    function decrement() {
        setCount(c => c - 1);
    };

    function reset() {
        setCount(c => c = 0);
    };

    return(
        <div>
            <p>Count: {count}</p>
            <button onclick={decrement}>Decrement</button>
            <button onclick={increment}>Increment</button>
            <button onclick={reset}>Reset</button>
        </div>
    );
}
export default MyComponent