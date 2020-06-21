import React, { useState } from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { href_component } from "./constant";
import { show } from '../show';
import "./main_menu.sass";
import { Search } from '../search/search';

const MainMenu = ( props: any ): JSX.Element =>  
{
    const {changeSel} = props;
    const [path, set_path] = useState("");
    const changeSelect = ( li_index: number ) => 
        changeSel(li_index)

    if ( path !== window.location.href.split('/')[4])
        set_path(window.location.href.split('/')[4])

    show()
    return (
        <div id="main_menu" className="main_menu">
            <Search />
            {
                Object.values(href_component).map((ul_item, ul_index) => { 
                    let check_link = ul_index + 1 === Object.values(href_component).length ? true : false;
                    return ( 
                    <React.Fragment key={ul_index}>
                        <div className="wrapper_div">
                        {!check_link ? <NavLink  to={ul_item.name_href} className="main_menu_title">{ul_item.name}</NavLink>
                        :
                        <Link to={ul_item.name_href} className="main_menu_title">{ul_item.name}</Link>}
                        <ul id={ul_item.name} className={"main_menu_block" + ( "/" + path === ul_item.name_href ? " main_menu_block_active" : "")}>       
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
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSel: (cs: any) => {
            dispatch({ type: 'CHANGE_SELECTOR', cs : cs });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMenu));