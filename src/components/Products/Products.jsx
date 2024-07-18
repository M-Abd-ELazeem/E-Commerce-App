import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import useProducts from '../../Hooks/useProducts'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'



export default function Products() {
    let { data, isError, error, isLoading, isFetched } = useProducts();
    // add to cart 
    let { addToCart, setCartCount } = useContext(CartContext);

    async function addProductToCart(productId) {
        console.log(productId);
        let response = await addToCart(productId);
        if (response?.data.status === 'success') {
            setCartCount(response.data)

            console.log('added');
            toast.success('Product added successfully to your cart', {
                duration: 1500,
                position: 'top-right',
            })
        } else {
            //err
            console.log('err');
            toast.error('Error adding product  to your cart', {
                duration: 1500,
                position: 'top-right',
            })
        }
        console.log(response);
    }


    if (isLoading) {
        return <div className='w-full flex justify-center py-8'> <ClimbingBoxLoader color="#36d7b7" /></div>
    }

    return (
        <div className='row'>
            {data?.data.data.map((product) =>
                <div key={product.id} className="w-3/6 md:w-2/6 lg:w-1/6 px-4">


                    <div className="product py-4">
                        <Link to={`/productdetails/${product.id}/${product.category.name}`}>

                            <img className='w-full' src={product.imageCover} alt={product.title} />
                            <span className='block font-light text-green-600'>{product.category.name}</span>
                            <h3 className='text-lg font-semibold text-green-800'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                            <div className="flex justify-between items-center">
                                <span>{product.price} EGP</span>
                                <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                            </div>
                        </Link>
                        <button onClick={() => addProductToCart(product.id)} className='btn'>Add To Car</button>

                    </div>
                </div>
            )}



        </div>
    )
}
