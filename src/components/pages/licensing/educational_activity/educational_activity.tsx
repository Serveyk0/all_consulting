import React from 'react';
import "./educational_activity.sass";
import { show } from '../../../show';
//@ts-ignore
import { check_title } from '../../../check_title.tsx';
//@ts-ignore
import { main_text, title } from "./constant.ts";
import "../../../common_styles.sass"

export const EducationalActivity: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;
    return (
        <div className="educational_activity">
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <div className="common_text">
            {
                main_text.map((item: any, index: number) => 
                {
                    return (    
                        Object.values(item.text).map((tag_item: any, tag_index: number ) => { return ( 
                            item.tag === "span" ? <span key={tag_index} className={item.class}>{tag_item}</span> :
                            item.tag === "" ? <span key={tag_index}>{tag_item}</span> :
                            item.tag === "p" ? <p key={tag_index}>{tag_item}</p> :
                            <li className={"list_style " + item.class} key={tag_index}>{tag_item}</li>
                    )}) 
                )})
            }    
            </div>
        </div>
    )
}