import React from 'react'
import { useParams } from 'react-router-dom'

const WordComponent = () => {
    const{word,color,backcolor}=useParams();
  return (
    <div>
        {
            ! ( isNaN(word))?
            <p>The Number is: {word}</p>
            :
            <p style={ 
                {
                color:color,
                backgroundColor:backcolor,
                border:"1px solid black",
                height:"50px",
                fontSize:"1.3em"
            }}>The word is: {word}</p>
            
        }
    
    </div>
  )
}

export default WordComponent
