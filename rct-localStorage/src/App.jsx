
const App = () => {

  //Local Storage

  //Save Data to Local Storage
  localStorage.setItem("name", "Vaibhav Bodade");

  //Get Data from Local Storage
  const Name = localStorage.getItem("name");
  console.log(Name);

  //Remove Data from Local Storage
  // localStorage.removeItem("name");

  //Clear the Local Storage
  // localStorage.clear();

  //Session Storage
  
  //Save Data to Session Storage
  sessionStorage.setItem("sessionName", "Vaibhav Bodade Session");

  //Get Data from Session Storage
  const sessionName = sessionStorage.getItem("sessionName");
  console.log(sessionName);

  //Remove Data from Session Storage
  // sessionStorage.removeItem("sessionName");

  //Clear the Session Storage
  // sessionStorage.clear();


  //-----------------------------------------------------------------------------

  //JSON Data and Local Storage

  const user = {
    name: "Vaibhav Bodade",
    age: 21,
    city: "Pune"
  };

  //Convert Object to JSON String
  const jsonData = JSON.stringify(user);
  console.log(jsonData);

  //Save JSON String to Local Storage
  localStorage.setItem("userData", jsonData);
  
  //Get JSON String from Local Storage
  const getUserData = localStorage.getItem("userData");
  console.log(getUserData);


  return (
    <div>
        Local Storage Demostration
    </div>
  )
}

export default App
