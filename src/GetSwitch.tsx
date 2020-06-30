import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './components/pages/main_page/main_page';
import { LegalServices } from './components/pages/legal_services/legal_services';
import { PersonnelAccounting } from './components/pages/accounting_events/personnel_accounting/personnel_accounting';
import { TaxConsulting } from './components/pages/accounting_events/tax_consulting/tax_consulting';
import { JobDescriptions } from './components/pages/legal_services/job_descriptions/job_descriptions';
import { DevelopmentOfContracts } from './components/pages/legal_services/development_of_contracts/development_of_contracts';
import { RegistrationOfALegalEntity } from './components/pages/legal_services/registration_of_a_legal_entity/registration_of_a_legal_entity';
import { AccountingEvents } from './components/pages/accounting_events/accounting_events';
import { Accounting } from './components/pages/accounting_events/accounting/accounting';
import { AccountingSupport } from './components/pages/accounting_events/accounting_support/accounting_support';
import { LiquidationOfALegalEntity } from './components/pages/legal_services/liquidation_of_a_legal_entity/liquidation_of_a_legal_entity';
import { PassportAndVisaServices } from './components/pages/passport_and_visa_services/passport_and_visa_services';
import { TemporaryResidence } from './components/pages/passport_and_visa_services/temporary_residence/temporary_residence';
import { PermanentResidence } from './components/pages/passport_and_visa_services/permanent_residence/permanent_residence';
import { RegistrationOfResidence } from './components/pages/passport_and_visa_services/registration_of_residence/registration_of_residence';
import { Insurance } from './components/pages/passport_and_visa_services/insurance/insurance';
import { Invitation } from './components/pages/passport_and_visa_services/invitation/invitation';
import { EventManagement } from './components/pages/event-management/event-management';
import { Forums } from './components/pages/event-management/forums/forums';
import { Festivals } from './components/pages/event-management/festivals/festivals';
import { Tranings } from './components/pages/event-management/tranings/tranings';
import { Licensing } from './components/pages/licensing/licensing';
import { EducationalActivity } from './components/pages/licensing/educational_activity/educational_activity';
import { OutdoorAdvertising } from './components/pages/licensing/outdoor_advertising/outdoor_advertising';
import { IntellectualProperty } from './components/pages/licensing/intellectual_property/intellectual_property';

export const GetSwitch = ( ) => {
	return(
		<Switch>
            <Route exact path='/'                                                                    component={MainPage} />
            <Route exact path='/accounting_events'                                                   component={AccountingEvents} />
            <Route path='/accounting_events/tax_consulting'                                          component={TaxConsulting} />
            <Route path='/accounting_events/personnel_accounting'                                    component={PersonnelAccounting} />
            <Route path='/accounting_events/accounting_support'                                      component={AccountingSupport} />
            <Route path='/accounting_events/accounting'                                              component={Accounting} />

            <Route exact path='/legal_services'                                                      component={LegalServices} />
            <Route path='/legal_services/registration_of_a_legal_entity'                             component={RegistrationOfALegalEntity} />
            <Route path='/legal_services/liquidation_of_a_legal_entity'                              component={LiquidationOfALegalEntity} />
            <Route path='/legal_services/development_of_contracts'                                   component={DevelopmentOfContracts} />
            <Route path='/legal_services/job_descriptions'                                           component={JobDescriptions} />
            
            <Route exact path='/passport_and_visa_services'                                          component={PassportAndVisaServices} />
            <Route path='/passport_and_visa_services/temporary_residence'                            component={TemporaryResidence} />
            <Route path='/passport_and_visa_services/permanent_residence'                            component={PermanentResidence} />
            <Route path='/passport_and_visa_services/registration_of_residence'                      component={RegistrationOfResidence} />
            <Route path='/passport_and_visa_services/insurance'                                      component={Insurance} />
            <Route path='/passport_and_visa_services/invitation'                                     component={Invitation} />
            
            <Route exact path='/event-management'                                                    component={EventManagement} />
            <Route path='/event-management/forums'                                                   component={Forums} />
            <Route path='/event-management/festivals'                                                component={Festivals} />
            <Route path='/event-management/tranings'                                                 component={Tranings} />
            
            <Route exact path='/licensing'                                                           component={Licensing} />
            <Route path='/licensing/educational_activity'                                            component={EducationalActivity} />
            <Route path='/licensing/outdoor_advertising'                                             component={OutdoorAdvertising} />
            <Route path='/licensing/intellectual_property'                                           component={IntellectualProperty} />
        </Switch>
        )
    }