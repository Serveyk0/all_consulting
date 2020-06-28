"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetSwitch = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _main_page = require("./components/pages/main_page/main_page.js");

var _App = require("./App.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
*/
var GetSwitch = function GetSwitch() {
  return /*#__PURE__*/_react.default.createElement(_App.App, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    rel: "canonical",
    exact: true,
    path: "/",
    component: _main_page.MainPage
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    from: "*",
    to: "/"
  })));
};

exports.GetSwitch = GetSwitch;