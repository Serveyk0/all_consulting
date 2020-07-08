import React from 'react';
import logo from "../../media/main_page/mainLogo.jpg";
import { phone_1, phone_2, address, work_day, search } from "./constant";

import "./header.sass";

export const Header = ( props: any ): JSX.Element =>  
{
    const { set_search, search_val, set_search_val } = props;
    const change_value = ( event: any ) => 
        set_search_val ( event.target.value );
    
    const press_enter = ( event : any ) => 
        event.which === 13 ? set_search(search_val) : null

    return (
        <header className="header"> 
            <a href="/#">
                <img alt="все консультации" src={ logo } className="header_logo" />
            </a>
            <div className="header_contacts">
                <div className="header_contacts_phones">
                    <a href= { "tel:" + phone_1 } className="header_contacts_phones_one">{phone_1}</a>
                    <a href= { "tel:" + phone_2 } className="header_contacts_phones_one">{phone_2}</a>
                </div>
                <span className="header_contacts_address">{address}</span>
                <span className="header_contacts_days">{work_day}</span>
                <div className="search">
                    <input type="text" className="search_text" value={search_val} onKeyPress={press_enter} onChange={change_value} placeholder={search} />
                    <button className="search_button" onKeyPress={press_enter} onClick={ () => set_search(search_val) }>{search}</button>
                </div>
            </div>
        </header>
    )
}