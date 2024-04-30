import React, {useState, useEffect, useRef} from "react"

function MyComponent() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
        // console.log(inputRef);
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }


    return(
        <div>
            <button onClick={handleClick1}>
                Clicke me1!
            </button>
            <input ref={inputRef1} />
        
            <button onClick={handleClick2}>
                Clicke me2!
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Clicke me3!
            </button>
            <input ref={inputRef3} />

        </div>
    )
}

export default MyComponent