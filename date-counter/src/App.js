import {React, useState} from "react";
// const currDate = new Date();
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// const formattedDate = days[currDate.getDay()] + ' ' + 
//                       months[currDate.getMonth()] + ' ' + 
//                       currDate.getDate() + ', ' + 
//                       currDate.getFullYear();

function App() {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(0);

  const date = new Date("may 16 2024");
  date.setDate(date.getDate() + count);


  function handleSubtract() {
    setCount(count - step);
  }
  
  function handleAdd() {
    setCount(count + step);
  }  

  return (
    <>

      <div>
        <input type="range" min="0" max="10" value={step} 
          onChange={(e) => setStep(Number(e.target.value))} 
        />
        <span>Step: {step}</span>
      </div>

      <div className="btnStep">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span>Step: {step}</span> */}
        <input type="text" value={count} 
        onChange={(e)=>setCount(Number(e.target.value))} 
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      {/* <div className="btnCount"> */}
        {/* <button onClick={handleSubtract}>-</button> */}
        {/* <span>Count: {count}</span> */}
        {/* <button onClick={handleAdd}>+</button> */}
    {/* </div> */}
    {/* <p>{date.toDateString()}</p> */}
    <p>
      <span>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count > 0
          ? `${count} days from today is ${date.toDateString()}`
          : `${Math.abs(count)} days ago was ${date.toDateString()}`}
      </span>
    </p>
    </>
  );
}

export default App;