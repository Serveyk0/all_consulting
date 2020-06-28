import React from 'react';

import "./slider.sass";
//@ts-ignore
import Slider from "infinite-react-carousel";
import { slides_array } from "./constant";

export const MySlider = (  ) =>  
{
    const settings =  
    {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        swipe: false,
        wheel: true
    };
    return (
        <div>
          <Slider { ...settings } className="slider">
            {slides_array.map(
                //@ts-ignore
                (item, index) => { 
                return (
                <div key={index} className="slider_slide">
                    <div className="slider_slide_title">
                        <h2 className="title_1">{item.title_1}</h2>
                        <h2 className="title_2">{item.title_2}</h2>
                    </div>
                    <div className="slider_slide_image">
                        <img alt={
                            //@ts-ignore
                            item.alt} src={item.img} className="img" />
                    </div>
                </div>
            )})}
          </Slider>
        </div>
    )
}