import React from 'react';
import "./additional_services.sass";
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const AdditionalServices = (  ) =>  
{
    show();
    return (
        <div className="additional_services">
            <Helmet>
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
    )
}