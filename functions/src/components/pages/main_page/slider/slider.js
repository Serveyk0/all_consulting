"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MySlider = void 0;

var _react = _interopRequireDefault(require("react"));

var _infiniteReactCarousel = _interopRequireDefault(require("infinite-react-carousel"));

var _constant = require("./constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MySlider = function MySlider() {
  var settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    swipe: false,
    wheel: true
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_infiniteReactCarousel.default, _extends({}, settings, {
    className: "slider"
  }), _constant.slides_array.map( //@ts-ignore
  function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "slider_slide"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "slider_slide_title"
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "title_1"
    }, item.title_1), /*#__PURE__*/_react.default.createElement("h2", {
      className: "title_2"
    }, item.title_2)), /*#__PURE__*/_react.default.createElement("div", {
      className: "slider_slide_image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: //@ts-ignore
      item.alt,
      src: item.img,
      className: "img"
    })));
  })));
};

exports.MySlider = MySlider;