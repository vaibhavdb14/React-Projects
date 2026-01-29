import React, { useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = React.useState([]);

  const [index, setIndex] = React.useState(1);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    setUserData(res.data);
    // console.log(userData);
    // console.log(res.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold">LOADING....</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto p-4 h-screen text-white">
      <h5 className="text-center text-2xl font-bold">Gallary App</h5>
      <div className="flex flex-wrap gap-5 px-10 py-5 h-[90%]">{printUserData}</div>

      <div className="flex justify-center items-center p-4 gap-6">
        <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 fond-semibold"
        onClick={()=>{
          if(index>1){
           setIndex(index-1);
           setUserData([]);
          }
          
        }}
        >
          Previous
        </button>
        <h1 >Page {index}</h1>
        <button className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 fond-semibold"
        onClick={()=>{
             setUserData([]);
          setIndex(index+1);
          
        }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
