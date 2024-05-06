import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const Update = (props) => {

    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:5000/api/products/' + id, {
            title,    
            price,
            description,      
        })
            .then(res => {
                console.log(res);
                navigate("/products"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
        Update Product

        <form onSubmit={updateProduct}>
            <div>
                Title :
                <input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                Price :
                <input value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div>
                Description :
                <input value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <button>Update Product</button>

        </form>
    </div>
    )
}
export default Update;

