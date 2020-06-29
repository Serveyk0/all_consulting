import React from 'react';
import "./business_events.sass";
import { show } from '../../show';
import { main_text, title } from "./constant";
import { check_title } from '../../check_title';
import {Helmet} from "react-helmet";
import "../../common_styles.sass";

export const BusinessEvents: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="business_events">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content={main_text} />
                <meta name="keywords" content={main_text} />
            </Helmet>
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <p className="common_text">{main_text}</p>
        </div>
    )
}