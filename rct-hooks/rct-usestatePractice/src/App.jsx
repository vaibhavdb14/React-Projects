import { useState } from "react";
const App = () => {

  //Example 1 : number usestate practice
  const [number, setNumber] = useState(0);
  const incrementNumber = () => {
    setNumber(number + 1);
  }

  //Example 2 : String usestate practice
  const [str, setStr] = useState('My name is Vaibhav');
  const changeStr = () =>{
    setStr('Bodade is my surname');
  }
  
  //Note : If you are trying to state with same value as previous state value then react will not re-render the component.

  //Example 3 : Object usestate practice
  const [obj, setObj] = useState({name:'Vaibhav', age:21});
  const changeObj = () =>{
    setObj({name:'Vaibhav Bodade', age:22});
  }
  
  //Example 4 : Object using destructuring
  const newObject = () => {
   const newObj = {...obj}
   newObj.name = 'Dhanesh Shingade';
   newObj.age = 20;
   setObj(newObj)
  }

  //Example 4 : Object usestate practice with previous state
  // const [obj, setObj] = useState({name:'Vaibhav', age:21});
  // const changeObj = () =>{
  //   setObj(prevState => {
  //     return {...prevState, age:22}
  //   });
  // }

  //Example 5 : Array usestate practice
  const [arr, setArr] = useState([10,20,30]);
  const addToArray = () =>{
    console.log(arr);
    const newArr = [...arr];
    newArr.push(40);
    setArr(newArr);
    console.log(arr);
    //Correct way to update array state
    // setArr(prevArr => {
    //   return [...prevArr, 6];
    // });
  }

  //Example 6 : Best ways to update states
  //Always use previous state to update the state if new state depends on previous state.
  //for object 
  const updateObjectBestWay = () => {
    setObj(prevObj =>({...prevObj, age: 22}));
  }

  //for array
  const updateArrayBestWay = () => {
    setArr(prevArr => ([...prevArr, 50]));
  }

  //Batch Updates in React
  //React batches multiple state updates into a single re-render for better performance.
  //When multiple state updates are made within the same event handler, React groups them together and performs a single re-render at the end of the event handler execution.
  const batchUpdateExample = () => {
    //setNumber(number + 1);
    //setNumber(number + 1);
    //setNumber(number + 1);
    //In the above way only one increment will happen as react batches the updates and takes the last one.
    //So to avoid this use the previous state method
    
    //correct way to do batch updates
    setNumber(prevNumber => prevNumber + 1);
    setNumber(prevNumber => prevNumber + 1);
    setNumber(prevNumber => prevNumber + 1);
  }

  return (
    <>
    <div style={{display:'flex'}}>
      <h1>Number: {number}</h1>
      <button onClick={batchUpdateExample}>Increment</button>
    </div>
    <br/>

    <div className="string" style={{display:'flex'}}>
      <p>{str}</p>
      <button onClick={changeStr}>Change String</button>
    </div>
    <br/>

    <div className="object" style={{display:'flex'}}>
      <p>My name is {obj.name} and my age is {obj.age}</p>
      <button onClick={newObject}>Change Object</button>
    </div>
    <br/>

    <div  style={{display:'flex'}}>
     <p>{arr}</p>
      <button onClick={addToArray}>Add to Array</button>
    </div>
    <br/>

    </>
  )
}

export default App
