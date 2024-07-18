import React, { useContext, useEffect, useState } from 'react'
import Style from './ProductDetalis.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import toast from 'react-hot-toast'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext';



export default function ProductDetalis() {
    const [productDetalis, setCProductDetalis] = useState(null)
    const [relatedProducts, setCRelatedProducts] = useState([])
    let { id, category } = useParams();
    let { addToCart } = useContext(CartContext);
    let { addToWishList } = useContext(WishListContext)

    /////////// add to  cart ////////////



    async function addProductToCart(productId) {
        console.log(productId);
        let response = await addToCart(productId);
        console.log(response);
        if (response?.data.status === 'success') {
            console.log('added');
            toast.success('Product added successfully to your cart', {
                duration: 1500,
                position: 'bottom-right',
            })
        } else {
            //         //err
            console.log('err');
            //         toast.error('Error adding product  to your cart', {
            //             duration: 1500,
            //             position: 'bottom-right',
            //         })
        }
        //     console.log(response);
    }








    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function getProductDetalis(id) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id} `)
            .then(({ data }) => {
                setCProductDetalis(data.data);

            }).catch((error) => {

            })
    }


    function getRelatedProducts(category) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({ data }) => {
                let allProducts = data.data;
                let relate = allProducts.filter((product) => product.category.name == category)
                setCRelatedProducts(relate);
                console.log(relatedProducts);
            }).catch((error) => {

            })
    }


    useEffect(() => {
        getProductDetalis(id);
        getRelatedProducts(category);
    }, [id, category])

    return (<>
        <div className='row'>
            <div className="w-1/4">
                <Slider {...settings}>
                    {productDetalis?.images.map((src) => <img className='w-full ' src={src} alt={productDetalis?.title} />
                    )}
                </Slider>

            </div>
            <div className="w-3/4 p-6">
                <h1 className="text-lg font-normal text-green-950">{productDetalis?.title}</h1>
                <p className="text-gray-600 font-light mt-4">{productDetalis?.description}</p>

                <div className="flex justify-between items-center">
                    <span>{productDetalis?.price} EGP</span>
                    <span>{productDetalis?.ratingsAverage} <i className='fas fa-star text-yellow-400'></i></span>
                </div>
                <button onClick={() => addProductToCart(productDetalis?.id)} className='w-full btn bg-green-600 text-white'>Add To Car</button>
            </div>


        </div>



        <div className='row'>
            {relatedProducts.map((product) =>
                < div key={product.id} className="w-1/6" >

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
                        <button className='btn'>Add To Car</button>

                    </div>
                </div>
            )}
        </div >
    </>)
}
