import React from 'react';
import { Switch, Route } from 'react-router-dom';
//@ts-ignore
import { MainPage } from './components/pages/main_page/main_page.tsx';
//@ts-ignore
import { AdditionalServices } from './components/pages/additional_services/additional_services.tsx';
//@ts-ignore
import { PersonnelAccounting } from './components/pages/personnel_accounting/personnel_accounting.tsx';
//@ts-ignore
import { TaxConsulting } from './components/pages/tax_consulting/tax_consulting.tsx';
//@ts-ignore
import { MedicalServices } from './components/pages/medical_services/medical_services.tsx';
//@ts-ignore
import { NotarizedTranslations } from './components/pages/notarized_translations/notarized_translations.tsx';
//@ts-ignore
import { Outstaffing } from './components/pages/outstaffing/outstaffing.tsx';
//@ts-ignore
import { BusinessEvents } from './components/pages/business_events/business_events.tsx';
//@ts-ignore
import { RenewalOfWorkVisas } from './components/pages/renewal_of_work_visas/renewal_of_work_visas.tsx';
//@ts-ignore
import { AccountingSupport } from './components/pages/accounting_support/accounting_support.tsx';
//@ts-ignore
import { PersonnelServices } from './components/pages/personnel_services/personnel_services.tsx';
//@ts-ignore
import { AAPS } from './components/pages/accounting_and_personnel_support/aaps.tsx';

export const GetSwitch = ( ) => {
	return(
		<Switch>
            <Route exact path='/'                                                                    component={MainPage} />
            <Route exact path='/additional_services'                                                 component={AdditionalServices} />
            <Route path='/business_events/tax_consulting'                     component={TaxConsulting} />
            <Route path='/business_events/personnel_accounting'                   component={PersonnelAccounting} />
            <Route path='/additional_services/medical_services'                                component={MedicalServices} />
            <Route path='/additional_services/notarized_translations'                          component={NotarizedTranslations} />
            <Route path='/additional_services/outstaffing'                                     component={Outstaffing} />
            <Route exact path='/business_events'                                          component={BusinessEvents} />
            <Route path='/business_events/renewal_of_work_visas'                    component={RenewalOfWorkVisas} />
            <Route path='/business_events/accounting_support'                         component={AccountingSupport} />
            <Route path='/additional_services/personnel_services'                              component={PersonnelServices} />
            <Route path='/additional_services/accounting_and_personnel_support'                component={AAPS} />
        </Switch>
        )
    }
