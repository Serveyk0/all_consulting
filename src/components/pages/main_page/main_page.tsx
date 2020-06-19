import React from 'react';
import { MySlider } from "./slider/slider";
import "./main_page.sass";
import { Selector } from './selector/selector';
import { Menu } from './menu/menu';
import { show } from './../../show';

export const MainPage = ( ): JSX.Element =>  
{
    show();
    return (
        <div className="main_page">
            <MySlider />
            <div className="main_page_description">
                <div className="main_page_description_selector">
                    <Selector select={0} />
                </div>
                <Menu />
            </div>
        </div>
    )
}