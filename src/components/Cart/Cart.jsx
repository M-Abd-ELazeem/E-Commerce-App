import React, { useContext, useEffect, useState } from 'react'
import Style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import { ClimbingBoxLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

export default function Cart() {

    const [cartDetails, setCartDetails] = useState(null);
    const [cartcount, setCartCount] = useState(null);
    // console.log(cartcount);

    let { getCartItems, removeCartItems, updateCartItems, clearCartItems } = useContext(CartContext)

    /////// Get ////////
    async function getCart() {
        let response = await getCartItems();
        setCartDetails(response.data);
        setCartCount(response.numOfCartItems)
        // console.log(response.data );

    }
    useEffect(() => {
        getCart();
    }, []);

    /// remove //// 
    async function removeItem(productId) {
        let response = await removeCartItems(productId);
        setCartDetails(response.data);
        // if (cartDetails < 1) {
        //     setCartCount(undefined);
        // }
        // console.log(response.data);
    }

    //////Update ///////
    async function updateQuantity(productId, count) {
        if (count < 1) {
            removeItem(productId)
            setCartCount(response.numOfCartItems)
            if (response.numOfCartItems < 1) {
                setCartCount(undefined);
            }

            // return;
        }
        let response = await updateCartItems(productId, count);
        setCartDetails(response.data);
    }


    //////clear cart ///////
    async function clearCart() {
        let response = await clearCartItems();
        setCartDetails(undefined);
        // console.log(response.data);
    }






    if (cartDetails === null) {
        return <div className='w-full h-screen flex justify-center items-center '> <ClimbingBoxLoader color="#36d7b7" /></div>
    }




    // if (cartDetails.data.lengh === 0) {
    //     return <div className='my-10  py-10 text-center'>
    //         <i className="fa-solid fa-cart-shopping text-9xl py-9 text-green-600"></i>
    //         <h2 className='text-4xl py-4 text-green-600'>Your Cart is  Empty</h2>
    //         <p className='text-gray-500 py-2 '>Add Something to Make Me Happy :)</p>

    //     </div>
    // }





    return <>
        <div className="relative  my-5 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full mx-auto text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {cartDetails?.data.products.map((product) => <tr key={product?.product?.id} className="bg-white border-b  hover:bg-gray-50 ">
                        <td className="p-4">
                            <img src={product?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                            {product?.product?.title}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <button onClick={() => updateQuantity(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                    </svg>
                                </button>
                                <div>
                                    <span>{product?.count}</span>
                                </div>
                                <button onClick={() => updateQuantity(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-black ">
                            {product?.price} <span className='text-green-600'>EGP</span>
                        </td>
                        <td className="px-6 py-4">
                            <button onClick={() => removeItem(product?.product?.id)} className='font-medium text-black '><i className="fa-solid fa-trash-can text-green-600"></i> Remove</button>
                        </td>
                    </tr>)}

                </tbody>
            </table>

        </div>
        <div className='w-full flex justify-between  items-center'>
            <div className='  py-3 w-1/4'>
                <button onClick={() => clearCart()} className='btn bg-green-600 text-white'><p></p> Clear Cart <i className="fa-solid fa-trash-can"></i></button>
            </div>
            <div className='  py-3 w-1/4'>
                <Link to={'/chechout'}>
                    <button  className='btn   bg-green-600 text-white'>Checkout Now </button>

                </Link>
            </div>
        </div>


    </>

}
