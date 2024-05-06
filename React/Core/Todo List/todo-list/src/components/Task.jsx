import React,{useState} from 'react'
//import { v4 as uuidv4 } from 'uuid';


const Task = (props) => {
    const[taskContent, settaskContent]=useState([]);
    const {addTask} = props

    const handleSubmit =(e) => {
        e.preventDefault();
        const newTask={
            'taskContent': taskContent,
            'isComplete': false,
            'id': crypto.randomUUID()
        }
        addTask(newTask);
        settaskContent("");
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input style={{border:"1px solid black", 
                width:"300px",
                height:"30px",
                }}
                type="text" value={taskContent} onChange={(e)=> settaskContent( e.target.value) }/>
            <div>
                <button style={{
                backgroundColor:"#0019f8",
                color:"white",
                fontSize:"1.2em",
                width:"100px",
                height:"50px",
                marginTop:"10px",
                borderRadius:"5px",
                border:"none"
                
                }}> Add</button> 
            </div>
        </form>
        
    </div>
    );
}

export default Task
