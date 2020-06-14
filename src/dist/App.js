"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var header_1 = require("./components/header/header");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(header_1.Header, null)));
}
exports["default"] = App;
