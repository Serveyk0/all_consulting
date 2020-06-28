import React from 'react';
import "./aaps.sass";
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const AAPS = (  ) =>  
{
    show();
    return (
        <div className="aaps">       
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
    )
}