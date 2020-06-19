import React from 'react';
import { MySlider } from "./slider/slider";
import "./main_page.sass";
import { Selector } from './selector/selector';
import { Menu } from './menu/menu';
import { show } from './../../show';
import { selector_props } from './selector/constant'

export const MainPage=( props: selector_props ): JSX.Element =>  
{
    const { selector_props } = props;
    show();
    return (
        <div className="main_page">
            <MySlider />
            <div className="main_page_description">
                <div className="main_page_description_selector">
                    <Selector selector_props={selector_props}/>
                </div>
                <Menu />
            </div>
        </div>
    )
}