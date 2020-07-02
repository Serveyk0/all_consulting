import React from 'react';
import { Switch, Route } from 'react-router-dom';
//@ts-ignore
import { MainPage } from './components/pages/main_page/main_page.tsx';
//@ts-ignore
import { LegalServices } from './components/pages/legal_services/legal_services.tsx';
//@ts-ignore
import { PersonnelAccounting } from './components/pages/accounting_events/personnel_accounting/personnel_accounting.tsx';
//@ts-ignore
import { TaxConsulting } from './components/pages/accounting_events/tax_consulting/tax_consulting.tsx';
//@ts-ignore
import { JobDescriptions } from './components/pages/legal_services/job_descriptions/job_descriptions.tsx';
//@ts-ignore
import { DevelopmentOfContracts } from './components/pages/legal_services/development_of_contracts/development_of_contracts.tsx';
//@ts-ignore
import { RegistrationOfALegalEntity } from './components/pages/legal_services/registration_of_a_legal_entity/registration_of_a_legal_entity.tsx';
//@ts-ignore
import { AccountingEvents } from './components/pages/accounting_events/accounting_events.tsx';
//@ts-ignore
import { Accounting } from './components/pages/accounting_events/accounting/accounting.tsx';
//@ts-ignore
import { AccountingSupport } from './components/pages/accounting_events/accounting_support/accounting_support.tsx';
//@ts-ignore
import { LiquidationOfALegalEntity } from './components/pages/legal_services/liquidation_of_a_legal_entity/liquidation_of_a_legal_entity.tsx';
//@ts-ignore
import { PassportAndVisaServices } from './components/pages/passport_and_visa_services/passport_and_visa_services.tsx';
//@ts-ignore
import { TemporaryResidence } from './components/pages/passport_and_visa_services/temporary_residence/temporary_residence.tsx';
//@ts-ignore
import { PermanentResidence } from './components/pages/passport_and_visa_services/permanent_residence/permanent_residence.tsx';
//@ts-ignore
import { RegistrationOfResidence } from './components/pages/passport_and_visa_services/registration_of_residence/registration_of_residence.tsx';
//@ts-ignore
import { Insurance } from './components/pages/passport_and_visa_services/insurance/insurance.tsx';
//@ts-ignore
import { Invitation } from './components/pages/passport_and_visa_services/invitation/invitation.tsx';
//@ts-ignore
import { EventManagement } from './components/pages/event-management/event-management.tsx';
//@ts-ignore
import { Forums } from './components/pages/event-management/forums/forums.tsx';
//@ts-ignore
import { Festivals } from './components/pages/event-management/festivals/festivals.tsx';
//@ts-ignore
import { Tranings } from './components/pages/event-management/tranings/tranings.tsx';
//@ts-ignore
import { Licensing } from './components/pages/licensing/licensing.tsx';
//@ts-ignore
import { EducationalActivity } from './components/pages/licensing/educational_activity/educational_activity.tsx';
//@ts-ignore
import { OutdoorAdvertising } from './components/pages/licensing/outdoor_advertising/outdoor_advertising.tsx';
//@ts-ignore
import { IntellectualProperty } from './components/pages/licensing/intellectual_property/intellectual_property.tsx';

export const GetSwitch = ( ) => {
	return(
		<Switch>
            <Route exact path='/'                                                                    component={MainPage} />
            <Route path='/accounting_events'                                                   component={AccountingEvents} />
            <Route path='/tax_consulting'                                          component={TaxConsulting} />
            <Route path='/personnel_accounting'                                    component={PersonnelAccounting} />
            <Route path='/accounting_support'                                      component={AccountingSupport} />
            <Route path='/accounting'                                              component={Accounting} />

            <Route path='/legal_services'                                                      component={LegalServices} />
            <Route path='/registration_of_a_legal_entity'                             component={RegistrationOfALegalEntity} />
            <Route path='/liquidation_of_a_legal_entity'                              component={LiquidationOfALegalEntity} />
            <Route path='/development_of_contracts'                                   component={DevelopmentOfContracts} />
            <Route path='/job_descriptions'                                           component={JobDescriptions} />

            <Route path='/passport_and_visa_services'                                          component={PassportAndVisaServices} />
            <Route path='/temporary_residence'                            component={TemporaryResidence} />
            <Route path='/permanent_residence'                            component={PermanentResidence} />
            <Route path='/registration_of_residence'                      component={RegistrationOfResidence} />
            <Route path='/insurance'                                      component={Insurance} />
            <Route path='/invitation'                                     component={Invitation} />
            
            <Route path='/event-management'                                                    component={EventManagement} />
            <Route path='/forums'                                                   component={Forums} />
            <Route path='/festivals'                                                component={Festivals} />
            <Route path='/tranings'                                                 component={Tranings} />
            
            <Route path='/licensing'                                                           component={Licensing} />
            <Route path='/educational_activity'                                            component={EducationalActivity} />
            <Route path='/outdoor_advertising'                                             component={OutdoorAdvertising} />
            <Route path='/intellectual_property'                                           component={IntellectualProperty} />
        </Switch>
        )
    }