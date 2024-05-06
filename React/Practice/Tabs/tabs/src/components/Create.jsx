import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button,Form} from 'react-bootstrap'

const Create = (props) => {
    const [title, setTitle]=useState('')
    const [content, setContent]=useState('')
    const nav=useNavigate()
    const submitHandler=(e) =>{
        e.preventDefault()
        const newDict={
            title,
            content
        }
        props.add(newDict)
        setTitle('')
        setContent('')
        nav('/')
    }
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId='exampleForm.ControlInput'>
            <Form.Label>Title: </Form.Label>
            <Form.Control type="text" onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId='exampleForm.ControlInput'>
            <Form.Label>Content: </Form.Label>
            <Form.Control type="text" onChange={e => setTitle(e.target.value)} />
        </Form.Group>
        <Button type='submit'>Create</Button>
      </Form>
    </div>
  )
}

export default Create
