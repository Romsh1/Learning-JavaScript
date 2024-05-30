function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Enter bill value" ></input>
    </div>
  );
}

function TipCalculator() {
  return(
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service? </SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}

function SelectPercentage() {
  return(
    <div>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was Okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absoultely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output() {

}

function Reset() {

}

export default App;
