import React from 'react';
import "./accounting_events.sass";
import { show } from '../../show';
//@ts-ignore
import { main_text, title } from "./constant.ts";
//@ts-ignore
import { check_title } from '../../check_title.tsx';
import "../../common_styles.sass";

export const AccountingEvents: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="accounting_events">
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <p className="common_text">{main_text}</p>
        </div>
    )
}