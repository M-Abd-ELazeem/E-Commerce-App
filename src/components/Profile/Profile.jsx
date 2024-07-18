import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


export default function Profile() {


    return (
        <>
            <div className=''>

                <div className=" row ">

                    <div className="w-2/12 bg-gray-100 rounded-lg">
                        <div className=" px-2">
                            <Link to=''><p className='py-2'>My profile</p></Link>
                            <Link to='changepassword'><p className='py-2'>Change Password</p></Link>
                            <Link to='adress'><p className=' text-gray-800'>Adrees</p></Link>

                            <Link to=''><p className='py-2'>Notifigation</p></Link>
                            <Link to=''><p className='py-2'>Review</p></Link>
                            <Link to=''><p className='py-2'>Seitting</p></Link>

                        </div>
                    </div >
                    <div className="w-10/12 pl-5">
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </>
    )
}
