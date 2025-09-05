import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetail = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className='details'>
            <h1>Product Details</h1>
            <h2> Name : {product.name}</h2>
            <h3> From : {product.place}</h3>
            <h4> Price : {product.price}</h4>
        </div>
    );
};

export default ProductDetail;