import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'



export default function Layout() {
    const [counter, setCounter] = useState(0)
    useEffect(() => { }, [])

    return (<>

        <Navbar />

        <div className="container w-11/12 md:w-10/12 mx-auto my-6 py-10">
            <Outlet></Outlet>
        </div>
        <Footer />



    </>
    )
}
