import React from 'react';
import "./passport_and_visa_services.sass";
import { show } from '../../show';
import { main_text, title } from "./constant";

export const PassportAndVisaServices: React.FC = (  ): JSX.Element =>  
{
    show();
    return (
        <div className="passport_and_visa_services">
            <h1>{title}</h1>
            <p>{main_text}</p>
        </div>
    )
}