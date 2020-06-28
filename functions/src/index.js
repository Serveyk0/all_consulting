"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.sass");

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _GetSwitch = require("./GetSwitch.jsx");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react.default.createElement(_GetSwitch.GetSwitch, null)))), document.getElementById('root'));