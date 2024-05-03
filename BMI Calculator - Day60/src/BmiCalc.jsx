import React, {useState} from "react";

function BmiCalc() {
    const [heigth, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiValue, setBmiValue] = useState("");
    const [bmiMessage, setBmiMessage] = useState("");

    // function handleHeight() {
    //     setHeight(heigth.target.value);
    // }

    // function handleWeight() {
    //     setWeight(weigth.target.value);
    // }

    const calculateBmi = () => {
        if (heigth && weight) {
            const heightInMeters = heigth / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = "";
            if (bmi < 18.5) {
                message = "You are underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                message = "You are normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                message = "You are overweight";
            } else {
                message = "You are obese";
            }
            setBmiMessage(message);
        } else {
            setBmiValue("");
            setBmiMessage("");
        }
    };

    return(<div className="container"> 
                <h1>Romika's BMI Calculator</h1>
                <div className="input-container">
                    <label id="height">Enter your height</label>
                    <input type="number" id="typeHeight" value={heigth} 
                    onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className="input-container">
                    <label id="weight">Enter your weight</label>
                    <input type="number" id="typeWeight" value={weight} 
                    onChange={(e) => setWeight(e.target.value)} />
                </div>
                <button className="calculate-btn" onClick={calculateBmi}>Calculate BMI</button>

                {bmiValue && bmiMessage  && (
                    <div className="result">
                        <p>
                            Your BMI: <span className="bmi-value">{bmiValue}</span>
                        </p>
                        <p>
                            Result: <span className="bmi-message">{bmiMessage}</span>
                        </p>
                    </div>
                )}
            </div>
    );
}
export default BmiCalc