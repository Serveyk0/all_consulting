import React from 'react';
import "./medical_services.sass";
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const MedicalServices: React.FC = (  ): JSX.Element =>  
{
    show();
    return (
        <div className="medical_services">
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
    )
}