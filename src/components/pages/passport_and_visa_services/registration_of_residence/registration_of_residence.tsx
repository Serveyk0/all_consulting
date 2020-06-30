import React from 'react';
import "./registration_of_residence.sass";
import { show } from '../../../show';
import { main_text, title } from "./constant";
import { check_title } from '../../../check_title';
import "../../../common_styles.sass";

export const RegistrationOfResidence: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="registration_of_residence">
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
                                            {li.text}
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