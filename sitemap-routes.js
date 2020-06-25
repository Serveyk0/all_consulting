import React from 'react';
import { Route, Switch } from 'react-router';
 
export default (
    <Route>
            <Route exact path='/additional_services' />
            <Route path='/business_events/tax_consulting' />
            <Route path='/business_events/personnel_accounting' />
            <Route path='/additional_services/medical_services' />
            <Route path='/additional_services/notarized_translations' />
            <Route path='/additional_services/outstaffing' />
            <Route exact path='/business_events' />
            <Route path='/business_events/renewal_of_work_visas' />
            <Route path='/business_events/accounting_support' />
            <Route path='/additional_services/personnel_services'/>
            <Route path='/additional_services/accounting_and_personnel_support' />
    </Route>
);