import axios from 'axios';
import React from 'react'
import { createContext, useEffect, useState } from "react";


export let CategoriesContext = createContext(0);

export default function CategoriesContextProvider() {

    /////// Get  ////////

    function getCategories() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`)
        .then((response) => {
            return response
        })
            .catch((error) => error)
    }

    return (
        <CategoriesContext.Provider value={getCategories}>

        </CategoriesContext.Provider>
    )
}
