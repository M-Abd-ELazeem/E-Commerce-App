import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UseerContext } from '../../Context/UseerContext'
import { CartContext } from '../../Context/CartContext'



export default function Navbar() {
    let { useerLogin, setUseerLogin } = useContext(UseerContext);

    let navigate = useNavigate();


    const { cartCount } = useContext(CartContext);

    function logOut() {
        localStorage.removeItem('userToken');
        setUseerLogin(null);
        navigate('/login')
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            <nav className="bg-gray-100 z-40  px-2 border-gray-200 text-center static md:fixed top-0 right-0 left-0">

                <div className="  w-full justify-between  flex flex-wrap  items-center  mx-auto py-2 ">

                    <a href="#" className="w-3/12 md:w-1/12 space-x-3 rtl:space-x-reverse">
                        <img className='w-60 md:w-full' width={110} src={logo} alt='fresh cart logo' />
                    </a>


                    <button onClick={handleToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>


                    <div className={`w-9/12 md:w-11/12 md:block   ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">

                        <div className='w-full flex justify-between items-center md:flex-row flex-col container  mx-auto py-2 '>
                            <div className=' items-center flex flex-col md:flex-row'>
                                <ul className='items-center flex flex-col md:flex-row'>
                                    {useerLogin !== null ? <>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to=''>Home</NavLink></li>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='cart'>Cart</NavLink></li>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='products'>Products</NavLink></li>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='brands'>Brands</NavLink></li>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='categories'>Categories</NavLink></li>
                                    </> : null}
                                </ul>
                            </div>
                            <div className='items-center'>

                                {/* wish list  */}
                                <ul className='flex flex-col md:flex-row items-center'>
                                    <li className='p-2'>
                                        <Link to='wishlist'>
                                            <div className='relative '>
                                                <p className='text-2xl'><i className="text-red-600 fa-solid fa-heart"></i></p>
                                            </div>
                                        </Link>
                                    </li>

                                    {/* cart  */}
                                    <li className='p-2'>
                                        <Link to='cart'>
                                            <div className='relative '>
                                                <p className='text-2xl'><i className="fa-solid fa-cart-shopping"></i></p>
                                                <div className='countNav flex justify-center items-center  '>
                                                    <p className='countText '>{cartCount?.numOfCartItems}</p>
                                                </div>
                                            </div>
                                        </Link>

                                    </li>
                                


                                    {/* <li className='flex items-center'>
                                        <i className='fab py-2 fa-facebook mx-2'></i>
                                        <i className='fab py-2 fa-twitter mx-2'></i>
                                        <i className="fab py-2 mx-2 fa-instagram"></i>
                                        <i className="fab py-2 mx-2 fa-youtube"></i>
                                    </li> */}


                                    {useerLogin === null ? <>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='login'>Login</NavLink></li>
                                        <li className='py-2'><NavLink className='mx-2  text-lg text-slate-900 ' to='register'>Register</NavLink></li>
                                    </> : <li onClick={logOut} className='py-2'><span className='mx-2  text-lg text-slate-900 cursor-pointer' >Logout <i className="fa-solid fa-arrow-right-from-bracket"></i> </span></li>
                                    }

                                    <li>
                                        <Link to='profile'>
                                            <p className='border-2 rounded-full border-green-800 w-8 h-8 flex items-center justify-center'><i className="fa-solid fa-user-tie"></i></p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </>

    )
}
