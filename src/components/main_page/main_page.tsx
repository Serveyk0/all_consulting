import React from 'react';
import { MySlider } from "./slider/slider";

import "./main_page.sass";
import { Selector } from './selector/selector';
import { Menu } from './menu/menu';

export const MainPage: React.FC = (  ): JSX.Element =>  
{
    return (
        <div className="main_page">
            <MySlider />
            <div className="main_page_description">
                <div className="main_page_description_selector">
                    <Selector />
                    <Menu />
                </div>
            </div>
        </div>
    )
}