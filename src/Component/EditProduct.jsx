import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EditProduct = () => {
   const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        const name = e.target.productName.value;
        const place = e.target.place.value;
        const price = e.target.price.value;
        const update = {name, place, price};
        console.log(update);

        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log('after update', data);
            if(data.modifiedCount){
                alert('Update Product Successfully');
            }
        })

    }

    return (
        <div className='item-form'>
            <h1>Update Your Product</h1>
            <div>
                <form onSubmit={updateProduct}>
                   <input className='input' type="text" name='productName' defaultValue={product.name} />
                    <br />
                    <br />
                    <input className='input' type="text" name='place' defaultValue={product.place}/>
                    <br />
                    <br />
                    <input className='input' type="number" name='price' defaultValue={product.price}/>
                    <br />
                    <br />
                    <input className='input' type="submit" value="Update Product" />

                </form>
            </div>
        </div>
    );
};

export default EditProduct;