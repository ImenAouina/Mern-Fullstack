import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link, useNavigate} from "react-router-dom";

const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams(); 
    const nav =useNavigate();

    
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                setProduct(res.data.product);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const deletehandler =()=>{
        axios.delete(`http://localhost:5000/api/products/${id}`)
        .then( res => {
             //alert("successfully deleted")
            console.log("successfully deleted");  
            nav(-1)
        })
        .catch( err => console.log(err) );
    }


    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            
            <button onClick={() => { nav(-1) }}>Go back with button</button> <br/>
            <Link to={`/products`} > Go Back with link </Link> <br/>

            <button onClick={() => {deletehandler() }}>Delete Product</button>
        </div>
    );
}
export default OneProduct;

