import React, {useState, useEffect, useRef} from "react"

function MyComponent() {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
    });

    function handleClick() {
        ref.current++;
        console.log(ref.current);
    }

    return(
        <div>
            <button onClick={handleClick}>
                Clicke me!
            </button>
            <input ref={inputRef} />
        </div>
    )
}

export default MyComponent