import React, { useState } from 'react';
import { send, reset } from './constant';

import "./form.sass";

export const Form = ( props: any ): JSX.Element =>  
{
    const [field_1, set_field_1] = useState("");
    const [field_2, set_field_2] = useState("");
    const [field_3, set_field_3] = useState("");
    const [field_4, set_field_4] = useState("");
    const [field_5, set_field_5] = useState("");

    const fields_array: Array<Array<any>> =
    [
        [field_1, set_field_1],
        [field_2, set_field_2],
        [field_3, set_field_3],
        [field_4, set_field_4],
        [field_5, set_field_5], 
    ]

    const reset_form = ( ): void => 
    {
        for ( let i: number = 0; i < fields_array.length; i++ )
            fields_array[i][1]("");
    }

    const change_field = ( event: any, set_field: Function ) => 
    {
        set_field(field);
    }

    console.log(field_1);
    const {description_form} = props;
    return (
        <div className="wrapper_form">
            <form className="form">
                {description_form.map((item: any, index: number) => { return ( 
                    <div key={index} className="form_field">
                        <span className="form_field_text">{item}</span>
                        {Object.keys(description_form).length != index + 1 
                        ?
                            <input type="text" className="form_field_input" name={item} onChange={() => change_field(fields_array[index][1])} />
                        :
                            <>
                                <textarea className="form_field_textarea" name={item}></textarea>
                            </>
                        }
                    </div>
                )})}
                <div className="form_field_button">
                    <button className="form_field_button_reset" onClick={() => reset_form()}>{reset}</button>
                    <button className="form_field_button_send">{send}</button>
                </div>
            </form>
            <div className="form_button">

            </div>     
        </div>
    )
}