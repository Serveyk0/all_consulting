import React from 'react';
import "./personnel_services.sass";
import { show } from '../../show';
import { title_1, title_2 } from "./constant";
import { check_title } from '../../check_title';
import { Helmet } from 'react-helmet';

export const PersonnelServices: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="personnel_services">
            <Helmet >
                <link rel="canonical" href={window.location.href} />
            </Helmet>
        <h1>
            { search !== "" ? ( check_title( search, title_1 ) ) : title_1}
        </h1>
            <h1>
                { search !== "" ? ( check_title( search, title_2 ) ) : title_2}
            </h1>
        </div>
    )
}