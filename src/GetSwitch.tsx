import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './components/pages/main_page/main_page';
import { AdditionalServices } from './components/pages/additional_services/additional_services';
import { BusinessInvitations } from './components/pages/business_invitations/business_invitations';
import { CommercialInvitations } from './components/pages/commercial_invitations/commercial_invitations';
import { MedicalServices } from './components/pages/medical_services/medical_services';
import { NotarizedTranslations } from './components/pages/notarized_translations/notarized_translations';
import { Outstaffing } from './components/pages/outstaffing/outstaffing';
import { PassportAndVisaServices } from './components/pages/passport_and_visa_services/passport_and_visa_services';
import { RenewalOfWorkVisas } from './components/pages/renewal_of_work_visas/renewal_of_work_visas';
import { WorkInvitations } from './components/pages/work_invitations/work_invitations';
import { PersonnelServices } from './components/pages/personnel_services/personnel_services';
import { AAPS } from './components/pages/accounting_and_personnel_support/aaps';

export class GetSwitch extends React.Component {
    render () {
    const [ select_item, set_select_item ] = useState(0);
	return(
		<Switch>
            <Route exact path='/'                                         render={() => { return( <MainPage selector_props={select_item} />)}}/>
            <Route exact path='/additional_services'                      component={AdditionalServices} />
            <Route exact path='/business_invitations'                     component={BusinessInvitations} />
            <Route exact path='/commercial_invitations'                   component={CommercialInvitations} />
            <Route exact path='/medical_services'                         component={MedicalServices} />
            <Route exact path='/notarized_translations'                   component={NotarizedTranslations} />
            <Route exact path='/outstaffing'                              component={Outstaffing} />
            <Route exact path='/passport_and_visa_services'               component={PassportAndVisaServices} />
            <Route exact path='/renewal_of_work_visas'                    component={RenewalOfWorkVisas} />
            <Route exact path='/work_invitations'                         component={WorkInvitations} />
            <Route exact path='/personnel_services'                       component={PersonnelServices} />
            <Route exact path='/accounting_and_personnel_support'         component={AAPS} />
        </Switch>
        )
    }
};