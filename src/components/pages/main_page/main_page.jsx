import React from 'react';
import { MySlider } from "./slider/slider.jsx";
import "./main_page.sass";
import Selector from './selector/selector.jsx';
import Menu from './menu/menu.jsx';
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const MainPage = ( ) =>  
{
    show();
    return (
        <div className="main_page">
            kljlkjlj
            <Helmet >
            <meta charSet="UTF-8" />
                <title>{title}</title> 
                <meta name="keywords" content={"sjrklajrkljklasjrklfmsafasklfl;ka"} /> 
                <meta name="description" content={"sjrklajrkljklasjrklfmsafasklfl;ka"} />  
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <MySlider />
            <div className="main_page_description">
                <div className="main_page_description_selector">
                    <Selector />
                </div>
                <Menu />
            </div>
        </div>
    )
}