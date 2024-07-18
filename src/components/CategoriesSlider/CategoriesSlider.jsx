import React, { useEffect, useState } from 'react'
import Style from './CategoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function CategoriesSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay: true,
    };

    const [categories, setCategories] = useState([])

    function getCategories() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then(({ data }) => {
                setCategories(data.data);
            }).catch((error) => {

            })
    }
    useEffect(() => {
        getCategories();
    }, [])

    return (<>
        <div className='py-5'>
            <div className='flex flex-rap justify-between items-center'>
                <h2 className='py-4 text-xl text-gray-800 font-medium'>Shop Populaar Categoreis</h2>
                <Link to={`categories`}>
                <button className='rounded-3xl px-3 py-1 text-white bg-green-600'>View More</button>
                </Link>
            </div>

            <Slider {...settings}>
                {categories.map((category) => <div key={category.id}>
                    <img className='category-img w-full' src={category.image} alt={category.name} />
                    <h3 className='font-light mt-2'>{category.name}</h3>


                </div>


                )}
            </Slider>
        </div>
    </>
    )
}
