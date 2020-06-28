import React from 'react';
import { MySlider } from "./slider/slider";
// // import "./main_page.sass";
import Selector from './selector/selector';
import Menu from './menu/menu';
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const MainPage = ( ) =>  
{
    show();
    return (
        <div className="main_page">
            kljlkjlj
            <Helmet >
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