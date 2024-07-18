import { useContext, useEffect, useState } from 'react'
import Style from './Register.module.css'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { UseerContext } from '../../Context/UseerContext';


export default function Register() {
    let { setUseerLogin } = useContext(UseerContext);
    let navigate = useNavigate();
    const [apiError, setapiError] = useState('');
    const [isLoading, setisLoading] = useState(false);

    function handleRegister(formValue) {
        setisLoading(true);
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formValue)
            .then((apiResponse) => {
                if (apiResponse.data.message === 'success') {
                    localStorage.setItem('userToken', apiResponse.data.token)
                    setUseerLogin(apiResponse.data.token);
                    navigate('/')
                    setisLoading(false);
                    console.log(apiResponse);
                }
            })
            .catch((apiResponse) => {
                setisLoading(false);
                setapiError(apiResponse?.response?.data?.message);
                // console.log(apiResponse?.response?.data?.messege);
                console.log(apiResponse);
            })
        console.log('register');
    }

    let validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'name minlength is 3').max(10, 'name maxlength is 10').required('name is required'),
        email: Yup.string().email('email is valid').required('email is required'),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'phone must be valid egyption number').required('email is required'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password must be start uppercase').required('password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'rePassword and password must be same ').required('rePassword is required'),
    })



    let formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: '',
        },
        validationSchema, // validationSchema: validationSchema,
        onSubmit: handleRegister
    })


    return (
        <>
            <div className='py-6 max-w-lg mx-auto'>
                {apiError ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {apiError}
                </div> : null}

                <h2 className='text-3xl text-green-600 font-bold mb-6 '>Register Now</h2>

                <form onSubmit={formik.handleSubmit}>
                    {/* name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter your Name :</label>
                    </div>
                    {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.name}
                    </div> : null}

                    {/* email */}

                    <div className="relative z-0 w-full mb-5 group">
                        <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email Address:</label>
                    </div>
                    {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.email}
                    </div> : null}

                    {/* phone */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" name="phone" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone :</label>
                    </div>
                    {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.phone}
                    </div> : null}

                    {/* password */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your password :</label>
                    </div>
                    {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.password}
                    </div> : null}

                    {/* rePassword */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input id='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="Password" name="rePassword" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter your rePassword : </label>
                    </div>
                    {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik.errors.rePassword}
                    </div> : null}



                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Submit'}
                    </button>

                </form>
            </div>
        </>
    )
}
