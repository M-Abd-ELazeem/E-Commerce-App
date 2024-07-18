import React, { useEffect, useState } from 'react'
import Style from './Categories.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Categories() {


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
        <div  className='row'>
            {categories.map((category) => <div key={category.id} className='w-3/6 md:w-2/6 lg:w-1/6  px-1 py-2 '>
                <div  className=' bg-gray-100 shadow-gray-300 shadow-md rounded-sm text-center'>
                    <img className='w-full block h-64' src={category.image} alt={category.name} />
                    <h3 className='py-4'>{category.name}</h3>
                </div>
            </div>
            )}

        </div>
    </>
    )
}
