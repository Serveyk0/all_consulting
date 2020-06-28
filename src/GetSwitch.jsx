import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from './components/pages/main_page/main_page.jsx';
/*import { AdditionalServices } from './components/pages/additional_services/additional_services';
import { PersonnelAccounting } from './components/pages/personnel_accounting/personnel_accounting';
import { TaxConsulting } from './components/pages/tax_consulting/tax_consulting';
import { MedicalServices } from './components/pages/medical_services/medical_services';
import { NotarizedTranslations } from './components/pages/notarized_translations/notarized_translations';
import { Outstaffing } from './components/pages/outstaffing/outstaffing';
import { BusinessEvents } from './components/pages/business_events/business_events';
import { RenewalOfWorkVisas } from './components/pages/renewal_of_work_visas/renewal_of_work_visas';
import { AccountingSupport } from './components/pages/accounting_support/accounting_support';
import { PersonnelServices } from './components/pages/personnel_services/personnel_services';
import { AAPS } from './components/pages/accounting_and_personnel_support/aaps';
*/import { App } from './App.jsx';

export const GetSwitch = ( ) => {
    
	return(
        <App>
		<Switch>
            <Route rel="canonical" exact path='/'                                                                    component={MainPage} />
            {/* <Route exact path='/additional_services'                                                 component={AdditionalServices} />
            <Route path='/business_events/tax_consulting'                     component={TaxConsulting} />
            <Route path='/business_events/personnel_accounting'                   component={PersonnelAccounting} />
            <Route path='/additional_services/medical_services'                                component={MedicalServices} />
            <Route path='/additional_services/notarized_translations'                          component={NotarizedTranslations} />
            <Route path='/additional_services/outstaffing'                                     component={Outstaffing} />
            <Route exact path='/business_events'                                          component={BusinessEvents} />
            <Route path='/business_events/renewal_of_work_visas'                    component={RenewalOfWorkVisas} />
            <Route path='/business_events/accounting_support'                         component={AccountingSupport} />
            <Route path='/additional_services/personnel_services'                              component={PersonnelServices} />
            <Route path='/additional_services/accounting_and_personnel_support'                component={AAPS} />*/}
            <Redirect from='*' to='/' /> 
        </Switch>
        </App>
        )
    }
