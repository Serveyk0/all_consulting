import React from 'react';
//@ts-ignore
import { MySlider } from "./slider/slider.tsx";
import "./main_page.sass";
//@ts-ignore
import Selector from './selector/selector.tsx';
//@ts-ignore
import Menu from './menu/menu.tsx';
import { show } from './../../show';
//@ts-ignore
import { description } from "./constant.ts";
import "../../common_styles.sass"
import Helmet from "react-helmet";
import { split_description } from "../split_description.js";

export const MainPage = ( ): JSX.Element =>  
{
    const desc = split_description(description);
    show();
    return (
        <div className="main_page">
            {//@ts-ignore
            <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
            title="All consulting"
            titleTemplate="All consulting"
            defaultTitle="All consulting"
            base={{"target": "_blank", "href": "/"}}
            meta={[
                {"name": "description", "content": description},
                {"name": "keywords", "content": desc},
                {"name": "robots", "content": "index, all"},
                {"property": "og:type", "content": "article"}
            ]}
            link={[
                {"rel": "canonical", "href": "https://myportfolio-4823d.web.app/accounting_events"},
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
            <MySlider />
            <div className="main_page_description">
                <div className="main_page_description_selector">
                    <Selector />
                </div>
                <Menu />
            </div>
        </div>
    )
}