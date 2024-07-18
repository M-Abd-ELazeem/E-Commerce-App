import React, { useEffect, useState } from 'react'
import Style from './MainSlider.module.css'
import mainSlider from '../../assets/images/slider-image-3.jpeg'
import mainSlider1 from '../../assets/images/grocery-banner-2.jpeg'
import mainSlider2 from '../../assets/images/grocery-banner.png'
import Slider1 from '../../assets/images/slider-image-2.jpeg'
import Slider2 from '../../assets/images/slider-image-1.jpeg'
import Slider from "react-slick";





export default function MainSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
    };

    return (
        <div>
            <div className='row'>
                <div className="w-3/4">
                    <Slider {...settings}>
                        <img className='w-full h-[400px]' src={mainSlider} alt="" />
                        <img className='w-full h-[400px]' src={mainSlider1} alt="" />
                        <img className='w-full h-[400px]' src={mainSlider2} alt="" />

                    </Slider>
                </div>
                <div className="w-1/4">
                    <img className='w-full h-[200px]' src={Slider1} alt="" />
                    <img className='w-full h-[200px]' src={Slider2} alt="" />
                </div>
            </div>
        </div>
    )
}
