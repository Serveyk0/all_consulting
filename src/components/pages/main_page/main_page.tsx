import React from 'react';
//@ts-ignore
import { MySlider } from "./slider/slider.tsx";
import "./main_page.sass";
//@ts-ignore
import Selector from './selector/selector.tsx';
//@ts-ignore
import Menu from './menu/menu.tsx';
import { show } from './../../show';

export const MainPage = ( ): JSX.Element =>  
{
    show();
    return (
        <div className="main_page">
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