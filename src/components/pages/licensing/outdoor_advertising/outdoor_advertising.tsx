import React from 'react';
import "./outdoor_advertising.sass";
import { show } from '../../../show';
import { check_title } from '../../../check_title';
import { main_text, title } from "./constant";
import "../../../common_styles.sass"

export const OutdoorAdvertising: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;
    return (
        <div className="outdoor_advertising">
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <div className="common_text">
            {
                main_text.map((item: any, index: number) => 
                {
                    return (    
                        Object.values(item.text).map((tag_item: any, tag_index: number ) => { return ( 
                            item.tag === "span" ? <span key={tag_index} className={"bold_text " + item.class }>{tag_item}</span> :
                            item.tag === "" ? <span key={tag_index}>{tag_item}</span> :
                            item.tag === "p" ? <p key={tag_index}>{tag_item}</p> :
                            <li className="list_style" key={tag_index}>{tag_item}</li>
                    )}) 
                )})
            }    
            </div>
        </div>
    )
}