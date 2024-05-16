import {React, useState} from "react";
const currDate = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const formattedDate = days[currDate.getDay()] + ' ' + 
                      months[currDate.getMonth()] + ' ' + 
                      currDate.getDate() + ', ' + 
                      currDate.getFullYear();

function App() {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(0);

  function handleSubtract() {
    setCount(count - 1);
  }
  
  function handleAdd() {
    setCount(count + 1);
  }  

  return (
    <>
      <div className="btnStep">
        <button>-</button>
        <span>Step: 1</span>
        <button>+</button>
      </div>
      <div className="btnCount">
        <button onClick={handleSubtract}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleAdd}>+</button>
    </div>
    <p>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is ${formattedDate}`
          : `${Math.abs(count)} days ago was `}
      </span>
    </p>
    </>
  );
}

export default App;