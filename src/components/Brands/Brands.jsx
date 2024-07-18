import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Brands() {


    const [Brands, setBrands] = useState([])
    console.log(Brands);
    function getBrands() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
            .then(({ data }) => {
                setBrands(data.data);
            }).catch((error) => {

            })
    }
    useEffect(() => {
        getBrands();
    }, [])

    return (<>
        <div className='row'>
            {Brands.map((brand) => <div key={brand.id} className='w-3/6 md:w-2/6 lg:w-1/6  px-1 py-2 '>
                <div className=' bg-gray-100 shadow-gray-300 shadow-md rounded-sm text-center'>
                    <img className='w-full block h-64' src={brand.image} alt={brand.name} />
                    <h3 className='py-4'>{brand.name}</h3>
                </div>
            </div>
            )}

        </div>
    </>
    )
}
