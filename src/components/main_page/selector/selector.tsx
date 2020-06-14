import React, { useState } from 'react';
import { selection_array, select_object, form_request_call, form_consultation } from "./constant";

import "./selector.sass";
import { Form } from './form/form';

export const Selector: React.FC = (  ): JSX.Element =>  
{
    const [select_item, set_select_item] = useState(0);

    const handle_change = ( index: number ) => 
        set_select_item(index);

    return (
        <div className="selector">
            <div className="selector_change_items">
                {selection_array.map((item: select_object, index: number) => { return ( 
                    <span key={index} className={"item" + (select_item == index ? " active_item" : "")} onClick={ () => handle_change(index) }>{item.item}</span>
                )})}     
            </div>
            <div className="selector_description_items">
                {selection_array.map((item: select_object, index: number) => { 
                    return (
                        item.description == "form_request_call" ? (<Form description_form={form_request_call} />) :
                        item.description == "form_consultation" ? (<Form description_form={form_consultation} />) :
                            (<span key={index} className={"description" + (select_item == index ? " active_description" : "")} onClick={ () => handle_change(index) }>{item.description}</span>)
                    )})}   
            </div>
        </div>
    )
}