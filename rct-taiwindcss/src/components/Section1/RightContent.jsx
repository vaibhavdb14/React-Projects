import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full w-2/3 flex flex-nowrap gap-10 p-6 '>
      {props.users.map(function(user, index){

        return <RightCard key={index} idx={index} img={user.img} tag={user.tag} />
      })}
    </div>
  )
}

export default RightContent
