import React from 'react';

import "./slider.sass";
//@ts-ignore
import Slider from "infinite-react-carousel";
//@ts-ignore
import { slides_array } from "./constant.ts";

export const MySlider: React.FC = (  ): JSX.Element =>  
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
            {slides_array.map((item: any, index: number) => { 
                return (
                <div key={index} className="slider_slide">
                    <div className="slider_slide_title">
                        <h2 className="title_1">{item.title_1}</h2>
                        <h2 className="title_2">{item.title_2}</h2>
                    </div>
                    <div className="slider_slide_image">
                        <img alt={item.alt} src={item.img} className="img" />
                    </div>
                </div>
            )})}
          </Slider>
        </div>
    )
}