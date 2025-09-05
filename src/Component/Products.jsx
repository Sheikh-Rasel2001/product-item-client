import React, { use, useState } from 'react';
import { IoInformationCircle } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';


const Products = ({usePromise}) => {

    const initialProduct = use(usePromise);
    const [products, setProducts] = useState(initialProduct)

    const handleProducts = e => {
        e.preventDefault();
        const name = e.target.productName.value;
        const place = e.target.place.value;
        const price = e.target.price.value;
        const addProducts = {name, place, price};
        console.log(addProducts);

        fetch('http://localhost:3000/products',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(addProducts)
        })
        .then(res => res.json())
        .then(data => {
            addProducts._id = data.insertedId;
            const newProduct = [...products, addProducts]
            setProducts(newProduct);
            e.target.reset()
            console.log('create item', data);
        })
    }

    const deleteProduct = (id) => {
        console.log('delete this product', id);
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('delete this product', data);
            if(data.deletedCount){
                const remainingProduct = products.filter(product => product._id !== id);
                setProducts(remainingProduct);
            }
            alert('Delete product successfully!')
        })

    }

    return (
        <div>
            <h1 className='item1'>Create your product item here</h1>
            <div className='item-form'>
                <form onSubmit={handleProducts}>
                    <input className='input' type="text" name='productName' />
                    <br />
                    <br />
                    <input className='input' type="text" name='place' />
                    <br />
                    <br />
                    <input className='input' type="number" name='price'/>
                    <br />
                    <br />
                    <input className='input' type="submit" value="Add Product" />
                </form>
            </div>
            <div className='product123'>
                {
                    products.map(product => 
                        <div className='product12' key={product._id}>
                            <h3>Name : {product.name}</h3>
                            <h4>From : {product.place}</h4>
                            <h5>Price : {product.price}</h5>
                            <div className='btn-d'>
                            {/* <button className='btn'>
                                <Link to={`/details/${product._id}`}><IoInformationCircle /></Link>
                            </button> */}
                            <Link to={`/details/${product._id}`}>
                                <button className='btn'> <IoInformationCircle /></button>
                            </Link>
                            <Link  className='btn' to={`/update/${product._id}`}>
                                <button  className='btn'><FaRegEdit /></button>
                            </Link>
                            <button className='btn' onClick={()=>deleteProduct(product._id)}><MdDelete /></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Products;