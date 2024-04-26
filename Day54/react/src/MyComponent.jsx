//Romika Chaudhary
//Day 54
//useState() hook
//April 25, 2024
import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState();

    const updateName = () => {
        setName("Spongebob");
    }

    return(<div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
            </div>);
}
export default MyComponent()