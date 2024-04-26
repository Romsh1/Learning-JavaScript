import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return(<div>
                <h1>Hello</h1>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>
            </div>)
}
export default MyComponent