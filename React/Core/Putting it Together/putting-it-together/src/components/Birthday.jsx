import React, { useState } from 'react'


const Birthday =(props) => {
    const [oldAge, setAge] = useState(props.age);
  return (
    <div>
      <h1> {props.firstName}, {props.lastName}</h1>
      <p style={{ color:"red"}} >Age:{oldAge}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button style={{backgroundColor:"green"}} onClick={(event) => 
      setAge(oldAge +1)}>Birthday Button {props.firstName} {props.lastName}</button>
    </div>
  )
}

export default Birthday
