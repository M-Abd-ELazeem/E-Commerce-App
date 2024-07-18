import { useContext, useEffect, useState } from 'react'
import Style from './Login.module.css'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { UseerContext } from '../../Context/UseerContext';



export default function login() {
    let { setUseerLogin } = useContext(UseerContext);
    let navigate = useNavigate();
    const [apiError, setapiError] = useState('');
    const [isLoading, setisLoading] = useState(false);

    function handlelogin(formValue) {
        setisLoading(true);
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValue)
            .then((apilogin) => {
                if (apilogin.data.message === 'success') {
                    localStorage.setItem('userToken', apilogin.data.token);
                    setUseerLogin(apilogin.data.token);
                    navigate('/');
                    setisLoading(false);
                    console.log(apilogin.data.token);
                }
            })
            .catch((apiResponse) => {
                setisLoading(false);
                setapiError(apiResponse?.response?.data?.message);
                // console.log(apiResponse?.response?.data?.messege);
            })
        console.log(formValue);
        console.log('register');



    }

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('email is valid').required('email is required'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password must be start uppercase').required('password is required'),
    })



    let formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema, // validationSchema: validationSchema,
        onSubmit: handlelogin
    })


    return (
        <>
            <div className='py-9 my-5 max-w-lg mx-auto'>
                {/* header alrt   */}
                {apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {apiError}
                </div> : null}

                <h2 className='text-3xl text-green-600 font-bold mb-6 '>login Now</h2>

                <form onSubmit={formik.handleSubmit}>
                    {/* email */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email Address:</label>
                    </div>
                    {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.email}
                    </div> : null}
                    {/* password */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your password :</label>
                    </div>
                    {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.password}
                    </div> : null}
                    {/* button  */}
                    <div className='flex items-center'>
                        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Login'}
                        </button>
                        <div className='mx-9 text-sm'>
                            {/* register  */}
                            <p className='pl-3 px-5'> You not have account yet ? <span className='font-semibold'><Link to={'/register'}>Register Now</Link> </span></p>
                            {/* forgotPasswords  */}
                            <p className='pl-3 px-5'> You Forgot Password ? <span className='font-semibold'><Link to={'/forgotpasswords'}>Forgot Passwords</Link> </span></p>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}
