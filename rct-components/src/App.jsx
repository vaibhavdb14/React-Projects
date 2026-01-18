import React from 'react'
import './App.css'
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
 
  const username = 'Vaibhav';
  const age = 21;
  return (
    <>
      <Navbar />
      <Card />
      <Card />
    </>
  )
}

export default App
