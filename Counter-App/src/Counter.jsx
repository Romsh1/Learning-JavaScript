import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    function handleIncrement() {
        setCount(count + 1);
    }
    
    function handleDecrement() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }

    return(<div className="buttons">
        <h3>Counter App</h3>
                <p className="value">{count}</p>
                <button id="inc" onClick={handleIncrement}>Increment</button>
                <button id="res" onClick={handleReset}>Reset</button>
                <button id="dec" onClick={handleDecrement}>Decrement</button>
            </div>
    );
}
export default Counter