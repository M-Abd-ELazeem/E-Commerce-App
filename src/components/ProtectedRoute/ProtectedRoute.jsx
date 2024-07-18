import React, { useEffect, useState } from 'react'
import Style from './ProtectedRoute.module.css'
import { Navigate } from 'react-router-dom';



export default function ProtectedRoute(props) {
    // console.log(props);
    if (localStorage.getItem('userToken') !== null) {
        // console.log(props.children);
        return props.children


    } else {
        return <Navigate to={'/login'} />
    }




    return (<>

    </>
    )
}
