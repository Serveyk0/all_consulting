import React from 'react';
import { href_component } from "./constant";
import { NavLink, Link } from "react-router-dom";
import "./main_menu.sass";
import { connect } from 'react-redux';

const MainMenu = ( props: any ): JSX.Element =>  
{
    const {changeSel} = props;

    const changeSelect = (li_index: number) => 
    {
        changeSel(li_index)
    }
    return (
        <div id="main_menu" className="main_menu">
            {
                Object.values(href_component).map((ul_item, ul_index) => { 
                    let check_link = ul_index + 1 === Object.values(href_component).length ? true : false;
                    return ( 
                    <React.Fragment key={ul_index}>
                        {!check_link ? <NavLink  to={ul_item.name_href} className="main_menu_title">{ul_item.name}</NavLink>
                        :
                        <Link to={ul_item.name_href} className="main_menu_title">{ul_item.name}</Link>}
                        <ul className="main_menu_block">       
                            {
                                Object.values(ul_item.item_array).map((li_item: string, li_index: number) => { return ( 
                                    <li key={li_index} className="main_menu_block_item">
                                        {!check_link ? <NavLink to={ul_item.item_href[li_index]} className="main_menu_block_item_link">{li_item}</NavLink>
                                        : 
                                        <Link to= { ul_item.item_href[li_index] } 
                                        className="main_menu_block_item_link" onClick={ () => changeSelect(li_index) }>{li_item}</Link>}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);