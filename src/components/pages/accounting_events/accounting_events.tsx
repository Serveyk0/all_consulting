import React from 'react';
import "./accounting_events.sass";
import { show } from '../../show';
//@ts-ignore
import { main_text, title, description } from "./constant.ts";
//@ts-ignore
import { check_title } from '../../check_title.tsx';
import "../../common_styles.sass";
import Helmet from "react-helmet"
import { split_description } from "../split_description.js";

export const AccountingEvents: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    const desc = split_description(description);
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="accounting_events">
 {//@ts-ignore
            <Helmet
            htmlAttributes={{"lang": "en, ru, ua", "amp": undefined}} // amp takes no value
            title="All consulting"
            titleTemplate="All consulting"
            defaultTitle="All consulting"
            base={{"target": "_blank", "href": "/accounting_events"}}
            meta={[
                {"name": "description", "content": description},
                {"name": "keywords", "content": desc},
                {"name": "robots", "content": "index, all"},
                {"property": "og:type", "content": "article"}
            ]}
            />}
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <p className="common_text">{main_text}</p>
        </div>
    )
}