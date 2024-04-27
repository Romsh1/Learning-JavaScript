import React, { useState } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    };

    function decrement() {
        setCount(count - 1);
    };

    function reset() {
        setCount(0);
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