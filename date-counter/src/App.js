import {useState} from "react";
const currDate = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const [step, setStep] = useState(1);

const [count, setCount] = useState(0);

const formattedDate = days[currDate.getDay()] + ' ' + 
                      months[currDate.getMonth()] + ' ' + 
                      currDate.getDate() + ', ' + 
                      currDate.getFullYear();

function handleUp() {

}

function handleDown() {

}

function App() {
  return (
    <>
      <div className="btnStep">
        <button>-</button>
        <p>Step: 1</p>
        <button>+</button>
      </div>
      <div className="btnCount">
        <button onClick={handleUp}>-</button>
        <p>Count: 0</p>
        <button onClick={handleDown}>+</button>
    </div>
    <div className="showDate">
      Today is {formattedDate}
    </div>
    </>
  );
}

export default App;
