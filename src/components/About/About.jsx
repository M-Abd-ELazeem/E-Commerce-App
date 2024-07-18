import React, { useEffect, useState } from 'react'
import Style from './About.module.css'

export default function About() {
    const [counter ,setCounter] =useState(0)
    useEffect(()=>{},[])

    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}
