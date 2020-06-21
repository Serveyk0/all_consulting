import React from 'react';
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

export const GetSwitch = ( ) => {
	return(
		<Switch>
            <Route exact path='/'                                                                    component={MainPage} />
            <Route exact path='/additional_services'                                                 component={AdditionalServices} />
            <Route path='/passport_and_visa_services/business_invitations'                     component={BusinessInvitations} />
            <Route path='/passport_and_visa_services/commercial_invitations'                   component={CommercialInvitations} />
            <Route path='/additional_services/medical_services'                                component={MedicalServices} />
            <Route path='/additional_services/notarized_translations'                          component={NotarizedTranslations} />
            <Route path='/additional_services/outstaffing'                                     component={Outstaffing} />
            <Route exact path='/passport_and_visa_services'                                          component={PassportAndVisaServices} />
            <Route path='/passport_and_visa_services/renewal_of_work_visas'                    component={RenewalOfWorkVisas} />
            <Route path='/passport_and_visa_services/work_invitations'                         component={WorkInvitations} />
            <Route path='/additional_services/personnel_services'                              component={PersonnelServices} />
            <Route path='/additional_services/accounting_and_personnel_support'                component={AAPS} />
        </Switch>
        )
    }
