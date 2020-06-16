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

    const handleSubmit = (e: React.MouseEvent) => 
    {
        e.preventDefault();
        const body = {
            field_1: "kukljlj",
            field_2: field_2, 
            field_3: field_3,
            field_4: field_4,
            field_5: field_5,
            name: description_form[description_form.length - 1]
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

    const reset_form = ( ): void => 
    {
        for (let i : number = 0; i < fields_array.length; i ++ )
            fields_array[i][1]("");
    }

    const change_field = ( event: any, set_field: Function ) => 
        set_field(event.target.value);
    const {description_form} = props;


    return (
        <div className="wrapper_form">
            <form className="form">
                {description_form.map((item: any, index: number) => { return ( 
                    <div key={index} className="form_field">
                        { Object.keys(description_form).length > index + 1 ? <span className="form_field_text">{item}</span> : "" }
                        {Object.keys(description_form).length > index + 2
                        ?
                            <input type="text" value={fields_array[index][0]} className="form_field_input" name={item} onChange={(e) => change_field(e, fields_array[index][1])} />
                        :
                        Object.keys(description_form).length > index + 1 
                        ?
                            <textarea className="form_field_textarea" value={fields_array[index][0]} name={item} onChange={(e) => change_field(e, fields_array[index][1])} ></textarea>
                        :
                        ""
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