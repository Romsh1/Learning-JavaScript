import React, {useState} from "react";

function Counter() {
    const [value, setValue] = useState(0);
    
    function handleIncrement() {
        setValue(value + 1);
    }
    
    function handleDecrement() {

    }

    function handleReset() {
        
    }

    return(<div className="buttons">
                <p className="value">0</p>
                <button id="inc" onClick={handleIncrement}>Increment</button>
                <button id="res" onClick={handleReset}>Reset</button>
                <button id="dec" onClick={handleDecrement}>Decrement</button>
            </div>
    );
}
export default Counter