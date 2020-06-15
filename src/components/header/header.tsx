import React, { useState } from 'react';
import logo from "../../media/main_page/logo.png";
import { phone_1, phone_2, address, work_day, search } from "./constant";

import "./header.sass";

export const Header: React.FC = (  ): JSX.Element =>  
{
    const [search_val, set_search_val] = useState("");
    const change_value = ( event: any ) => 
        set_search_val ( event.target.value );

    console.log(search_val);
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
                    <input type="text" className="search_text" onChange={change_value} />
                    <button className="search_button" >{search}</button>
                </div>
            </div>
        </header>
    )
}