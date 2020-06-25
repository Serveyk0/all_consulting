import React from 'react';
import "./renewal_of_work_visas.sass";
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const RenewalOfWorkVisas: React.FC = (  ): JSX.Element =>  
{
    show();
    return (
        <div className="renewal_of_work_visas">
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
    )
}