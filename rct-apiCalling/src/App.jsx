import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [fetchApiData, setFetchApiData] = useState([]);
  const [axiosApiData, setAxiosApiData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setFetchApiData(data);
    console.log(data);
  }

  const axiosData = async () => {
    // axios code will go here
    // command to install axios: npm install axios {or} npm i axios
    // import axios from 'axios'; -- at the top of the file
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setAxiosApiData(response.data);
    console.log(response.data);

  }

  return (
    <div className="main-container">
      <div className="btnholder">
        <button onClick={fetchData}>Fetch Data using fetch()</button>
        <button onClick={axiosData}>Fetch Data using axios</button>
      </div>
      <div className="showdata">
        <div className="fetchapi">
          <h2>Fetch API Data</h2>
          {fetchApiData.map((eachUser) => (
            <p key={eachUser.id}>{eachUser.name}</p>
          ))}
        </div>
        <div className="axiosapi">
          <h2>Axios API Data</h2>
          {axiosApiData.map((eachUser) => (
            <p key={eachUser.id}>{eachUser.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
