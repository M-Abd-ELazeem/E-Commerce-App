import React, { useContext, useEffect, useState } from 'react'
import Style from './RecentProducts.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ClimbingBoxLoader } from 'react-spinners'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { WishListContext } from '../../Context/WishListContext'



export default function RecentProducts() {
    let { addToCart, setCartCount } = useContext(CartContext);
    let { addToWishList } = useContext(WishListContext)
    const [loading, setLoading] = useState(false)
    const [currentproductId, setCurrentproductId] = useState(0)

    /////////// add to wish list ////////////
    async function addProductToWishList(productId) {
        // console.log(productId);
        let response = await addToWishList(productId);
        if (response?.data.status === 'success') {
            console.log('added');
            toast.success('Product added successfully to your WishList', {
                duration: 1500,
                position: 'bottom-right',
            })
        } else {
            //err
            console.log('err');
            toast.error('Error adding product  to your cart', {
                duration: 1500,
                position: 'bottom-right',
            })
        }
        // console.log(response);
    }

    /////////// add to  cart ////////////

    async function addProductToCart(productId) {

        setCurrentproductId(productId)
        setLoading(true)
        let response = await addToCart(productId);
        if (response?.data.status === 'success') {
            setCartCount(response.data)
            setLoading(false)
            console.log('added');
            toast.success('Product added successfully to your cart', {
                duration: 1500,
                position: 'bottom-right',
            })
        } else {
            //err
            setLoading(false)
            console.log('err');
            toast.error('Error adding product  to your cart', {
                duration: 1500,
                position: 'bottom-right',
            })
        }
        // console.log(response);
    }

    ////////// products //////////////////
    function getRecent() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }

    let { data, isError, error, isLoading, isFetched } = useQuery({
        queryKey: ['recentProducts'],
        queryFn: getRecent,
        // refetchInterval: 5000,    
        // refetchIntervalInBackground:true,
        // staleTime: 0,
        // retry:5,
        // retryDelay:2000,
        // refetchOnWindowFocus: true,
        // refetchOnMount:,
        // gcTime: 2000,
        // select:(data)=>data.filter,
        select: (data) => data.data.data

    })

    // console.log(data);


    if (isLoading) {
        return <div className='w-full flex justify-center py-8'> <ClimbingBoxLoader color="#36d7b7" /></div>
    }


    return (
        <div className='row'>
            {data.map((product) =>
                <div key={product.id} className=" w-3/6 md:w-2/6 lg:w-1/6 px-3   rounded-sm border-gray-200 ">

                    <div className="product py-4 relative  ">
                        <div onClick={() => addProductToWishList(product.id)} className='absolute text-lg top-4 right-2 cursor-pointer '><i className="fa-regular fa-heart"></i></div>

                        <Link to={`/productdetails/${product.id}/${product.category.name}`}>

                            <img className='w-full   block' src={product.imageCover} alt={product.title} />
                            <span className='block font-light text-green-600'>{product.category.name}</span>
                            <h3 className='text-lg font-semibold text-green-800'>{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                            <div className="flex justify-between items-center">
                                <span>{product.price} EGP</span>
                                <span>{product.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                            </div>
                        </Link>
                        <button onClick={() => addProductToCart(product.id)} className='w-full btn bg-green-600 text-white'>{currentproductId === product.id && loading ? <i className='fas fa-spinner fa-spin'></i> : ' Add To Cart'}</button>

                    </div>
                </div>
            )}



        </div>



    )
}
