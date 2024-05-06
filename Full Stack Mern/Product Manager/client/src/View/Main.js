import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [listOfProducts, setlistOfProducts] = useState([]);
    
    return (
        <div>
            <ProductForm listOfProducts={listOfProducts} setlistOfProducts={setlistOfProducts} />
            <hr/>
            <ProductList listOfProducts={listOfProducts} setlistOfProducts={setlistOfProducts} />
        </div>
    )
}
export default Main;

