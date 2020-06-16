import React from 'react';
import { Link } from "gatsby";
import "./menu.sass";
import { href_component } from "./constant";

export const Menu: React.FC = (  ): JSX.Element =>  
{
    return (
        <div className="menu">
            {
                Object.values(href_component).map((ul_item, ul_index) => { return ( 
                    <React.Fragment key={ul_index}>
                        <h2 className="menu_title"></h2>
                        <ul>       
                            {
                                Object.values(ul_item.item_array).map((li_item, li_index) => { return ( 
                                    <li key={li_index}>
                                        <Link to={ul_item.item_href[li_index]}>{li_item}</Link>
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