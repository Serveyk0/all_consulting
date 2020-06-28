"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./menu.sass");

var _constant = require("./constant");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
  var changePg = props.changePg;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "menu"
  }, _constant.href_component_array.map(function (href_item, href_index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: href_index
    }, Object.values(href_item).map(function (ul_item, ul_index) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: ul_index
      }, ul_index + 1 !== Object.values(href_item).length ? "" : /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
        to: ul_item.name_href,
        className: "menu_title",
        onClick: function onClick() {
          changePg(href_index * 2 + ul_index);
        }
      }, ul_item.name), /*#__PURE__*/_react.default.createElement("ul", {
        className: "menu_block"
      }, Object.values(ul_item.item_array).map(function (li_item, li_index) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: li_index,
          className: "menu_block_item"
        }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
          to: ul_item.item_href[li_index],
          className: "menu_block_item_link",
          onClick: function onClick() {
            return changePg(href_index * 2 + ul_index);
          }
        }, li_item));
      }))));
    }));
  }));
}; //@ts-ignore


var mapStateToProps = function mapStateToProps(state) {
  return {
    changePage: state.changePage
  };
}; //@ts-ignore


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    //@ts-ignore
    changePg: function changePg(pg) {
      dispatch({
        type: 'CHANGE_PAGE',
        page: pg
      });
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Menu);

exports.default = _default;