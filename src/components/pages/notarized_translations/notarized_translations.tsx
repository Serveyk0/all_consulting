import React from 'react';
import "./notarized_translations.sass";
import { show } from '../../show';
import { Helmet } from 'react-helmet';

export const NotarizedTranslations: React.FC = (  ): JSX.Element =>  
{
    show();
    return (
        <div className="notarized_translations">
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        </div>
    )
}