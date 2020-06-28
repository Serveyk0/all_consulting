import React from 'react';
import logo from "../../media/main_page/logo.png";
import { phone_1, phone_2, address, work_day, search } from "./constant";

import "./header.sass";
import { Link } from 'react-router-dom';

//@ts-ignore
export const Header = ( props ) =>  
{
    const { set_search, search_val, set_search_val } = props;
    //@ts-ignore
    const change_value = ( event ) => 
        set_search_val ( event.target.value );
    //@ts-ignore
    const press_enter = ( event ) => 
        event.which === 13 ? set_search(search_val) : null

    return (
        <header className="header"> 
        {
            window.location.href.split("/")[4] === ""
            ?
                <span>
                    <img alt="все консультации" src={ logo } className="header_logo" />
                </span>
            :
                <Link to="/">
                    <img alt="все консультации" src={ logo } className="header_logo" />
                </Link>
        }
            <div className="header_contacts">
                <div className="header_contacts_phones">
                    <a href= { "tel:" + phone_1 } className="header_contacts_phones_one">{phone_1}</a>
                    <a href= { "tel:" + phone_2 } className="header_contacts_phones_one">{phone_2}</a>
                </div>
                <span className="header_contacts_address">{address}</span>
                <span className="header_contacts_days">{work_day}</span>
                <div className="search">
                    <input type="text" className="search_text" value={search_val} onKeyPress={press_enter} onChange={change_value} placeholder="Поиск"/>
                    <button className="search_button" onKeyPress={press_enter} onClick={ () => set_search(search_val) }>{search}</button>
                </div>
            </div>
        </header>
    )
}