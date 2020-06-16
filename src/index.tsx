import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, HashRouter } from 'react-router-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App menu={true}>
        <Switch>
          <Route exact path='/'                           component={MainPage} />
          <Route exact path='/additional-services'        component={AdditionalServices} />
          <Route exact path='/business-invitations'       component={BusinessInvitations} />
          <Route exact path='/commercial-invitations'     component={CommercialInvitations} />
          <Route exact path='/medical_services'           component={MedicalServices} />
          <Route exact path='/notarized_translations'     component={NotarizedTranslations} />
          <Route exact path='/outstaffing'                component={Outstaffing} />
          <Route exact path='/passport_and_visa_services' component={PassportAndVisaServices} />
          <Route exact path='/renewal_of_work_visas'      component={RenewalOfWorkVisas} />
          <Route exact path='/work_invitations'           component={WorkInvitations} />
        </Switch>
      </App>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
