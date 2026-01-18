import react from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <div className="parent">
      <Card user='Vaibhav Bodade' imgaddd='https://images.unsplash.com/photo-1637164011965-635d3e762a38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBva2Vtb258ZW58MHx8MHx8fDA%3D'/>
      <Card user='Ajit Paraskar' imgaddd='https://images.unsplash.com/photo-1627693685101-687bf0eb1222?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBva2Vtb258ZW58MHx8MHx8fDA%3D'/>
    </div>
  )
}

export default App
