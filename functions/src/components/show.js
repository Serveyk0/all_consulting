"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = void 0;

var show = function show() {
  if (document.readyState === "complete") show_method();else document.body.onload = function () {
    show_method();
  };
};

exports.show = show;

var show_method = function show_method() {
  var foo = document.getElementById("main_menu");

  if (window.location.href.split("/")[4] !== "") {
    foo.classList.remove('hide_menu');
    foo.classList.add('show_menu');
  } else {
    foo.classList.remove('show_menu');
    foo.classList.add('hide_menu');
  }
};