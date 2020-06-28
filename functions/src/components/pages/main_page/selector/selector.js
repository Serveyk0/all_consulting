"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _constant = require("./constant");

var _reactRedux = require("react-redux");

var _form = require("./form/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./selector.sass";
//@ts-ignore
var Selector = function Selector(props) {
  var cs = props.changeSelector.cs;
  var changeSel = props.changeSel;

  var handle_change = function handle_change(index) {
    return changeSel(index);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selector"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selector_change_items"
  }, _constant.selection_array.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      className: "item" + (cs === index ? " active_item" : ""),
      onClick: function onClick() {
        return handle_change(index);
      }
    }, item.item);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "selector_description_items"
  }, _constant.selection_array[cs].description === "" ? /*#__PURE__*/_react.default.createElement(_form.Form, null) : /*#__PURE__*/_react.default.createElement("span", {
    className: "description active_description"
  }, _constant.selection_array[cs].description)));
}; //@ts-ignore


var mapStateToProps = function mapStateToProps(state) {
  return {
    changeSelector: state.changeSelector
  };
}; //@ts-ignore


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //@ts-ignore
    changeSel: function changeSel(cs) {
      dispatch({
        type: 'CHANGE_SELECTOR',
        cs: cs
      });
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Selector);

exports.default = _default;