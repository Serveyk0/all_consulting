import React, { useState, useEffect } from 'react';
import { href_component } from "./constant";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { show } from '../show';


import "./main_menu.sass";

const MainMenu = ( props: any ): JSX.Element =>  
{
    
    const {changeSel, app_class, changePg} = props;
    const { page } = props.changePage;
    const [path, set_path] = useState("");
    const [past_href, set_past_href] = useState("");
    const [current_href, set_current_href] = useState("");
    const [plus_href, set_plus_href] = useState("");
    const changeSelect = ( li_index: number ) => 
        changeSel(li_index)

    if ( path !== window.location.href.split('/')[4])
        set_path(window.location.href.split('/')[4])

    useEffect(() => {
        if ( window.location.href.split('/')[4] === "" )
            app_class(false);
        else
            app_class(true);
        set_current_href(window.location.href);
        if ( past_href !== window.location.href)
        {
            set_past_href(current_href);
            set_current_href(window.location.href);
        }
    }, [app_class, window.location.href, current_href, past_href])

    const change_sublist =  ( index: number, href: string ): void => 
    {
        
        if ( page === index && current_href === href )
            changePg(-1);
        else
        {
            changePg(plus_href === href ? -1 : index);
            set_plus_href(plus_href === href ? "" : href);
        }
    }
    show()
    return (
        <div id="main_menu" className="main_menu hide_menu">
            {
                Object.values(href_component).map((ul_item, ul_index) => { 
                    let check_link = ul_index + 1 === Object.values(href_component).length ? true : false;
                    return ( 
                    <React.Fragment key={ul_index}>
                        <div className="wrapper_div">
                            <div className="wrapper_div_link_href">
                                {!check_link ? 
                                <>
                                    <NavLink  to={ul_item.name_href} className="main_menu_title"  onClick={ () => change_sublist(ul_index, ul_item.name_href)}>{ul_item.name}</NavLink>
                                    <span className={"wrapper_div_link_href_plus" + (page === ul_index ? " wrapper_div_link_href_plus_color" : "") } onClick={ () => change_sublist(ul_index, ul_item.name_href)}>{page === ul_index ? "-" : "+"}</span>
                                </>
                                :
                                <Link to={ul_item.name_href} className="main_menu_title" onClick={ () => changeSelect(0) } >{ul_item.name}</Link>}
                                
                            </div>
                            <ul id={ul_item.name} className={"main_menu_block" + (page === ul_index || check_link  ? " main_menu_block_active" : "")}>       
                                {
                                    Object.values(ul_item.item_array).map((li_item: string, li_index: number) => { return ( 
                                        <li id={path} key={li_index} className="main_menu_block_item">
                                            {!check_link ? <NavLink to={ul_item.item_href[li_index]} className="main_menu_block_item_link">{li_item}</NavLink>
                                            : 
                                            <Link to= { ul_item.item_href[li_index] } 
                                            className="main_menu_block_item_link" onClick={ () => changeSelect(li_index) }>{li_item}</Link>}
                                        </li>
                                    )})
                                }
                            </ul>
                        </div>
                    </React.Fragment>
                )})
            }
        </div>
    )
}

const mapStateToProps = (state: any) => {
	return {
        changeSelector: state.changeSelector,
        changePage: state.changePage,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSel: (cs: any) => {
            dispatch({ type: 'CHANGE_SELECTOR', cs : cs });
        },
        changePg: (pg: any) => {
            dispatch({ type: 'CHANGE_PAGE', page : pg });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMenu));