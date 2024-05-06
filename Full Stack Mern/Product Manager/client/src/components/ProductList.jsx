import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {

    const { listOfProducts, setlistOfProducts } = props;

    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/products")
    //         .then((res) => {
    //             console.log(res.data);
    //             setlistOfProducts(res.data);
    //             console.log(listOfProducts)
                
    //         })
    //         .catch((err) => console.log(err));
    // }, []); 
    function refrech() {
        axios.get("http://localhost:5000/api/products")
            .then(res => {
                console.log(res.data.products)
                setlistOfProducts(res.data.products)
                
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        refrech()
    }, [])

    const DeleteThisProduct = (deleteId) => {
        axios.delete("http://localhost:5000/api/products/" + deleteId)
            .then(res => {
                refrech()
                console.log(res.data)
                const filteredProducts = listOfProducts.filter((eachProduct) => {
                    return eachProduct._id !== deleteId
                })
                setlistOfProducts(filteredProducts)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>ALL Products</h1>
            {
                listOfProducts.map((oneprod, idx) => {
                    return (
                        <div key= {idx} >

                            {/* <Link to={"/products/" + oneprod._id}> {oneprod.title} </Link> */}
                                
                            <Link to={`/products/${oneprod._id}`}> {oneprod.title} </Link> <br/>
                                
                            <button onClick={() => { DeleteThisProduct(oneprod._id) }}>Delete</button> <br/>
                                
                            <Link to={`/products/edit/${oneprod._id}`} >Update</Link>
                            
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}
export default ProductList;

