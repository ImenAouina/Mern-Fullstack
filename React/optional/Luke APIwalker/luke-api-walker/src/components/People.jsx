import React, { useState } from 'react'
//import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const People = (props) => {
    const [people, setPeople] = useState({});
    const { id } = props;
    useEffect(()=> {
    axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res=>{
            console.log(res.data)
            setPeople(res.data)
        })
        .catch(err=>{
            console.log(err)

        })
    }, [])
    
  return (
    <div>
       <h1>{people.name}</h1>
       <p>{people.height}</p>
      {/* <ul>
        <li>
            { 
            people.map((p)=>{
            return( 
                <h1>{p.name}</h1>     
            )})}
        </li>
      </ul> */}
    </div>
  )
}

export default People
