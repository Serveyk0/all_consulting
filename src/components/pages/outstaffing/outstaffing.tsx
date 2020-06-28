import React from 'react';
import "./outstaffing.sass";
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const Outstaffing = (  ) =>  
{
    show();
    return (
        <div className="outstaffing">
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
    )
}