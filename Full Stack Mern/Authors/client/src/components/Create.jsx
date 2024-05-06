import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Create = (props) => {
    const {authors, setAuthors} = props
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 
    
    const nav = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        
        axios.post("http://localhost:5000/api/authors",{
            name: name,
        })
            .then(res => {
            console.log("✅✅✅✅", res.data)
            setAuthors([...authors, res.data]);
            setName("");
            nav("/authors")
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
            }) 
        
    }


    return (
        <div>
            <h1>Favorite Authors </h1>
            <Link to="/authors">Home</Link>
            <p style={{"color":"purple"}}> Add a new Author: </p>
            <Form onSubmit={submitHandler} >
                {
                Object.keys(errors).map((key) => (
                    <p key="{key}" style={{color:"red"}}>{errors[key].message}</p>
                ))
                }
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)}  />
                        {/* { errors.name ? 
                            <p>{errors.name.message}</p>
                            : null
                        } */}
                </Form.Group>
               
                    {/* <Button   onClick={() => { nav(`/authors`) }}>Cancel</Button> {' '}*/}
                    {/* <Button onClick={() => { nav(`/authors`) }}  >Submit </Button>  */}
                    <Button className="btn btn-primary" type="submit" >Submit </Button> {'  '}
                    <Button className="btn btn-primary" type="reset" onClick={() => { nav(`/authors`) }} >Cancel </Button> 

                    
              
            </Form>
        </div>
    )
}

export default Create;
