"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainPage = void 0;

var _react = _interopRequireDefault(require("react"));

var _slider = require("./slider/slider.js");

var _selector = _interopRequireDefault(require("./selector/selector.js"));

var _menu = _interopRequireDefault(require("./menu/menu.js"));

var _show = require("../../show");

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // import "./main_page.sass";
var MainPage = function MainPage() {
  (0, _show.show)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "main_page"
  }, "kljlkjlj", /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: window.location.href
  })), /*#__PURE__*/_react.default.createElement(_slider.MySlider, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "main_page_description"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main_page_description_selector"
  }, /*#__PURE__*/_react.default.createElement(_selector.default, null)), /*#__PURE__*/_react.default.createElement(_menu.default, null)));
};

exports.MainPage = MainPage;