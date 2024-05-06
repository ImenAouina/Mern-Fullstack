import React from 'react'
import { useParams } from 'react-router-dom'

const NumComponent = () => {
    const {num}=useParams();
  return (
    <div>
        { !(isNaN(num)) ? 
      <p>the number is: {num} </p> 
      : null
        }
    </div>
  )
}

export default NumComponent
