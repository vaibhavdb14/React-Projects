import React from 'react'

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgaddd} alt="User Avatar" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
