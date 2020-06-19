import React from 'react';
import { href_component } from "./constant";
import { NavLink, Link } from "react-router-dom";
import "./main_menu.sass";
export const MainMenu: React.FC = ( ): JSX.Element =>  
{
    return (
        <div id="main_menu" className="main_menu">
            {
                Object.values(href_component).map((ul_item, ul_index) => { 
                    let check_link = ul_index + 1 === Object.values(href_component).length ? true : false;
                    console.log("UL");
                    return ( 
                    <React.Fragment key={ul_index}>
                        {!check_link ? <NavLink  to={ul_item.name_href} className="main_menu_title">{ul_item.name}</NavLink>
                        :
                        <Link to={ul_item.name_href} className="main_menu_title">{ul_item.name}</Link>}
                        <ul className="main_menu_block">       
                            {
                                Object.values(ul_item.item_array).map((li_item: string, li_index: number) => { console.log(li_index); return ( 
                                    <li key={li_index} className="main_menu_block_item">
                                        {!check_link ? <NavLink to={ul_item.item_href[li_index]} className="main_menu_block_item_link">{li_item}</NavLink>
                                        : 
                                        <Link to=
                                        {
                                            {
                                                pathname: ul_item.item_href[li_index],
                                                state:{currentPage: 1}
                
                                            }
                                        } 
                                        className="main_menu_block_item_link" >{li_item}</Link>}
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