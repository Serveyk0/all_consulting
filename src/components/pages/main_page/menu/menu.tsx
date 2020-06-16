import React from 'react';
import { NavLink } from "react-router-dom";
import "./menu.sass";
import { href_component } from "./constant";

export const Menu: React.FC = (  ): JSX.Element =>  
{
    return (
        <div className="menu">
            {
                Object.values(href_component).map((ul_item, ul_index) => { return ( 
                    <React.Fragment key={ul_index}>
                        <NavLink to={ul_item.name_href} className="menu_title">{ul_item.name}</NavLink>
                        <ul className="menu_block">       
                            {
                                Object.values(ul_item.item_array).map((li_item, li_index) => { return ( 
                                    <li key={li_index} className="menu_block_item">
                                        <NavLink to={ul_item.item_href[li_index]} className="menu_block_item_link">{li_item}</NavLink>
                                    </li>
                                )})
                            }
                        </ul>
                    </React.Fragment>
                )})
            }
        </div>
    )
}