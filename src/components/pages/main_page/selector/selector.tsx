import React, { useState } from 'react';
import { selection_array, select_object, selector_props } from "./constant";

import "./selector.sass";
import { Form } from './form/form';

export const Selector = ( props: selector_props ) =>  
{
    const { selector_props } = props;

    const [select_index, set_select_index] = useState(0);
    const [select_item, set_select_item] = useState(selection_array[0]);

    const handle_change = ( index: number ) => 
    {
        set_select_index(index);
        set_select_item(selection_array[index]);
    }

    if ( selector_props !== select_index )
    {
        set_select_index(selector_props);
        set_select_item(selection_array[selector_props]);
    }

    return (
        <div className="selector">
            <div className="selector_change_items">
                {selection_array.map((item: select_object, index: number) => { return ( 
                    <span key={index} className={"item" + (select_index === index ? " active_item" : "")} onClick={ () => handle_change(index) }>{item.item}</span>
                )})}     
            </div>
            <div className="selector_description_items">
                {
                    select_item.description === "" ? <Form /> :
                    <span className="description active_description" >{select_item.description}</span>
                }   
            </div>
        </div>
    )
}