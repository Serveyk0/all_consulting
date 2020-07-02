import React from 'react';
import "./registration_of_residence.sass";
import { show } from '../../../show';
//@ts-ignore
import { check_title } from '../../../check_title.tsx';
//@ts-ignore
import { main_text, title, description } from "./constant.ts";
import "../../../common_styles.sass"
import Helmet from "react-helmet";
import { split_description } from "../../split_description.js";

export const RegistrationOfResidence: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    const desc = split_description(description);
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="registration_of_residence">
            {//@ts-ignore
            <Helmet
            htmlAttributes={{"lang": "en, ru, ua", "amp": undefined}} // amp takes no value
            title="All consulting"
            titleTemplate="All consulting"
            defaultTitle="All consulting"
            base={{"target": "_blank", "href": "/registration_of_residence"}}
            meta={[
                {"name": "description", "content": description},
                //@ts-ignore
                {"name": "keywords", "content": desc},
                {"name": "robots", "content": "index, all"},
                {"property": "og:type", "content": "article"}
            ]}
            
            />}
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <div className="common_text">
            {
                main_text.map((item: any, index: number) => 
                {
                    return (    
                        Object.values(item.text).map((tag_item: any, tag_index: number ) => { console.log(item.tag === "");return ( 
                            item.tag === "span" ? <span key={tag_index} className={item.class}>{tag_item}</span> :
                            item.tag === "" ? <span key={tag_index}>{tag_item}</span> :
                            item.tag === "p" ? <p key={tag_index}>{tag_item}</p> :
                            item.tag === "ul" ? 
                            item.li_tags.map((tag_item_li: any, li_index: number) => { return (
                                <li  key={li_index} className="list_style">
                                {tag_item_li.map((li: any, index_li: number) => { 
                                    return ( 
                                    li.tag === "" ? 
                                        <span key={index_li} className={li.class}>
                                            {li.text}
                                        </span>
                                    :
                                    <ul key={index_li}>
                                    {li.text.map((li_in_li: any, index: number) => { return ( 
                                        <li key={index} className={li.class}>
                                            {li_in_li}
                                        </li>
                                        )})}
                                    </ul>
                                )})}
                                </li>
                            )})
                            : ""
                    )})  
                )})
            }    
            </div>
        </div>
    )
}