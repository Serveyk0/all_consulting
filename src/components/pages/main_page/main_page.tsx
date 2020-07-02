import React from 'react';
//@ts-ignore
import { MySlider } from "./slider/slider.tsx";
import "./main_page.sass";
//@ts-ignore
import Selector from './selector/selector.tsx';
//@ts-ignore
import Menu from './menu/menu.tsx';
import { show } from './../../show';
//@ts-ignore
import { description } from "./constant.ts";
import "../../common_styles.sass"
import Helmet from "react-helmet";
import { split_description } from "../split_description.js";

export const MainPage = ( ): JSX.Element =>  
{
    const desc = split_description(description);
    show();
    return (
        <div className="main_page">
            {//@ts-ignore
            <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
            title="All consulting"
            titleTemplate="All consulting"
            defaultTitle="All consulting"
            base={{"target": "_blank", "href": "/"}}
            meta={[
                {"name": "description", "content": description},
                {"name": "keywords", "content": desc},
                {"name": "robots", "content": "index, all"},
                {"property": "og:type", "content": "article"}
            ]}
            
            />}
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