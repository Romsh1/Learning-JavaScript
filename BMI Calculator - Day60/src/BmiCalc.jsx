import React, {useState} from "react";

function BmiCalc() {
    const [heigth, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiValue, setBmiValue] = useState("");
    const [bmiMessage, setBmiMessage] = useState("");

    function handleHeight() {
        setHeight(heigth.target.value);
    }

    function handleWeight() {
        setHeight(weigth.target.value);
    }


    return(<div className="container"> 
                <h1>Romika's BMI Calculator</h1>
                <div className="input-container">
                    <label type="text" id="height">Enter your height</label>
                    <input type="text" id="typeHeight" value={heigth} onChange={handleHeight} />
                </div>
                <div className="input-container">
                    <label id="weight">Enter your weight</label>
                    <input type="text" id="typeWeight" value={weight} onChange={handleWeight} />
                </div>
            </div>
    );
}
export default BmiCalc