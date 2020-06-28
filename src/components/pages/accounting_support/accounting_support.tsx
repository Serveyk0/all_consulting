import React from 'react';
import "./accounting_support.sass";
import { show } from '../../show';
import { check_title } from '../../check_title';
import { main_text, title } from "./constant";
import "../../common_styles.sass"
import { Helmet } from 'react-helmet';
//@ts-ignore
export const AccountingSupport = ( props ) =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;
    return (
        <div className="accounting_support">
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <div className="common_text">
            {
                //@ts-ignore
                main_text.map((item, index: number) => 
                {
                    return (    
                        //@ts-ignore
                        Object.values(item.text).map((tag_item, tag_index: number ) => { return ( 
                            item.tag === "span" ? <span key={tag_index} className="bold_text">{tag_item}</span> :
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