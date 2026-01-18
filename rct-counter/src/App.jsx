import { use, useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
 

  const addValue = () =>{
    setCounter(++counter);
    console.log(counter);
  }
  
  const removeValue = () =>{
    if(counter === 0){
      alert("Counter value is already 0");
    }else{
       setCounter(--counter);
    console.log(counter);
    }
  }

  return (
    <>
        <h1>Chai Aur React</h1>
        <h2>Counter Value : {counter}</h2>

        <button
        onClick={addValue}
        >Add Value</button>
        <br/><br/>
        <button
        onClick={removeValue}
        >Remove Value</button>
    </>
  )
}

export default App
