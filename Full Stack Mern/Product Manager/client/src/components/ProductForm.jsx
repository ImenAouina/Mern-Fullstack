
import axios from 'axios'
import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'

const ProductForm = (props) => {
    const {listOfProducts, setlistOfProducts} = props;

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

   //const nav = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        // const obj = {
        //     title,
        //     price,
        //     description,
        // }
        axios.post("http://localhost:5000/api/products", {
            title,
            price,
            description,
        })
            .then(res => {
                console.log(res)
                console.log("✅ Product is successfully created", res.data)
                //nav("/products")
                setlistOfProducts([...listOfProducts, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
                /* to refresh our list */
                axios.get("http://localhost:5000/api/products")
                    .then(res => {
                        console.log(res.data.products)
                        setlistOfProducts(res.data.products)                       
                    })
                    .catch(err => {
                        console.log(err)
                    })   
                /*****end refresh****/
            })
            .catch(err => console.log("❌❌❌❌❌", err))

    }


    return (
        <div>
            Product Manager

            <form onSubmit={submitHandler}>
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
                <button>Create new Product</button>

            </form>
        </div>
    )
}

export default ProductForm
