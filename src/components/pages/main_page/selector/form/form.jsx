import React, { useState } from 'react';
import { send, reset, form_request_call } from './constant';

import "./form.sass";

export const Form = (  ) =>  
{
    const [field_1, set_field_1] = useState("");
    const [field_2, set_field_2] = useState("");
    const [field_3, set_field_3] = useState("");
    const [field_4, set_field_4] = useState("");
    const [field_5, set_field_5] = useState("");

    const fields_array =
    [
        [field_1, set_field_1],
        [field_2, set_field_2],
        [field_3, set_field_3],
        [field_4, set_field_4],
        [field_5, set_field_5], 
    ]

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const body = {
            field_1: field_1,
            field_2: field_2, 
            field_3: field_3,
            field_4: field_4,
            field_5: field_5
        }
        fetch('/sendMail', {
            method: 'POST',
            body: JSON.stringify(body),
          })
            .then(response => {
              console.log(response.status);
            })
            .catch(err => {
                console.log(500);
            })
        reset_form();
    }

    const reset_form = ( ) => 
    {
        for (let i = 0; i < fields_array.length; i ++ )
            fields_array[i][1]("");
    }
//@ts-ignore
    const change_field = ( event, set_field ) => 
        set_field(event.target.value);


    return (
        <div className="wrapper_form">
            <form className="form">
                
                {form_request_call.map(
                    //@ts-ignore
                    (item, index) => { return ( 
                    <div key={index} className="form_field">
                        <span className="form_field_text">{item}</span>
                        {Object.keys(form_request_call).length > index + 1
                        ?
                            <input type="text" value={fields_array[index][0]} className="form_field_input" name={item} onChange={(e) => change_field(e, fields_array[index][1])} />
                        :
                            <textarea className="form_field_textarea" value={fields_array[index][0]} name={item} onChange={(e) => change_field(e, fields_array[index][1])} ></textarea>
                        }
                    </div>
                )})}
                <div className="form_field_button">
                    <span className="form_field_button_reset" onClick={reset_form}>{reset}</span>
                    <span className="form_field_button_send" onClick={handleSubmit}>{send}</span>
                </div>
            </form>
            <div className="form_button">

            </div>     
        </div>
    )
}