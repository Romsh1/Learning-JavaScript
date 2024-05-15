import {useState} from "react";

function App() {
  return (
    <>
      <div className="btnStep">
        <button>-</button>
        <p>Step: 1</p>
        <button>+</button>
      </div>
      <div className="btnCount">
        <button>-</button>
        <p>Count: 0</p>
        <button>+</button>
    </div>
    </>
  );
}

export default App;
