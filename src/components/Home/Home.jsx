import React, { useContext, useEffect, useState } from 'react'
import Style from './Home.module.css'
import RecentProducts from '../RecentProducts/RecentProducts';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';


export default function Home() {
    useEffect(() => { }, [])


    return (<>
        <MainSlider />
        <CategoriesSlider />
        <RecentProducts />
    </>
    )
}
