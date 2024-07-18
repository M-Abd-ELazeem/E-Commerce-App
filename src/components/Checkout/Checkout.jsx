import { useContext, useEffect, useState } from 'react'
import Style from './Checkout.module.css'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

////// cart context ///////
export default function checkout() {
    const [apiError, setapiError] = useState('');
    const [isLoading, setisLoading] = useState(false);
    let { checkOut } = useContext(CartContext)

    let formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: '',
        },
        // onSubm   it: () => handlCheckout("667f99bfed0dc0016c5a909c", 'http://localhost:5173')
        onSubmit: (values) => {
            handlCheckout(values)
        }
    })

    //////////////paynow
    async function handlCheckout(values) {
        let {data}=await checkOut(values);
            if (data.status === 'success') {
                window.location.href = data.session.url
            }

    }

    // async function handlCheckout(values) {
    //     let { data } = await checkOut(cartId, url, formik.values);
    //     if (data.status === 'success') {
    //         window.location.href = data.session.url
    //     }
    //     console.log(values);
    // }




    return (
        <>
            <div className='py-9 my-5 max-w-lg mx-auto'>

                <h2 className='text-3xl text-green-600 font-bold mb-6 '>CheckOut Now</h2>
                <form onSubmit={formik.handleSubmit}>


                    {/* details */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='details' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} type="text" name="details" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your details Address:</label>
                    </div>
                    {/* phone */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone :</label>
                    </div>
                    {/* city */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='city' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} type="text" name="city" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your City :</label>
                    </div>



                    {/* button  */}
                    <div className='flex items-center'>
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Pay Now'}
                        </button>
                        <div className='mx-9 text-sm'>

                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}
