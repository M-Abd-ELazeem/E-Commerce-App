import React, { useEffect, useState } from 'react'
import Style from './Notfound.module.css'
import notfoundimg from '../../assets/images/logo/img1.jpg'

export default function Notfound() {
    const [counter, setCounter] = useState(0)
    useEffect(() => { }, [])

    return (
        <div className='w-full flex justify-center items-center text-center'>
            <img className='w-full ' src={notfoundimg} alt="" />
        </div>
    )
}
