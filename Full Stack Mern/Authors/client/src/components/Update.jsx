import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link } from 'react-router-dom'
import { Form , Button} from 'react-bootstrap'

const Update = (props) => {

    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const [idError, setIdError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then(response => {
                console.log(id)
                // console.log(response.data.Author.name);
                // const nameNotUpdated = JSON.stringify(response.data.Author.name)
                // console.log(nameNotUpdated)
                setName(response.data.name)
            })
            .catch((err) => {
                console.log(err.response);
                setIdError("Author not found using that ID");
                console.log(idError);
            });

    }, [id])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:5000/api/authors/' + id, {
            name,     
        })
            .then(res => {
                console.log(res);
                navigate("/authors"); // this will take us back to the Main.js
            })
            .catch(err=>{
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            }) 
    }
    return (
    <div>
        <Form onSubmit={updateAuthor} >
            { idError ? 
                <h2> {idError} <Link to="/authors/new">Click here to add author</Link> </h2>
            : null }
            
            <h1>Favorite Authors </h1>
            <Link to="/authors">Home</Link>
            <p style={{"color":"purple"}}> Edit this Author: </p>
            {/* {
                Object.keys(errors).map((key) => (
                    <p key="{key}"></p>
                ))
                } */}
            <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={name} placeholder="" onChange={e => setName(e.target.value)}  />
                    { errors.name ? 
                        <p style={{color:"red"}} >{errors.name.message}</p>
                    : null
                    }
            </Form.Group>
                <Button className="btn btn-primary" type="submit" >Submit </Button> {'  '}
                <Button className="btn btn-primary" type="reset" onClick={() => { navigate(`/authors`) }} >Cancel </Button>     
        </Form>
    </div>
    )
}

export default Update;
