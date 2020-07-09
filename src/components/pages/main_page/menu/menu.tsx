import React from 'react';
import { NavLink } from "react-router-dom";
import "./menu.sass";
import { href_component_array, href } from "./constant";
import { connect } from 'react-redux';

type MenuProps = 
{
    changePg: Function
    changePage: any
}


const Menu = ( props: MenuProps): JSX.Element =>  
{
    const { changePg } = props;
    return (
        <div className="menu">
            {
                href_component_array.map((href_item: Array<href>, href_index: number) => { return ( 
                    <div key={href_index}>
                        {Object.values(href_item).map((ul_item, ul_index) => { return ( 
                            <React.Fragment key={ul_index}>
                                { ul_index + 1 !== Object.values(href_item).length ? "" : <div></div> }
                                <div>
                                    <NavLink to={ul_item.name_href} className="menu_title" onClick={ () => { changePg( href_index * 3 + ul_index)}}>{ul_item.name}</NavLink>
                                    <ul className="menu_block">       
                                        {
                                            Object.values(ul_item.item_array).map((li_item, li_index) => { return ( 
                                                <li key={li_index} className="menu_block_item">
                                                    <NavLink to={ul_item.item_href[li_index]} className="menu_block_item_link" onClick={ () => changePg(href_index * 3 + ul_index)}>{li_item}</NavLink>
                                                </li>
                                            )})
                                        }
                                    </ul>
                                </div>
                            </React.Fragment>
                        )})}
                    </div>
                )})
            }
        </div>
    )
}

const mapStateToProps = (state: any) => {
	return {
        changePage: state.changePage,
    }
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        changePg: (pg: any) => {
            dispatch({ type: 'CHANGE_PAGE', page : pg });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);