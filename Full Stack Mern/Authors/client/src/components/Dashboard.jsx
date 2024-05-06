import React, { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const Dashboard = (props) => {

    const {authors, setAuthors} = props;
    const nav=useNavigate()

    function refrech() {
        axios.get("http://localhost:5000/api/authors")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data.Authors)
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        refrech()
    }, [])

    const DeleteThisAuthor = (deleteId) => {
        axios.delete("http://localhost:5000/api/authors/" + deleteId)
            .then(res => {
                refrech()
                console.log(res.data)
                const filteredAuthors = authors.filter((eachAuthor) => {
                    return eachAuthor._id !== deleteId
                })
                setAuthors(filteredAuthors)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <h1>Favorite Authors </h1>
            <Link to="/authors/new">Add new Author</Link>
            <p style={{"color":"purple"}}>We have quotes by:</p>
            <Table striped bordered variant="light">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        authors.map((item, index) => 
                            <tr key={index} >
                                <td>{item.name}</td>
                                <td>
                                    <Button variant='primary'  onClick={() => { nav(`/authors/${item._id}/edit`) }} >Update</Button>{'  '}
                                    <Button onClick={() => { DeleteThisAuthor(item._id) }}  variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard
