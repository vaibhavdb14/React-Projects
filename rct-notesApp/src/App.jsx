import { useState } from "react";
import { X } from 'lucide-react';
//

const App = () => {
  
  //All states here
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  // Handlers here
  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyNotes = [...notes];

    copyNotes.push({
      title,
      content,
    });


    setNotes(copyNotes);

    setTitle('');
    setContent('');
  };


  return (
    <div className="h-screen lg:flex bg-black text-white ">
     
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex lg:w-1/2 items-start flex-col gap-4 p-10 "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Note Heading ..."
          className="p-5 w-full border-2 font-medium outline-none rounded px-5 py-2"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Note Content ..."
          className="p-5 h-40 w-full border-2 font-medium  outline-none rounded px-5 py-2 flex items-start"
          value={content}
          onChange={(e)=>{
            setContent(e.target.value);
          }}
        />

        <button
          type="submit"
          className="bg-white w-full text-black px-5 py-2 rounded active:scale-95 duration-200 font-bold"
        >
          Add Note
        </button>

        {/* <img
          src="https://imgs.search.brave.com/rBPTRGTcq7UJkXz6NXNsSHUZSrvDk5wccnS_-YtjHpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw"
          alt="notes illustration"
          className=" h-70 rotate-y-180"
        /> */} 

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl  font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]">

          {notes.map(function(note, index){
            return <div key={index} className="relative h-60 w-45 rounded-2xl py-6 px-4  text-black p-4  bg-cover bg-[url('https://i.pinimg.com/originals/5d/51/c3/5d51c31ac8723007f74032b0c965b47d.jpg')] ">
              <X 
                className="absolute top-2 right-2 cursor-pointer text-gray-700 hover:text-gray-900"
                size={20}
                onClick={()=>{
                  const filteredNotes = notes.filter((notee, idx)=>{
                    return idx !== index;
                  });
                  setNotes(filteredNotes);
                }}
              />
              <h3 className="leading-tight text-xl font-bold">{note.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-900" >{note.content}</p>
            </div>
          })}
        </div>

      </div>
    </div>
  );
};

export default App;
