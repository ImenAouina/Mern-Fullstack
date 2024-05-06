import React from 'react'
import SubContents from './SubContents';
import Advertisement from './Advertisement';


const Main = () => {
    
  return (
    <div style={{
        border:"3px solid Black",
        backgroundColor:"#e06666",
        height: "400px",
        width: "700px",
        marginLeft: "20px",
        padding: "10px",

    }}>
        <div style={{
            display:"flex"
        }}>
        <SubContents/>
        <SubContents/>
        <SubContents/>
        </div>
        <Advertisement/>
        
    </div>
  )
}

export default Main
