import React, { useEffect, useState } from 'react'
import Style from './Footer.module.css'
import amazon from '../../assets/images/logo/571_amazoncom.jpg'
import american from '../../assets/images/logo/american-express.logo.jpg'
import mastercard from '../../assets/images/logo/mastercard.logo.jpg'
import paypal from '../../assets/images/logo/paypal.logo.webp'
import google from '../../assets/images/logo/google.logo.webp'
import apple from '../../assets/images/logo/apple.logo.svg'


export default function Footer() {
    useEffect(() => { }, [])

    return (
        <footer className='static bottom-0 left-0 right-0  py-6  bg-gray-100 static bottom-0 left-0 right-0'>
            <div className='mx-5'>
                <div className="">
                    <h3 className='pb-2'>Get The FreshCart app</h3>
                    <span className='text-gray-400'>We will send you a link, open it on your phone to download the app.</span>

                    <div className=" flex  flex-col lg:flex-row  justify-around items-center px-2">
                        <div className='w-full lg:w-9/12   mx-1 my-2'>
                            <input type="email" id="email" aria-describedby="helper-text-explanation" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent rounded-lg border-2 border-gray-300 appearance-none    dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer " placeholder="  Email..." />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
                        </div>
                        <div className='w-5/12 lg:w-2/12'>
                            <button className='  btn py-2.5 bg-green-500 '>share App Link</button>
                        </div>
                    </div>
                </div>


                <div className="my-5 mx-8   ">

                    <div className="flex my-6 py-4 justify-between  border-y-2   items-center  ">

                        <div className="flex  items-center">
                            <span>Payment Partners</span>
                            <a href='#' className='logo-footer'><img src={amazon} alt="" /></a>
                            <a href='#' className='logo-footer'><img src={american} alt="" /></a>
                            <a href='#' className='logo-footer'><img className='' src={mastercard} alt="" /></a>
                            <a href='#' className='logo-footer'><img src={paypal} alt="" /></a>
                        </div>
                        <div className="flex  items-center">
                            <a href='#' className='w-14'><img src={apple} alt="" /></a>
                            <a href='#' className=' w-16'><img src={google} alt="" /></a>
                        </div>



                    </div>
                </div>
            </div>
        </footer>
    )
}
