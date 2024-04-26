import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    return(<div>
                <h1>Hello</h1>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>
                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p>Quantity: {quantity}</p>
            </div>)
}
export default MyComponent