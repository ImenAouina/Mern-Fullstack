import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate =useNavigate();
    const[resource, setResource]= useState();
    const[id, setId]= useState(0);
    const submitHandler=(e) =>{
        e.preventDefault();
        navigate(`/${resource}/${id}`);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor='resouce' >Search for: </label>
                <select name='resource' onChange={(e)=>setResource(e.target.value)}>
                    <option value=""></option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select> 
                <label htmlFor='id'>ID:</label>
                <input name='id' type="number" onChange={(e)=>setId(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form
