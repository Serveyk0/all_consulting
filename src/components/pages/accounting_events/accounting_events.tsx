import React from 'react';
import "./accounting_events.sass";
import { show } from '../../show';
//@ts-ignore
import { main_text, title, description } from "./constant.ts";
//@ts-ignore
import { check_title } from '../../check_title.tsx';
import "../../common_styles.sass";
import Helmet from "react-helmet"
import { split_description } from "../split_description.js";

export const AccountingEvents: React.FC = ( props: any ): JSX.Element =>  
{
    show();
    const desc = split_description(description);
    let search: string = "";
    if ( typeof props.location.propsSearch !== "undefined" )
        search = props.location.propsSearch;

    return (
        <div className="accounting_events">
 {//@ts-ignore
            <Helmet
            htmlAttributes={{"lang": "en, ru, ua", "amp": undefined}} // amp takes no value
            title="All consulting"
            titleTemplate="All consulting"
            defaultTitle="All consulting"
            base={{"target": "_blank", "href": "/accounting_events"}}
            meta={[
                {"name": "description", "content": description},
                {"name": "keywords", "content": desc},
                {"name": "robots", "content": "index, all"},
                {"property": "og:type", "content": "article"}
            ]}
            link={[
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/tax_consulting"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/personnel_accounting"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/accounting_support"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/accounting"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/legal_services"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/registration_of_a_legal_entity"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/liquidation_of_a_legal_entity"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/development_of_contracts"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/job_descriptions"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/passport_and_visa_services"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/temporary_residence"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/personnel_accounting"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/registration_of_residence"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/insurance"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/invitation"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/event-management"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/forums"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/festivals"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/tranings"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/licensing"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/educational_activity"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/outdoor_advertising"},
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/intellectual_property"},
            ]}
            />}
            <h1 className="common_title">
                { search !== "" ? ( check_title( search, title ) ) : title}
            </h1>
            <p className="common_text">{main_text}</p>
        </div>
    )
}