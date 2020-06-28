import React from 'react';
import "./business_events.sass";
import { show } from '../../show';
import { main_text, title } from "./constant";
import { check_title } from '../../check_title';
import "../../common_styles.sass";
import {Helmet} from "react-helmet";
//@ts-ignore
export const BusinessEvents = ( props ) =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="business_events">
            <Helmet>
                <meta charSet="UTF-8" />
                <title>{title}</title> 
                <meta name="keywords" content={main_text} /> 
                <meta name="description" content={"fmsafasklfl;ka"} />  
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <p className="common_text">{main_text}</p>
        </div>
    )
}