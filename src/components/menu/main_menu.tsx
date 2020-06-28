import React, { useState, useEffect } from 'react';
import { href_component } from "./constant";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { show } from '../show';


import "./main_menu.sass";
//@ts-ignore
const MainMenu = ( props ) =>  
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
        <div id="main_menu" className="main_menu">
            {
                Object.values(href_component).map((ul_item, ul_index) => { 
                    let check_link = ul_index + 1 === Object.values(href_component).length ? true : false;
                    let spl = window.location.href.split("/");
                    const str = spl[0] + "/" + spl[1] + "/" + spl[2];
                    return ( 
                    <React.Fragment key={ul_index}>
                        <div className="wrapper_div">
                            <div className="wrapper_div_link_href">
                                {!check_link ? 
                                <>
                                    {
                                        str + ul_item.name_href !== window.location.href ? 
                                        <NavLink  to={ul_item.name_href} className="main_menu_title"  onClick={ () => change_sublist(ul_index, ul_item.name_href)}>{ul_item.name}</NavLink>
                                        :
                                        <span style={{cursor: "pointer"}} className="main_menu_title active">{ul_item.name}</span>
                                    }
                                        <span className={"wrapper_div_link_href_plus" + (page === ul_index ? " wrapper_div_link_href_plus_color" : "") } onClick={ () => change_sublist(ul_index, ul_item.name_href)}>{page === ul_index ? "-" : "+"}</span>
                                    
                                </>
                                :
                                <Link to={ul_item.name_href} className="main_menu_title" onClick={ () => changeSelect(0) } >{ul_item.name}</Link>}
                                
                            </div>
                            <ul id={ul_item.name} className={"main_menu_block" + (page === ul_index || check_link  ? " main_menu_block_active" : "")}>       
                                {
                                    Object.values(ul_item.item_array).map((li_item: string, li_index: number) => { 
                                        return ( 
                                        <li id={path} key={li_index} className="main_menu_block_item">
                                            {!check_link ? 
                                            str +  ul_item.item_href[li_index] !== window.location.href ? 
                                                <NavLink to={ul_item.item_href[li_index]} className="main_menu_block_item_link">{li_item}</NavLink>
                                            : 
                                                <span style={{cursor: "pointer"}} className="main_menu_block_item_link active">{li_item}</span>
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
//@ts-ignore
const mapStateToProps = (state) => {
	return {
        changeSelector: state.changeSelector,
        changePage: state.changePage,
    }
};
//@ts-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        //@ts-ignore
        changeSel: (cs) => {
            dispatch({ type: 'CHANGE_SELECTOR', cs : cs });
        },
        //@ts-ignore
        changePg: (pg) => {
            dispatch({ type: 'CHANGE_PAGE', page : pg });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMenu));