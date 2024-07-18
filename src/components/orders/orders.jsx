import React, { useEffect, useState } from 'react'
import Style from './orders.module.css'

export default function Orders() {
    const [counter ,setCounter] =useState(0)
    useEffect(()=>{},[])

    return (
        <div className='row'>
            <h2>Orders</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}
