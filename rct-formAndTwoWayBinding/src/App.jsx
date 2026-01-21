import {useState} from 'react'

const App = () => {

  const [user, setUser] = useState('   . . .');
  const [name, setName] = useState('');
  const handleChange = (e) =>{
    e.preventDefault();
    setName(e.target.value);
    setLog(prev => [...prev, `Form Submitted Successfully !`]);
    setUser(name);
    setName('');
  }

  const [log, setLog] = useState('');


  return (
    <div className="form">
      <form onSubmit={(e) =>{
        handleChange(e);
      }}>
        <input 
          type="text" 
          placeholder='Enter you Name.....' 
          value={name} 
          onChange={(e) => {
            setName(e.target.value);
          }}   
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <h5>Name :  {user}</h5>
      
      <div className="log">
        <h5>Console log :</h5>
        <input type="text" value={log} placeholder='console log will be simulated here ....' disabled />
      </div>
    </div>
  )
}

export default App
