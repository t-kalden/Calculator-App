import './App.css';
import { useState, useRef } from 'react';
function App() {
  const [ result, setResult ] = useState(0)
  const resultRef = useRef(null)
  const inputRef = useRef(null)

  function add(e) {
    e.preventDefault()
    setResult( (result) => result + Number(inputRef.current.value) );
  }
  function subtract(e) {
    e.preventDefault()
    setResult( (result) => result - Number(inputRef.current.value) );
  }
  function times(e) {
    e.preventDefault()
    setResult( (result) => result * Number(inputRef.current.value) );
  }
  function divide(e) {
    e.preventDefault()
    setResult( (result) => result / Number(inputRef.current.value) );
  }

  function resetInput(e) {
    e.preventDefault()
    inputRef.current.value = ''
  }
  function resetResult(e) {
    e.preventDefault()
    setResult( (result) => 0)
  }
  return (
    <div className="App">
      <div>
        <h1>Simple Input Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          <h3>{result}</h3>
        </p>
        <input type="number" pattern='0-9' ref={inputRef} placeholder='Type in a number'/>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
