"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var logo_png_1 = require("../../media/main_page/logo.png");
var constant_1 = require("./constant");
require("./header.sass");
exports.Header = function () {
    var _a = react_1.useState(""), search_val = _a[0], set_search_val = _a[1];
    var change_value = function (event) {
        return set_search_val(event.target.value);
    };
    return (react_1["default"].createElement("div", { className: "header" },
        react_1["default"].createElement("a", { href: "/#" },
            react_1["default"].createElement("img", { alt: "\u0432\u0441\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438", src: logo_png_1["default"], className: "header_logo" })),
        react_1["default"].createElement("div", { className: "header_contacts" },
            react_1["default"].createElement("div", { className: "header_contacts_phones" },
                react_1["default"].createElement("a", { href: "tel:" + constant_1.phone_1, className: "header_contacts_phones_one" }, constant_1.phone_1),
                react_1["default"].createElement("a", { href: "tel:" + constant_1.phone_2, className: "header_contacts_phones_one" }, constant_1.phone_2)),
            react_1["default"].createElement("span", { className: "header_contacts_address" }, constant_1.address),
            react_1["default"].createElement("span", { className: "header_contacts_days" }, constant_1.work_day),
            react_1["default"].createElement("div", { className: "search" },
                react_1["default"].createElement("input", { type: "text", className: "search_text", onChange: change_value }),
                react_1["default"].createElement("button", { className: "search_button" }, constant_1.search)))));
};
