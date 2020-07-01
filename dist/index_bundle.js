/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(29);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(47)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(95),
    getValue = __webpack_require__(98);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    getRawTag = __webpack_require__(60),
    objectToString = __webpack_require__(61);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(19);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(103),
    listCacheDelete = __webpack_require__(104),
    listCacheGet = __webpack_require__(105),
    listCacheHas = __webpack_require__(106),
    listCacheSet = __webpack_require__(107);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(109);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(49);
} else {}


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(92),
    mapCacheDelete = __webpack_require__(108),
    mapCacheGet = __webpack_require__(110),
    mapCacheHas = __webpack_require__(111),
    mapCacheSet = __webpack_require__(112);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowsPropTypes = exports.arrowsDefaultProps = exports.dotsPropTypes = exports.dotsDefaultProps = exports.autoplayProps = exports.propTypes = exports.defaultProps = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var autoplayProps = {
  autoplaySpeed: 3000
};
exports.autoplayProps = autoplayProps;
var defaultProps = {
  accessibility: true,
  //
  adaptiveHeight: false,
  //
  afterChange: null,
  //
  appendDots: function appendDots(dots) {
    return _react["default"].createElement("ul", {
      style: {
        display: 'block'
      }
    }, dots);
  },
  //
  arrows: true,
  //
  autoplay: false,
  //
  autoplaySpeed: 3000,
  //
  beforeChange: null,
  //
  centerMode: false,
  //
  arrowsScroll: 1,
  //
  centerPadding: 50,
  //
  className: '',
  //
  customPaging: function customPaging(i) {
    return _react["default"].createElement("button", {
      type: "button"
    }, i + 1);
  },
  //
  dots: false,
  //
  dotsClass: 'carousel-dots',
  //
  dotsScroll: 1,
  //
  draggable: true,
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  initialSlide: false,
  //
  lazyLoad: null,
  nextArrow: null,
  //
  onEdge: null,
  onInit: null,
  //
  onLazyLoadError: null,
  onReInit: null,
  //
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  //
  prevArrow: null,
  //
  responsive: null,
  rows: 1,
  //
  rtl: false,
  slide: 'div',
  slidesPerRow: 1,
  //
  slidesToShow: 1,
  //
  swipe: true,
  //
  swipeToSlide: false,
  vertical: false,
  duration: 200,
  //
  shift: 0,
  //
  gutter: 0,
  //
  fullWidth: false,
  //
  arrowsBlock: true,
  //
  autoplayScroll: 1,
  //
  onResize: function onResize() {},
  //
  onSwipe: function onSwipe() {},
  //
  wheel: false,
  wheelScroll: 1,
  virtualList: false,
  overScan: 2
};
exports.defaultProps = defaultProps;
var propTypes = {
  accessibility: _propTypes["default"].bool,
  adaptiveHeight: _propTypes["default"].bool,
  afterChange: _propTypes["default"].func,
  appendDots: _propTypes["default"].func,
  arrows: _propTypes["default"].bool,
  arrowsScroll: _propTypes["default"].number,
  autoplay: _propTypes["default"].bool,
  autoplaySpeed: _propTypes["default"].number,
  beforeChange: _propTypes["default"].func,
  centerMode: _propTypes["default"].bool,
  centerPadding: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  className: _propTypes["default"].string,
  cssEase: _propTypes["default"].string,
  customPaging: _propTypes["default"].func,
  dots: _propTypes["default"].bool,
  dotsClass: _propTypes["default"].string,
  dotsScroll: _propTypes["default"].number,
  draggable: _propTypes["default"].bool,
  easing: _propTypes["default"].string,
  edgeFriction: _propTypes["default"].number,
  fade: _propTypes["default"].bool,
  focusOnSelect: _propTypes["default"].bool,
  initialSlide: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]),
  lazyLoad: _propTypes["default"].bool,
  nextArrow: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].element]),
  onEdge: _propTypes["default"].func,
  onInit: _propTypes["default"].func,
  onLazyLoadError: _propTypes["default"].func,
  onReInit: _propTypes["default"].func,
  pauseOnDotsHover: _propTypes["default"].bool,
  pauseOnFocus: _propTypes["default"].bool,
  pauseOnHover: _propTypes["default"].bool,
  prevArrow: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].element]),
  responsive: _propTypes["default"].array,
  rows: _propTypes["default"].number,
  rtl: _propTypes["default"].bool,
  slide: _propTypes["default"].string,
  slidesPerRow: _propTypes["default"].number,
  slidesToShow: _propTypes["default"].number,
  swipe: _propTypes["default"].bool,
  swipeToSlide: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool,
  duration: _propTypes["default"].number,
  shift: _propTypes["default"].number,
  gutter: _propTypes["default"].number,
  fullWidth: _propTypes["default"].bool,
  arrowsBlock: _propTypes["default"].bool,
  autoplayScroll: _propTypes["default"].number,
  onResize: _propTypes["default"].func,
  onSwipe: _propTypes["default"].func,
  virtualList: _propTypes["default"].bool,
  overScan: _propTypes["default"].number
};
exports.propTypes = propTypes;
var dotsDefaultProps = {
  slideCount: 0,
  dotsScroll: 1,
  slidesToShow: 1,
  infinite: true,
  currentSlide: 0,
  clickHandler: function clickHandler() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseOver: function onMouseOver() {},
  onMouseLeave: function onMouseLeave() {},
  customPaging: function customPaging(i) {
    return _react["default"].createElement("button", {
      type: "button"
    }, i + 1);
  },
  appendDots: function appendDots(dots) {
    return _react["default"].createElement("ul", {
      style: {
        display: 'block'
      }
    }, dots);
  },
  dotsClass: ''
};
exports.dotsDefaultProps = dotsDefaultProps;
var dotsPropTypes = {
  slideCount: _propTypes["default"].number,
  dotsScroll: _propTypes["default"].number,
  slidesToShow: _propTypes["default"].number,
  infinite: _propTypes["default"].bool,
  currentSlide: _propTypes["default"].number,
  clickHandler: _propTypes["default"].func,
  onMouseEnter: _propTypes["default"].func,
  onMouseOver: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func,
  customPaging: _propTypes["default"].func,
  appendDots: _propTypes["default"].func,
  dotsClass: _propTypes["default"].string
};
exports.dotsPropTypes = dotsPropTypes;
var arrowsPropTypes = {
  arrows: _propTypes["default"].bool,
  arrowsScroll: _propTypes["default"].number,
  // currentSlide: PropTypes,
  clickHandler: _propTypes["default"].func,
  // slideCount,
  type: _propTypes["default"].oneOf(['prev', 'next']),
  prevArrow: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].element, _propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].oneOf([null])]),
  nextArrow: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].element, _propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element), _propTypes["default"].oneOf([null])]),
  arrowsBlock: _propTypes["default"].bool
};
exports.arrowsPropTypes = arrowsPropTypes;
var arrowsDefaultProps = {
  arrows: true,
  arrowsScroll: 1,
  // currentSlide,
  clickHandler: function clickHandler() {},
  // slideCount,
  type: 'prev',
  arrowsBlock: true,
  prevArrow: null,
  nextArrow: null
};
exports.arrowsDefaultProps = arrowsDefaultProps;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(50)(module)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(52)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _throttle = _interopRequireDefault(__webpack_require__(56));

var _each = _interopRequireDefault(__webpack_require__(62));

var _get = _interopRequireDefault(__webpack_require__(85));

var _isEqual = _interopRequireDefault(__webpack_require__(117));

var _classnames = _interopRequireDefault(__webpack_require__(23));

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(147));

var _array = _interopRequireDefault(__webpack_require__(148));

var _types = __webpack_require__(24);

var _arrows = __webpack_require__(149);

var _dots = _interopRequireDefault(__webpack_require__(150));

var _listener = __webpack_require__(151);

__webpack_require__(153);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var extractObject = function extractObject(spec, keys) {
  var newObject = {};

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    newObject[key] = spec[key];
  }

  return newObject;
};

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isMounted", true);

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      var _this$state = _this.state,
          settings = _this$state.settings,
          width = _this$state.width;
      var activeIndex = _this.state.activeIndex;
      settings = _objectSpread({}, _types.defaultProps, {}, _this.props); // force showing one slide and scrolling by one if the fade mode is on

      if (settings.fade) {
        if (settings.slidesToShow > 1 && "production" !== 'production') {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        settings.slidesToShow = 1;
      }

      var children = _this.props.children;
      children = _react["default"].Children.toArray(children).filter(function (child) {
        return typeof child === 'string' ? !!child.trim() : !!child;
      });

      var newWith = _this.widthInit();

      if (width !== newWith) {
        width = newWith;
      }

      var newChildren = [];

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (k < children.length) {
              row.push(_react["default"].cloneElement(children[k], {
                key: 100 * i + 10 * j + k,
                tabIndex: -1,
                style: {
                  width: "".concat(100 / settings.slidesPerRow, "%"),
                  display: 'inline-block'
                }
              }));
            }
          }

          newSlide.push(_react["default"].createElement("div", {
            className: "carousel-row",
            key: 10 * i + j
          }, row));
        }

        newChildren.push(_react["default"].createElement("div", {
          "data-carouselkey": i,
          key: i,
          className: "carousel-item",
          style: {
            width: "".concat(width, "px"),
            display: 'none'
          }
        }, newSlide));
      }

      if (_this.newChildren.length !== newChildren.length) {
        _this.rerender = true;
        _this.newChildren = newChildren;
      } else {
        _this.rerender = false;
        _this.newChildren = newChildren;
        _this.virtualList = newChildren;
      }

      if (settings.virtualList && _this.items && _this.items.length === _this.newChildren.length && !_this.rerender) {
        if (_this.endIndex === activeIndex) {
          _this.endIndex = null;
        }

        _this.virtualList = _this.createVirtualList();

        _this.forceUpdate(function () {
          if (!_this.resizeHeight) {
            _this.connectObserver();
          }
        });
      }

      if (!(0, _isEqual["default"])((0, _get["default"])(_this.state, 'settings'), settings) && _this.isMounted) {
        _this.setState({
          settings: settings
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (element) {
      return _this.setState({
        SliderRef: element
      }, function () {
        var slides = element.querySelectorAll('.carousel-item');
        var virtualList = _this.state.settings.virtualList;

        if (virtualList) {
          _this.virtualList = _this.newChildren;

          _this.forceUpdate(function () {
            _this.items = new _array["default"](element.querySelectorAll('.carousel-item'));
            _this.virtualItem = null;
          });
        } else {
          _this.items = new _array["default"](slides);
        }

        _this.slideInit();

        var settings = _this.state.settings;
        var slidesToShow = settings.slidesToShow;

        if (slidesToShow < slides.length) {
          _this.signupListener();

          _this.autoPlay();
        } else {
          _this.removeListener();
        }

        element.addEventListener('click', _this.handleClick);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      var _this$state2 = _this.state,
          SliderRef = _this$state2.SliderRef,
          _this$state2$settings = _this$state2.settings,
          autoplay = _this$state2$settings.autoplay,
          autoplaySpeed = _this$state2$settings.autoplaySpeed,
          pauseOnHover = _this$state2$settings.pauseOnHover;

      if (autoplay && autoplaySpeed > 0 && !_this.autoplayTimer) {
        _this.scrollType = {
          type: 'autoplay'
        };
        _this.autoplayTimer = setInterval(function () {
          var autoplayScroll = _this.props.autoplayScroll;
          var activeIndex = _this.state.activeIndex;
          _this.beforeChangeTrigger = false;

          _this.slickNext(activeIndex + autoplayScroll);
        }, autoplaySpeed);
        window.addEventListener('visibilitychange', _this.handleVisibilityChange);

        if (pauseOnHover) {
          SliderRef.addEventListener('mouseover', _this.handleAutoplayPause);
          SliderRef.removeEventListener('mouseleave', _this.autoPlay);
        } else {
          SliderRef.removeEventListener('mouseover', _this.handleAutoplayPause);
          SliderRef.removeEventListener('mouseleave', _this.autoPlay);
        }
      } else if (autoplay && autoplaySpeed && _this.autoplayTimer) {
        _this.autoPlayInit();

        if (!pauseOnHover) {
          SliderRef.removeEventListener('mouseover', _this.handleAutoplayPause);
          SliderRef.removeEventListener('mouseleave', _this.autoPlay);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlayInit", function () {
      var settings = _this.state.settings;

      if (settings.autoplay) {
        _this.handleAutoplayPause();

        _this.autoPlay();
      } else if (_this.isMounted) {
        _this.setState({
          settings: _objectSpread({}, settings, {
            autoplay: true
          })
        }, function () {
          _this.handleAutoplayPause();

          _this.autoPlay();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "connectObserver", function () {
      if (!_this.resizeObserver) {
        var SliderRef = _this.state.SliderRef;
        _this.resizeObserver = new _resizeObserverPolyfill["default"](_this.handleResizeHeight);

        _this.resizeObserver.observe(SliderRef.querySelector('.carousel-item'));
      } else {
        _this.disconnectObserver();

        _this.connectObserver();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "disconnectObserver", function () {
      if (_this.resizeObserver) {
        _this.resizeObserver.disconnect();

        _this.resizeObserver = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "track", function () {
      var now = Date.now();
      var elapsed = now - _this.timestamp;
      _this.timestamp = now;
      var delta = _this.offset - _this.frame;
      _this.frame = _this.offset;
      var v = 1000 * delta / (1 + elapsed);
      _this.velocity = 0.8 * v + 0.2 * _this.velocity;
    });

    _defineProperty(_assertThisInitialized(_this), "autoScroll", function (type) {
      var settings = _this.state.settings;

      if (_this.amplitude) {
        var elapsed = Date.now() - _this.timestamp;

        var delta = _this.amplitude * Math.exp(-elapsed / settings.duration);

        if (_this.doubleTrigger) {
          _this.beforeChangeTrigger = false;

          _this.scroll('auto', _this.target - delta);

          requestAnimationFrame(_this.autoScroll);
          _this.doubleTrigger = false;
        } else if (delta > 2 || delta < -2) {
          _this.scroll(type === 'start' ? type : 'auto', _this.target - delta);

          requestAnimationFrame(_this.autoScroll);
        } else if (_this.changeWindow) {
          _this.changeWindow = false;

          _this.scroll('auto', _this.target);
        } else {
          _this.scroll('end', _this.target);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getItem", function (scrollItem, index) {
      var virtualList = _this.state.settings.virtualList;
      var el;

      if (virtualList) {
        var keyIndex = scrollItem.getKeyIndex(index);

        if (keyIndex >= 0) {
          el = scrollItem.get(keyIndex);
        }
      } else {
        el = scrollItem.get(index);
      }

      return el;
    });

    _defineProperty(_assertThisInitialized(_this), "scroll", function (type, x) {
      var _this$state3 = _this.state,
          SliderRef = _this$state3.SliderRef,
          width = _this$state3.width,
          settings = _this$state3.settings,
          activeIndex = _this$state3.activeIndex;
      var centerMode = settings.centerMode,
          beforeChange = settings.beforeChange,
          afterChange = settings.afterChange,
          slidesToShow = settings.slidesToShow,
          virtualList = settings.virtualList; // Start actual scroll

      var i;
      var el;
      var alignment = 'translateX(0px)';

      if (!x) {
        _this.offset = width * activeIndex * 2;
      } else {
        _this.offset = typeof x === 'number' ? x : _this.offset;
      }

      _this.center = Math.floor((_this.offset + _this.dim / 2) / _this.dim);
      var delta = _this.offset - _this.center * _this.dim;
      var dir = delta < 0 ? 1 : -1;
      var tween = -dir * delta * 2 / _this.dim;

      if (centerMode) {
        if (slidesToShow % 2 === 0) {
          alignment = "translateX(".concat(width * (slidesToShow / 2), "px)");
        } else {
          alignment = "translateX(".concat((SliderRef.clientWidth - width) / 2 - settings.centerPadding, "px)");
        }
      } else {
        alignment = 'translateX(0px)';
      }

      var _this$scrollType = _this.scrollType,
          scrollType = _this$scrollType.type,
          direction = _this$scrollType.direction; // Track scrolling state

      if (!SliderRef.classList.contains('scrolling') && scrollType !== 'arrows' && type !== 'init' && type !== 'resize') {
        _this.swiping = true;
        SliderRef.classList.add('scrolling');
      } // center
      // Don't show wrapped items.


      var index = _this.wrap(_this.center);

      if (!_this.beforeChangeTrigger && type !== 'start' && type !== 'end' && type !== 'init') {
        _this.beforeChangeTrigger = true;
        var newIndex;

        switch (scrollType) {
          case 'arrows':
            {
              var slides = settings.arrowsScroll;
              _this.scrollDistance = slides;
              newIndex = _this.items.getIndex(direction === 'prev' ? activeIndex - slides : activeIndex + slides);
              break;
            }

          case 'dots':
            {
              newIndex = _this.scrollOptions.index * _this.scrollOptions.dotsScroll;
              break;
            }

          case 'autoplay':
            {
              var _slides = settings.autoplayScroll;
              _this.scrollDistance = _slides;
              newIndex = _this.items.getIndex(activeIndex + _slides);
              break;
            }

          case 'wheel':
            {
              var _slides2 = settings.wheelScroll;
              _this.scrollDistance = _slides2;
              newIndex = _this.items.getIndex(direction === 'prev' ? activeIndex - _slides2 : activeIndex + _slides2);
              break;
            }

          default:
            break;
        }

        _this.endIndex = newIndex;

        if (beforeChange && typeof beforeChange === 'function') {
          beforeChange(activeIndex, newIndex);
        }
      }

      if (type !== 'end' && _this.scrollEnd) _this.scrollEnd = false;

      if (type === 'end') {
        if (afterChange && typeof afterChange === 'function' && !_this.scrollEnd) {
          afterChange(_this.wrap(_this.center));
        }

        _this.scrollEnd = true;
        SliderRef.classList.remove('scrolling');
        _this.beforeChangeTrigger = false;
        _this.swiping = false;
      } else if (_this.scrollEnd) {
        _this.scrollEnd(true);
      }

      _this.virtualItem = _this.virtualItem || new _array["default"](SliderRef.querySelectorAll('.carousel-item'), _this.items);
      var scrollItem = virtualList ? _this.virtualItem : _this.items;

      if (scrollItem.length <= slidesToShow) {
        el = _this.getItem(scrollItem, 0);

        if (el) {
          // Add active class to center item.
          if (el.classList.contains('active')) {
            (0, _each["default"])(SliderRef.querySelectorAll('.carousel-item'), function (ele) {
              return ele.classList.remove('active');
            });
            el.classList.add('active');
          }

          var transformString = "".concat(alignment, " translateX(0px)");

          _this.updateItemStyle(el, transformString);
        }
      } else if (!_this.noWrap || _this.center >= 0 && _this.center < scrollItem.length) {
        el = _this.getItem(scrollItem, index);

        if (el) {
          // Add active class to center item.
          if (el.classList.contains('active')) {
            (0, _each["default"])(SliderRef.querySelectorAll('.carousel-item'), function (ele) {
              return ele.classList.remove('active');
            });
            el.classList.add('active');
          }

          var _transformString = "".concat(alignment, " translateX(").concat(-delta / 2, "px) translateX(").concat(dir * settings.shift * tween * i, "px)");

          _this.updateItemStyle(el, _transformString);
        }
      }

      if (centerMode) {
        var half = Math.floor(scrollItem.length / 2);

        for (i = 1; i <= half; i += 1) {
          // right side
          // Don't show wrapped items.
          if (!_this.noWrap || _this.center + i < scrollItem.length) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center + i));

            if (el) {
              var _transformString2 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * i - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString2);
            }
          } // left side
          // Don't show wrapped items.


          if (!_this.noWrap || _this.center - i >= 0) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center - i));

            if (el) {
              var _transformString3 = "".concat(alignment, " translateX(").concat(-settings.shift + (-_this.dim * i - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString3);
            }
          }
        }
      } else if (scrollItem.length <= slidesToShow) {
        for (i = 1; i < scrollItem.length; i += 1) {
          el = _this.getItem(scrollItem, i);

          if (el) {
            var _transformString4 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * i - delta) / 2, "px)");

            _this.updateItemStyle(el, _transformString4);
          }
        }
      } else {
        for (i = 1; i < slidesToShow; i += 1) {
          el = _this.getItem(scrollItem, _this.wrap(_this.center + i));

          if (el) {
            var _transformString5 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * i - delta) / 2, "px)");

            _this.updateItemStyle(el, _transformString5);
          }
        }

        var _half = Math.ceil((scrollItem.length - slidesToShow) / 2);

        for (i = 0; i < _half; i += 1) {
          // right side
          if (!_this.noWrap || _this.center + slidesToShow + i < scrollItem.length) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center + slidesToShow + i));

            if (el) {
              var _transformString6 = "".concat(alignment, " translateX(").concat(settings.shift + (_this.dim * (slidesToShow + i) - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString6);
            }
          } // left side


          if (!_this.noWrap || _this.center + slidesToShow + i < scrollItem.length) {
            el = _this.getItem(scrollItem, _this.wrap(_this.center - i - 1));

            if (el) {
              var _transformString7 = "".concat(alignment, " translateX(").concat(-settings.shift + (-_this.dim * (i + 1) - delta) / 2, "px)");

              _this.updateItemStyle(el, _transformString7);
            }
          }
        }
      } // center
      // Don't show wrapped items.


      if ((!_this.noWrap || _this.center < _this.items.length) && slidesToShow < scrollItem.length) {
        el = _this.getItem(scrollItem, _this.center);

        if (el) {
          if (!el.classList.contains('active')) {
            (0, _each["default"])(SliderRef.querySelectorAll('.carousel-item'), function (ele) {
              return ele.classList.remove('active');
            });
            el.classList.add('active');

            var newActiveIndex = _this.wrap(_this.center);

            if (_this.beforeChangeTrigger && _this.isMounted) {
              _this.setState({
                activeIndex: newActiveIndex
              }, function () {
                _this.virtualItem = null;
              });
            }
          }

          var _transformString8 = "".concat(alignment, " translateX(").concat(-delta / 2, "px) translateX(").concat(dir * settings.shift * tween, "px)");

          _this.updateItemStyle(el, _transformString8);
        }
      }

      _this.adaptHeight(); // onCycleTo callback


      var currItem = SliderRef.querySelectorAll('.carousel-item')[_this.wrap(_this.center)]; // One time callback


      if (typeof _this.oneTimeCallback === 'function') {
        _this.oneTimeCallback.call(_assertThisInitialized(_this), currItem, _this.dragged);

        _this.oneTimeCallback = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateItemStyle", function (el, transform) {
      var newEl = el;
      newEl.style[_this.xform] = transform;
      newEl.style.zIndex = 1;
      newEl.style.display = '';
    });

    _defineProperty(_assertThisInitialized(_this), "widthInit", function () {
      var _this$state4 = _this.state,
          settings = _this$state4.settings,
          SliderRef = _this$state4.SliderRef;
      var centerMode = settings.centerMode,
          centerPadding = settings.centerPadding,
          slidesToShow = settings.slidesToShow;

      if (SliderRef) {
        var padding = 0;

        if (typeof centerPadding === 'string') {
          var _centerPadding$match = centerPadding.match(/\d+/g);

          var _centerPadding$match2 = _slicedToArray(_centerPadding$match, 1);

          padding = _centerPadding$match2[0];
        } else if (typeof centerPadding === 'number') {
          padding = centerPadding;
        } else {
          padding = 50;
          console.warn('centerPadding have to be number or string like 50px');
        }

        var offsetWidth = SliderRef.offsetWidth;

        if (offsetWidth <= 0) {
          offsetWidth = window.innerWidth;
        }

        var sliderWidth = centerMode ? offsetWidth - padding * 2 : offsetWidth;
        var width = sliderWidth / slidesToShow;
        return width;
      }

      return 0;
    });

    _defineProperty(_assertThisInitialized(_this), "slideInit", function () {
      var _this$state5 = _this.state,
          SliderRef = _this$state5.SliderRef,
          initialSlide = _this$state5.settings.initialSlide;

      if (SliderRef && _this.isMounted) {
        var width = _this.widthInit();

        _this.setState({
          width: width
        }, function () {
          _this.dim = width * 2; // this.settings.gutter = padding;

          _this.scroll('init');

          if (initialSlide) {
            if (typeof initialSlide === 'number') {
              if (initialSlide > 0 && !_this.initialSet) {
                _this.slickSet(initialSlide);

                _this.initialSet = true;
              }
            } else {
              _this.slickSet(0);

              _this.initialSet = false;
              console.warn('initialSlide must be a number');
            }
          }

          _this.connectObserver();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      var _this$state6 = _this.state,
          settings = _this$state6.settings,
          SliderRef = _this$state6.SliderRef,
          height = _this$state6.height;

      if (settings.adaptiveHeight && SliderRef) {
        var index = _this.wrap(_this.center);

        var elem = _this.items.get(index);

        var offsetHeight = elem.offsetHeight;

        if (height !== offsetHeight && offsetHeight > 0 && _this.isMounted) {
          _this.setState({
            height: offsetHeight
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "xpos", function (e) {
      // touch event
      if (e.targetTouches && e.targetTouches.length >= 1) {
        return e.targetTouches[0].clientX;
      } // mouse event


      return e.clientX;
    });

    _defineProperty(_assertThisInitialized(_this), "ypos", function (e) {
      // touch event
      if (e.targetTouches && e.targetTouches.length >= 1) {
        return e.targetTouches[0].clientY;
      } // mouse event


      return e.clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "wrap", function (x) {
      return _this.items.getIndex(x);
    });

    _defineProperty(_assertThisInitialized(_this), "cycleTo", function (n, callback) {
      var diff = _this.center % _this.items.length - n; // Account for wraparound.

      if (!_this.noWrap) {
        if (diff < 0) {
          if (Math.abs(diff + _this.items.length) < Math.abs(diff)) {
            diff += _this.items.length;
          }
        } else if (diff > 0) {
          if (Math.abs(diff - _this.items.length) < diff) {
            diff -= _this.items.length;
          }
        }
      }

      _this.target = _this.dim * Math.round(_this.offset / _this.dim); // Next

      if (diff < 0) {
        _this.target += _this.dim * Math.abs(diff); // Prev
      } else if (diff > 0) {
        _this.target -= _this.dim * diff;
      } // Set one time callback


      if (typeof callback === 'function') {
        _this.oneTimeCallback = callback;
      } // Scroll


      if (_this.offset !== _this.target) {
        _this.amplitude = _this.target - _this.offset;
        _this.timestamp = Date.now();
        requestAnimationFrame(function () {
          _this.autoScroll('start');
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function (n) {
      if (_this.scrollType.type === 'arrows') {
        _this.doubleTrigger = true;
      }

      if (typeof n === 'number') {
        _this.cycleTo(n);
      } else {
        var activeIndex = _this.state.activeIndex;

        _this.cycleTo(activeIndex + 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function (n) {
      if (_this.scrollType.type === 'arrows') {
        _this.doubleTrigger = true;
      }

      if (typeof n === 'number') {
        _this.cycleTo(n);
      } else {
        var activeIndex = _this.state.activeIndex;

        _this.cycleTo(activeIndex - 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slickSet", function (n, callback) {
      return _this.cycleTo(n, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "createVirtualList", function () {
      var _this$state7 = _this.state,
          _this$state7$settings = _this$state7.settings,
          slidesToShow = _this$state7$settings.slidesToShow,
          overScan = _this$state7$settings.overScan,
          activeIndex = _this$state7.activeIndex;

      if (_this.virtualList.length > (slidesToShow + overScan) * 2 + 1) {
        var result = [];
        var getIndex = [];
        var newActiveIndex = activeIndex;
        var _this$scrollType2 = _this.scrollType,
            type = _this$scrollType2.type,
            direction = _this$scrollType2.direction;

        switch (type) {
          case 'scroll':
            {
              if (direction === 'left') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'arrows':
            {
              if (direction === 'next') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'dots':
            {
              if (direction === 'right') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'wheel':
            {
              if (direction === 'next') newActiveIndex += 1;else newActiveIndex -= 1;
              break;
            }

          case 'autoplay':
            {
              newActiveIndex += 1;
              break;
            }

          default:
            break;
        }

        var i = 0;

        for (; i < slidesToShow + overScan; i += 1) {
          if (i === 0) {
            var index = _this.items.getIndex(newActiveIndex);

            getIndex.push(index);
          } else {
            var rightIndex = _this.items.getIndex(newActiveIndex + i);

            var leftIndex = _this.items.getIndex(newActiveIndex - i);

            getIndex.push(rightIndex);
            getIndex.unshift(leftIndex);
          }
        }

        if (_this.endIndex >= 0 && typeof _this.endIndex === 'number') {
          var buffer = 0;

          if (activeIndex + _this.endIndex < _this.newChildren.length + _this.scrollDistance && activeIndex + _this.endIndex >= _this.newChildren.length - _this.scrollDistance && (activeIndex >= _this.newChildren.length - _this.scrollDistance || _this.endIndex >= _this.newChildren.length - _this.scrollDistance)) {
            if (_this.endIndex + activeIndex < _this.newChildren.length) {
              if (_this.endIndex < activeIndex) {
                buffer = _this.newChildren.length - activeIndex + _this.endIndex;
              } else {
                buffer = _this.newChildren.length - _this.endIndex + activeIndex;
              }
            } else if (_this.endIndex < activeIndex) {
              buffer = _this.newChildren.length + _this.scrollDistance - activeIndex + _this.endIndex;
            } else {
              buffer = _this.newChildren.length + _this.scrollDistance - _this.endIndex + activeIndex;
            }
          } else {
            buffer = _this.endIndex < activeIndex ? activeIndex - _this.endIndex : _this.endIndex - activeIndex;
          }

          for (var j = 0; j < buffer; j += 1) {
            var _rightIndex = _this.items.getIndex(newActiveIndex + i + j);

            var _leftIndex = _this.items.getIndex(newActiveIndex - i - j);

            switch (type) {
              case 'arrows':
                {
                  if (direction === 'next') getIndex.push(_rightIndex);else getIndex.unshift(_leftIndex);
                  break;
                }

              case 'dots':
                {
                  if (direction === 'right') getIndex.push(_rightIndex);else getIndex.unshift(_leftIndex);
                  break;
                }

              case 'wheel':
                {
                  if (direction === 'next') getIndex.push(_rightIndex);else getIndex.unshift(_leftIndex);
                  break;
                }

              case 'autoplay':
                {
                  getIndex.push(_rightIndex);
                  break;
                }

              default:
                break;
            }
          }
        }

        getIndex.sort(function (a, b) {
          return a - b;
        });

        for (i = 0; i < getIndex.length; i += 1) {
          var childrenIndex = getIndex[i];
          var children = _this.newChildren[childrenIndex];
          result.push(children);
        }

        return result;
      }

      return _this.virtualList;
    });

    _this.state = {
      SliderRef: null,
      width: 0,
      height: 0,
      autoplaying: null,
      settings: _types.defaultProps,
      activeIndex: 0
    };
    _this.touchObject = {};
    _this.newChildren = [];
    _this.virtualList = [];
    _this.center = 0;
    _this.offset = 0;
    _this.target = 0;
    _this.items = null;
    _this.virtualItem = null;
    _this.dim = 1;
    _this.xform = '';
    _this.resizeObserver = null;
    _this.autoplayTimer = null;
    ['', 'Webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
      var e = "".concat(prefix, "Transform");

      if (typeof document !== 'undefined' && typeof document.body.style[e] !== 'undefined') {
        _this.xform = e;
        return false;
      }

      return true;
    });
    /* switch */

    _this.doubleTrigger = false;
    _this.initialSet = false;
    _this.beforeChangeTrigger = false;
    _this.scrollEnd = false;
    _this.autoplayTimer = null;
    _this.scrollType = {};
    _this.scrollOptions = {};
    _this.rerender = false;
    _this.resizeHeight = false;
    _this.endIndex = null;
    _this.changeWindow = false;
    /* functionBind */

    _this.scroll = _this.scroll.bind(_assertThisInitialized(_this));
    _this.setRef = _this.setRef.bind(_assertThisInitialized(_this));
    _this.slideInit = _this.slideInit.bind(_assertThisInitialized(_this));
    _this.slickNext = _this.slickNext.bind(_assertThisInitialized(_this));
    _this.slickPrev = _this.slickPrev.bind(_assertThisInitialized(_this));
    _this.slickSet = _this.slickSet.bind(_assertThisInitialized(_this));
    _this.cycleTo = _this.cycleTo.bind(_assertThisInitialized(_this));
    _this.autoPlay = _this.autoPlay.bind(_assertThisInitialized(_this));
    _this.handleCarouselTap = _listener.handleCarouselTap.bind(_assertThisInitialized(_this));
    _this.signupListener = _listener.signupListener.bind(_assertThisInitialized(_this));
    _this.removeListener = _listener.removeListener.bind(_assertThisInitialized(_this));
    _this.handleCarouselDrag = _listener.handleCarouselDrag.bind(_assertThisInitialized(_this));
    _this.handleCarouselRelease = _listener.handleCarouselRelease.bind(_assertThisInitialized(_this));
    _this.handleAutoplayPause = _listener.handleAutoplayPause.bind(_assertThisInitialized(_this));
    _this.handleResize = (0, _throttle["default"])(_listener.handleResize.bind(_assertThisInitialized(_this)), 1000, {
      leading: true
    });
    _this.handleResizeHeight = (0, _throttle["default"])(_listener.handleResizeHeight.bind(_assertThisInitialized(_this)), 500);
    _this.handleVisibilityChange = _listener.handleVisibilityChange.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _listener.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.handleClick = _listener.handleClick.bind(_assertThisInitialized(_this));
    _this.handleWheel = _listener.handleWheel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isMounted = true;
      window.addEventListener('resize', this.handleResize);
      this.init();
      var onInit = this.props.onInit;
      if (onInit && typeof onInit === 'function') onInit(this);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      this.init();
      var slidesPerRow = nextProps.slidesPerRow,
          rows = nextProps.rows;
      var _this$state$settings = this.state.settings,
          originPerRow = _this$state$settings.slidesPerRow,
          originRows = _this$state$settings.rows;

      if (slidesPerRow !== originPerRow || rows !== originRows) {
        this.resizeHeight = false;
      }

      return (0, _isEqual["default"])(nextProps, this.props) || (0, _isEqual["default"])(nextState, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var SliderRef = this.state.SliderRef;

      var newProps = _objectSpread({}, this.props, {
        children: []
      });

      var newPrevProps = _objectSpread({}, prevProps, {
        children: []
      });

      var children = this.props.children;

      if (!(0, _isEqual["default"])(newProps, newPrevProps) || prevProps.children.length !== children.length) {
        var onReInit = this.props.onReInit;
        this.init();
        this.setRef(SliderRef);
        if (onReInit && typeof onReInit === 'function') onReInit(this);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      this.isMounted = false;
    }
    /**
     * settings init
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state8 = this.state,
          height = _this$state8.height,
          settings = _this$state8.settings,
          activeIndex = _this$state8.activeIndex;

      var spec = _objectSpread({}, settings, {}, this.prop);

      var centerPadding = settings.centerPadding,
          centerMode = settings.centerMode;
      var padding = typeof centerPadding === 'string' ? centerPadding : "".concat(centerPadding, "px");
      /*  arrow  */

      var arrowProps = extractObject(spec, ['arrows', 'arrowsScroll', 'centerMode', 'currentSlide', 'slideCount', 'slidesToShow', 'prevArrow', 'nextArrow', 'arrowsBlock']);
      var prevArrow;
      var nextArrow;

      if (settings.arrows) {
        prevArrow = _react["default"].createElement(_arrows.PrevArrow, _extends({}, arrowProps, {
          clickHandler: function clickHandler(options) {
            _this2.beforeChangeTrigger = false;
            _this2.scrollType = {
              type: 'arrows',
              direction: 'prev'
            };
            _this2.scrollOptions = options;

            _this2.slickPrev(activeIndex - options.arrowsScroll);
          }
        }));
        nextArrow = _react["default"].createElement(_arrows.NextArrow, _extends({}, arrowProps, {
          clickHandler: function clickHandler(options) {
            _this2.beforeChangeTrigger = false;
            _this2.scrollType = {
              type: 'arrows',
              direction: 'next'
            };
            _this2.scrollOptions = options;

            _this2.slickNext(activeIndex + options.arrowsScroll);
          }
        }));
      }
      /*  Dots  */


      var dots;

      if (settings.dots === true && this.items) {
        if (this.items.length >= settings.slidesToShow) {
          var dotProps = extractObject(spec, ['dotsClass', 'slidesToShow', 'dotsScroll', 'clickHandler', 'children', 'customPaging', 'infinite', 'appendDots']);
          var pauseOnDotsHover = settings.pauseOnDotsHover;
          Object.assign(dotProps, {
            activeIndex: activeIndex,
            slideCount: this.items.length,
            clickHandler: function clickHandler(options) {
              _this2.beforeChangeTrigger = false;
              var right = 0;
              var left = 0;
              var direction = null;

              if (activeIndex > options.index) {
                right = _this2.newChildren.length - activeIndex + options.index;
                left = activeIndex - options.index;
                direction = right < left ? 'right' : 'left';
              } else {
                right = options.index - activeIndex;
                left = _this2.newChildren.length - options.index + activeIndex;
                direction = right <= left ? 'right' : 'left';
              }

              _this2.scrollType = {
                type: 'dots',
                direction: direction
              };
              _this2.scrollOptions = options;

              _this2.slickSet(options.index * options.dotsScroll);
            },
            onMouseEnter: pauseOnDotsHover ? this.onDotsLeave : null,
            onMouseOver: pauseOnDotsHover ? this.onDotsOver : null,
            onMouseLeave: pauseOnDotsHover ? this.onDotsLeave : null
          });
          dots = _react["default"].createElement(_dots["default"], dotProps);
        }
      }

      var judge = this.items ? settings.slidesToShow < this.items.length : false;
      /*  Slide  */

      var component = _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
        ref: function ref(e) {
          var SliderRef = _this2.state.SliderRef;

          if (!SliderRef && _this2.isMounted) {
            _this2.setRef(e);
          }
        },
        className: "carousel-initialized",
        style: {
          padding: centerMode ? "0 ".concat(padding) : 0
        }
      }, !settings.unslick && judge ? prevArrow : '', _react["default"].createElement("div", {
        style: {
          height: "".concat(height, "px")
        },
        className: "carousel-track"
      }, this.rerender ? this.newChildren : this.virtualList), !settings.unslick && judge ? nextArrow : ''), !settings.unslick && judge ? dots : '');

      if (settings === 'unslick') {
        var className = "regular slider ".concat(settings.className || '');
        component = _react["default"].createElement("div", {
          className: className
        }, this.newChildren);
      }

      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])(settings.className)
      }, component);
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = _types.propTypes;
Slider.defaultProps = _types.defaultProps;
var _default = Slider;
exports["default"] = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(69),
    baseKeys = __webpack_require__(78),
    isArrayLike = __webpack_require__(35);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(3),
    stubFalse = __webpack_require__(73);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(75),
    baseUnary = __webpack_require__(76),
    nodeUtil = __webpack_require__(77);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
    isLength = __webpack_require__(34);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObject = __webpack_require__(7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(126),
    arraySome = __webpack_require__(129),
    cacheHas = __webpack_require__(130);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 41 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"href\":\"/\",\"queries\":[\"Заказать звонок\",\"О нас\"]},{\"href\":\"/accounting_events\",\"queries\":[\"Бізнес заходи\"]},{\"href\":\"/accounting_events/tax_consulting\",\"queries\":[\"Податковий консалтинг\"]},{\"href\":\"/accounting_events/personnel_accounting\",\"queries\":[\"Кадровий облік\"]},{\"href\":\"/accounting_events/accounting_support\",\"queries\":[\"Бухгалтерський супровід\"]},{\"href\":\"/accounting_events/accounting\",\"queries\":[\"Бухгалтерська звітність\"]},{\"href\":\"/legal_services\",\"queries\":[\"Юридичні послуги\"]},{\"href\":\"/legal_services/registration_of_a_legal_entity\",\"queries\":[\"Реєстрація юридичної особи\"]},{\"href\":\"/legal_services/liquidation_of_a_legal_entity\",\"queries\":[\"Ліквідація юридичної особи\"]},{\"href\":\"/legal_services/development_of_contracts\",\"queries\":[\"Розробка договорів\"]},{\"href\":\"/legal_services/job_descriptions\",\"queries\":[\"Посадові інструкії\"]},{\"href\":\"/legal_services/liquidation_of_a_legal_entity\",\"queries\":[\"Заголовок 1\",\"Заголовок 2\"]},{\"href\":\"/passport_and_visa_services\",\"queries\":[\"Паспортно-візові послуги\"]},{\"href\":\"/passport_and_visa_services/temporary_residence\",\"queries\":[\"Оформлення посвідки на тимчасове проживання\"]},{\"href\":\"/passport_and_visa_services/permanent_residence\",\"queries\":[\"Оформлення посвідки на постійне проживання\"]},{\"href\":\"/passport_and_visa_services/registration_of_residence\",\"queries\":[\"Реєстрація місця проживання\"]},{\"href\":\"/passport_and_visa_services/insurance\",\"queries\":[\"Страхування на період перебування в Україні\"]},{\"href\":\"/passport_and_visa_services/invitation\",\"queries\":[\"Запрошення ( робочі, комерційні )\"]},{\"href\":\"/event-management\",\"queries\":[\"Event-management\"]},{\"href\":\"/event-management/forums\",\"queries\":[\"Організація форумів, конференцій\"]},{\"href\":\"/event-management/festivals\",\"queries\":[\"Організація виставок та фестивалів\"]},{\"href\":\"/event-management/tranings\",\"queries\":[\"Організація тренінгів\"]},{\"href\":\"/licensing\",\"queries\":[\"Ліцензування\"]},{\"href\":\"/licensing/educational_activity\",\"queries\":[\"Ліцензування освітньої діяльності\"]},{\"href\":\"/licensing/outdoor_advertising\",\"queries\":[\"Погодження і реєстрація зовнішньої реклами\"]},{\"href\":\"/licensing/intellectual_property\",\"queries\":[\"Набуття права інтелектуальної власності\"]}]");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _slider["default"];
  }
});
exports["default"] = void 0;

var _carousel = _interopRequireDefault(__webpack_require__(55));

var _slider = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _carousel["default"];
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(48);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(4));

var _slider = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlayInit();
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.handleAutoplayPause();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (n) {
      return _this.innerSlider.slickSet(n);
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return _react["default"].createElement(_slider["default"], _extends({}, this.props, {
        ref: function ref(slider) {
          _this2.innerSlider = slider;
        }
      }), children);
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].element), _propTypes["default"].arrayOf(_propTypes["default"].instanceOf(typeof Element !== 'undefined' && Element)), _propTypes["default"].func, _propTypes["default"].oneOf([null])]).isRequired
};
var _default = Carousel;
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(57),
    isObject = __webpack_require__(7);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    now = __webpack_require__(58),
    toNumber = __webpack_require__(59);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(64),
    baseEach = __webpack_require__(65),
    castFunction = __webpack_require__(83),
    isArray = __webpack_require__(5);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(66),
    createBaseEach = __webpack_require__(82);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(67),
    keys = __webpack_require__(30);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(68);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(70),
    isArguments = __webpack_require__(71),
    isArray = __webpack_require__(5),
    isBuffer = __webpack_require__(31),
    isIndex = __webpack_require__(74),
    isTypedArray = __webpack_require__(33);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(72),
    isObjectLike = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isLength = __webpack_require__(34),
    isObjectLike = __webpack_require__(9);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(29);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(79),
    nativeKeys = __webpack_require__(80);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(81);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(35);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(84);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(86);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(87),
    toKey = __webpack_require__(116);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isKey = __webpack_require__(88),
    stringToPath = __webpack_require__(89),
    toString = __webpack_require__(113);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(12);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(90);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(91);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(21);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(93),
    ListCache = __webpack_require__(15),
    Map = __webpack_require__(22);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(94),
    hashDelete = __webpack_require__(99),
    hashGet = __webpack_require__(100),
    hashHas = __webpack_require__(101),
    hashSet = __webpack_require__(102);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(36),
    isMasked = __webpack_require__(96),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(37);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(97);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(16);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(17);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(114);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    arrayMap = __webpack_require__(115),
    isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(12);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(118);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(119),
    isObjectLike = __webpack_require__(9);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(120),
    equalArrays = __webpack_require__(39),
    equalByTag = __webpack_require__(131),
    equalObjects = __webpack_require__(135),
    getTag = __webpack_require__(142),
    isArray = __webpack_require__(5),
    isBuffer = __webpack_require__(31),
    isTypedArray = __webpack_require__(33);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    stackClear = __webpack_require__(121),
    stackDelete = __webpack_require__(122),
    stackGet = __webpack_require__(123),
    stackHas = __webpack_require__(124),
    stackSet = __webpack_require__(125);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(15),
    Map = __webpack_require__(22),
    MapCache = __webpack_require__(21);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(21),
    setCacheAdd = __webpack_require__(127),
    setCacheHas = __webpack_require__(128);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13),
    Uint8Array = __webpack_require__(132),
    eq = __webpack_require__(38),
    equalArrays = __webpack_require__(39),
    mapToArray = __webpack_require__(133),
    setToArray = __webpack_require__(134);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(136);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(137),
    getSymbols = __webpack_require__(139),
    keys = __webpack_require__(30);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(138),
    isArray = __webpack_require__(5);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(140),
    stubArray = __webpack_require__(141);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(143),
    Map = __webpack_require__(22),
    Promise = __webpack_require__(144),
    Set = __webpack_require__(145),
    WeakMap = __webpack_require__(146),
    baseGetTag = __webpack_require__(8),
    toSource = __webpack_require__(37);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CircularArray =
/*#__PURE__*/
function () {
  _createClass(CircularArray, [{
    key: "length",
    get: function get() {
      return this.array.length;
    }
  }]);

  function CircularArray(n) {
    var _this = this;

    var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, CircularArray);

    _defineProperty(this, "array", []);

    _defineProperty(this, "key", []);

    _defineProperty(this, "origin", null);

    _defineProperty(this, "toString", function (array) {
      var result = [];
      var newArray = array || _this.array;

      for (var i = 0; i < newArray.length; i += 1) {
        var item = newArray[i];
        if (_typeof(item) === 'object' && item instanceof Array) result.push("[".concat(_this.toString(item), "]"));else if (_typeof(item) === 'object') result.push(JSON.stringify(item));else result.push(item.toString());
      }

      return result.join(',');
    });

    _defineProperty(this, "get", function (i) {
      var result;

      if (i < 0 || i < _this.length - _this.array.length) {
        result = _this.array[-i % _this.array.length === 0 ? 0 : _this.array.length + i % _this.array.length];
      } else {
        result = _this.array[i % _this.array.length];
      }

      return result;
    });

    _defineProperty(this, "getKeyIndex", function (i) {
      var originItem = _this.origin.get(i);

      var carouselkey = originItem.dataset.carouselkey;
      return _this.key.indexOf(carouselkey);
    });

    _defineProperty(this, "getIndex", function (i) {
      var result;

      if (i < 0 || i < _this.length - _this.array.length) {
        result = -i % _this.array.length === 0 ? 0 : _this.array.length + i % _this.array.length;
      } else {
        result = i % _this.array.length;
      }

      return result;
    });

    _defineProperty(this, "set", function (i, v) {
      if (i < 0 || i < _this.length - _this.array.length) {
        throw new Error('can not set index < 0');
      }

      if (i >= _this.length) {
        var newArr = new Array(i - _this.length + 1);
        _this.array = _this.array.concat(newArr);

        _this.array.splice(i, 1, v);
      } else {
        _this.array[_this.getIndex(i)] = v;
      }
    });

    this.array = [];

    if (typeof n === 'number') {
      this.array = new Array(n);
    } else if (_typeof(n) === 'object' && Array.isArray(n)) {
      this.array = n;
    } else if (_typeof(n) === 'object' && n.length > 0 && n instanceof NodeList) {
      for (var i = 0; i < n.length; i += 1) {
        this.array.push(n[i]);
      }

      this.key = this.array.map(function (item) {
        var carouselkey = item.dataset.carouselkey;
        return carouselkey;
      });
    } else {
      throw new Error('can not create array');
    }

    this.origin = origin;
  }

  return CircularArray;
}();

var _default = CircularArray;
exports["default"] = _default;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(23));

var _types = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Arrow = function Arrow(_ref) {
  var arrowsScroll = _ref.arrowsScroll,
      clickHandler = _ref.clickHandler,
      type = _ref.type,
      prevArrow = _ref.prevArrow,
      nextArrow = _ref.nextArrow,
      arrowsBlock = _ref.arrowsBlock;

  var ClickHandler = function ClickHandler(options, e) {
    e.preventDefault();
    clickHandler(options, e);
  };

  var classes = {
    'carousel-arrow': true,
    block: arrowsBlock
  };
  var arrowOptions = {
    arrowsScroll: arrowsScroll
  };

  if (type === 'prev') {
    Object.assign(classes, {
      'carousel-prev': true
    });

    if (prevArrow) {
      Object.assign(classes, {
        custom: true
      });
    }

    Object.assign(arrowOptions, {
      message: 'previous'
    });
  } else {
    Object.assign(classes, {
      'carousel-next': true
    });

    if (nextArrow) {
      Object.assign(classes, {
        custom: true
      });
    }

    Object.assign(arrowOptions, {
      message: 'next'
    });
  }

  var arrowProps = {
    key: type === 'prev' ? '0' : '1',
    'data-role': 'none',
    className: (0, _classnames["default"])(classes),
    // style: { display: 'block' },
    onClick: function onClick(e) {
      return ClickHandler(arrowOptions, e);
    }
  }; // const customProps = {
  //   currentSlide,
  //   slideCount,
  // };

  var customArrow = null;

  if (prevArrow && type === 'prev') {
    customArrow = _react["default"].cloneElement(prevArrow, _objectSpread({}, arrowProps));
  } else if (nextArrow && type === 'next') {
    customArrow = _react["default"].cloneElement(nextArrow, _objectSpread({}, arrowProps));
  } else {
    customArrow = _react["default"].createElement("button", _extends({}, arrowProps, {
      key: type === 'prev' ? '0' : '1',
      type: "button"
    }), ' ', type === 'prev' ? 'Previous' : 'Next');
  }

  return customArrow;
};

Arrow.propTypes = _types.arrowsPropTypes;
Arrow.defaultProps = _types.arrowsDefaultProps;

var PrevArrow = function PrevArrow(props) {
  return _react["default"].createElement(Arrow, _extends({
    type: "prev"
  }, props));
};

exports.PrevArrow = PrevArrow;

var NextArrow = function NextArrow(props) {
  return _react["default"].createElement(Arrow, _extends({
    type: "next"
  }, props));
};

exports.NextArrow = NextArrow;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(23));

var _types = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getDotCount = function getDotCount(spec) {
  return Math.ceil(spec.slideCount / spec.dotsScroll);
};

var Dots = function Dots(_ref) {
  var slideCount = _ref.slideCount,
      dotsScroll = _ref.dotsScroll,
      slidesToShow = _ref.slidesToShow,
      infinite = _ref.infinite,
      activeIndex = _ref.activeIndex,
      clickHandler = _ref.clickHandler,
      onMouseEnter = _ref.onMouseEnter,
      onMouseOver = _ref.onMouseOver,
      onMouseLeave = _ref.onMouseLeave,
      customPaging = _ref.customPaging,
      appendDots = _ref.appendDots,
      dotsClass = _ref.dotsClass;

  var ClickHandler = function ClickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    clickHandler(options);
  }; // Apply join & split to Array to pre-fill it for IE8
  //
  // Credit: http://stackoverflow.com/a/13735425/1849458


  var dotCount = getDotCount({
    slideCount: slideCount,
    dotsScroll: dotsScroll,
    slidesToShow: slidesToShow,
    infinite: infinite
  });
  var dots = Array.apply([], Array(dotCount + 1).join('0').split('')).map(function (x, i) {
    var leftBound = i * dotsScroll;
    var rightBound = i * dotsScroll + (dotsScroll - 1);
    var className = (0, _classnames["default"])({
      'carousel-dots-active': activeIndex >= leftBound && activeIndex <= rightBound
    });
    var dotOptions = {
      message: 'dots',
      index: i,
      dotsScroll: dotsScroll,
      activeIndex: activeIndex
    };
    return _react["default"].createElement("li", {
      className: "".concat(className, " carousel-dot-").concat(i + 1),
      key: "".concat(new Date().getTime() * i)
    }, _react["default"].cloneElement(customPaging(i), {
      onClick: function onClick(e) {
        return ClickHandler(dotOptions, e);
      }
    }));
  });
  return _react["default"].cloneElement(appendDots(dots), _objectSpread({
    className: dotsClass
  }, {
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }));
};

Dots.defaultProps = _types.dotsDefaultProps;
Dots.propTypes = _types.dotsPropTypes;
var _default = Dots;
exports["default"] = _default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCarouselTap = handleCarouselTap;
exports.handleCarouselDrag = handleCarouselDrag;
exports.handleCarouselRelease = handleCarouselRelease;
exports.handleResizeHeight = handleResizeHeight;
exports.handleClick = handleClick;
exports.handleAutoplayPause = handleAutoplayPause;
exports.handleKeyDown = handleKeyDown;
exports.handleResize = handleResize;
exports.handleWheel = handleWheel;
exports.handleVisibilityChange = handleVisibilityChange;
exports.signupListener = signupListener;
exports.removeListener = removeListener;

var _utils = __webpack_require__(152);

/**
 * Handle Carousel Tap
 * @param {Event} e
 */
function handleCarouselTap(e) {
  // Fixes firefox draggable image bug
  if (e.type === 'mousedown' && e.target.tagName === 'IMG') {
    e.preventDefault();
  }

  this.pressed = true;
  this.dragged = false;
  this.verticalDragged = false;
  this.reference = this.xpos(e);
  this.referenceY = this.ypos(e);
  this.touchObject = Object.assign(this.touchObject, {
    startX: this.reference,
    startY: this.referenceY
  });
  this.velocity = 0;
  this.amplitude = 0;
  this.frame = this.offset;
  this.timestamp = Date.now();
  clearInterval(this.ticker);
  this.ticker = setInterval(this.track, 100);
}
/**
 * Handle Carousel Drag
 * @param {Event} e
 */


function handleCarouselDrag(e) {
  if (this.pressed) {
    var x = this.xpos(e);
    var y = this.ypos(e);
    var delta = this.reference - x;
    var deltaY = Math.abs(this.referenceY - y);
    var direction = (0, _utils.getSwipeDirection)(Object.assign(this.touchObject, {
      endX: x,
      endY: y
    }));
    this.scrollType = {
      type: 'scroll',
      direction: direction
    };

    if (deltaY < 30 && !this.verticalDragged) {
      // If vertical scrolling don't allow dragging.
      if (delta > 2 || delta < -2) {
        this.dragged = true;
        this.reference = x;
        this.scroll('drag', this.offset + delta);
      }
    } else if (this.dragged) {
      // If dragging don't allow vertical scroll.
      e.preventDefault();
      e.stopPropagation();
    } else {
      // Vertical scrolling.
      this.verticalDragged = true;
    }
  }

  if (this.dragged) {
    // If dragging don't allow vertical scroll.
    e.preventDefault();
    e.stopPropagation();
  }
}
/**
   * Handle Carousel Release
   * @param {Event} e
   */


function handleCarouselRelease(e) {
  if (this.pressed) {
    this.pressed = false;
  } else {
    return;
  }

  this.beforeChangeTrigger = false;
  var onSwipe = this.props.onSwipe;
  onSwipe(this.scrollType.direction);
  clearInterval(this.ticker);
  this.target = this.offset;

  if (this.velocity > 10 || this.velocity < -10) {
    this.amplitude = 0.9 * this.velocity;
    this.target = this.offset + this.amplitude;
  }

  this.target = Math.round(this.target / this.dim) * this.dim; // No wrap of items.

  if (this.noWrap) {
    if (this.target >= this.dim * (this.items.length - 1)) {
      this.target = this.dim * (this.items.length - 1);
    } else if (this.target < 0) {
      this.target = 0;
    }
  }

  this.amplitude = this.target - this.offset;
  this.timestamp = Date.now();
  requestAnimationFrame(this.autoScroll);

  if (this.dragged) {
    e.preventDefault();
    e.stopPropagation();
  }
}
/**
 * Handle window resize will change items Height
 */


function handleResizeHeight(mutations) {
  var _this = this;

  var height = this.state.height;
  var mutation = mutations[mutations.length - 1];
  var offsetHeight = mutation.target.offsetHeight;

  if (height !== offsetHeight && offsetHeight > 0 && this.isMounted) {
    this.setState({
      height: offsetHeight
    }, function () {
      _this.resizeHeight = true;
    });
  }
}
/**
 * Handle carousel click
 */


function handleClick() {
  this.disconnectObserver();
}
/**
 * Handle autoplay hover to pause
 * @param {Object} options
 * @param {Number} options.autoplaySpeed
 */


function handleAutoplayPause() {
  var SliderRef = this.state.SliderRef;

  if (this.autoplayTimer) {
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = null;
    SliderRef.removeEventListener('mouseover', this.handleAutoplayPause);
    SliderRef.addEventListener('mouseleave', this.autoPlay);
  }
}

function handleKeyDown(e) {
  var _this$state$settings = this.state.settings,
      rtl = _this$state$settings.rtl,
      accessibility = _this$state$settings.accessibility;
  var dir = (0, _utils.keyHandler)(e, accessibility, rtl);

  if (dir === 'previous') {
    this.slickPrev();
  } else if (dir === 'next') {
    this.slickNext();
  }
}
/**
 * Handle Throttle Resize
 * @param {Event} e
 */


function handleResize(e) {
  this.slideInit();
  this.connectObserver();
  var settings = this.state.settings;
  var onResize = settings.onResize;

  if (settings.fullWidth) {
    var width = this.state.width;
    this.dim = width * 2 + settings.gutter;
    this.offset = this.center * 2 * width;
    this.target = this.offset;
  } else {
    this.scroll('resize');
  }

  onResize(e);
}

function handleWheel(e) {
  e.stopPropagation();
  e.preventDefault();
  this.beforeChangeTrigger = false;
  var _this$state = this.state,
      wheelScroll = _this$state.settings.wheelScroll,
      activeIndex = _this$state.activeIndex;
  var deltaY = e.deltaY;

  if (deltaY > 0) {
    this.scrollType = {
      type: 'wheel',
      direction: 'next'
    };
    this.slickNext(activeIndex + wheelScroll);
  } else if (deltaY < 0) {
    this.scrollType = {
      type: 'wheel',
      direction: 'prev'
    };
    this.slickPrev(activeIndex - wheelScroll);
  }
}

function handleVisibilityChange() {
  this.changeWindow = typeof document !== 'undefined' && document.visibilityState === 'visible';
}

function signupListener() {
  var _this$state2 = this.state,
      settings = _this$state2.settings,
      SliderRef = _this$state2.SliderRef;
  var swipe = settings.swipe,
      accessibility = settings.accessibility,
      wheel = settings.wheel;

  if (swipe) {
    SliderRef.addEventListener('touchstart', this.handleCarouselTap);
    SliderRef.addEventListener('touchmove', this.handleCarouselDrag);
    SliderRef.addEventListener('touchend', this.handleCarouselRelease);
  } else {
    SliderRef.removeEventListener('touchstart', this.handleCarouselTap);
    SliderRef.removeEventListener('touchmove', this.handleCarouselDrag);
    SliderRef.removeEventListener('touchend', this.handleCarouselRelease);
  }

  if (accessibility) {
    SliderRef.addEventListener('keydown', this.handleKeyDown);
  } else {
    SliderRef.removeEventListener('keydown', this.handleKeyDown);
  }

  if (wheel) {
    SliderRef.addEventListener('wheel', this.handleWheel);
  } else {
    SliderRef.removeEventListener('wheel', this.handleWheel);
  }

  SliderRef.addEventListener('mousedown', this.handleCarouselTap);
  SliderRef.addEventListener('mousemove', this.handleCarouselDrag);
  SliderRef.addEventListener('mouseup', this.handleCarouselRelease);
  SliderRef.addEventListener('mouseleave', this.handleCarouselRelease);
}

function removeListener() {
  var _this$state3 = this.state,
      settings = _this$state3.settings,
      SliderRef = _this$state3.SliderRef;
  var swipe = settings.swipe,
      accessibility = settings.accessibility,
      wheel = settings.wheel,
      autoplay = settings.autoplay;

  if (swipe) {
    SliderRef.removeEventListener('touchstart', this.handleCarouselTap);
    SliderRef.removeEventListener('touchmove', this.handleCarouselDrag);
    SliderRef.removeEventListener('touchend', this.handleCarouselRelease);
  }

  if (accessibility) {
    SliderRef.removeEventListener('keydown', this.handleKeyDown);
  }

  if (wheel) {
    SliderRef.removeEventListener('wheel', this.handleWheel);
  }

  if (autoplay) {
    window.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  SliderRef.removeEventListener('mousedown', this.handleCarouselTap);
  SliderRef.removeEventListener('mousemove', this.handleCarouselDrag);
  SliderRef.removeEventListener('mouseup', this.handleCarouselRelease);
  SliderRef.removeEventListener('mouseleave', this.handleCarouselRelease);
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyHandler = exports.getSwipeDirection = void 0;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist = 0;
  var yDist = 0;
  var swipeAngle;
  xDist = touchObject.startX - touchObject.endX;
  yDist = touchObject.startY - touchObject.endY;
  var r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return 'left';
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return 'right';
  }

  if (verticalSwiping === true) {
    if (swipeAngle > 45 && swipeAngle < 135) {
      return 'up';
    }

    return 'down';
  }

  return 'vertical';
};

exports.getSwipeDirection = getSwipeDirection;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match('TEXTAREA|INPUT|SELECT') || !accessibility) return '';
  if (e.keyCode === 37) return rtl ? 'next' : 'previous';
  if (e.keyCode === 39) return rtl ? 'previous' : 'next';
  return '';
};

exports.keyHandler = keyHandler;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(18);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// EXTERNAL MODULE: ./src/index.css
var src_0 = __webpack_require__(43);

// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(44);

// CONCATENATED MODULE: ./src/media/main_page/mainLogo.jpg
/* harmony default export */ var mainLogo = (__webpack_require__.p + "6d41eadc3d48b518b8161cd2551686b3.jpg");
// CONCATENATED MODULE: ./src/components/header/constant.ts
var phone_1 = "+38 (066) 929-71-18;";
var phone_2 = "+38 (066) 929-71-18;";
var address = "109147, м. Київ, вул. Марксистская 34";
var work_day = "пн-пт 9:00-19:00";
var constant_search = "Поиск";

// EXTERNAL MODULE: ./src/components/header/header.sass
var header = __webpack_require__(45);

// CONCATENATED MODULE: ./src/components/header/header.tsx


//@ts-ignore


var Header = function (props) {
    var set_search = props.set_search, search_val = props.search_val, set_search_val = props.set_search_val;
    var change_value = function (event) {
        return set_search_val(event.target.value);
    };
    var press_enter = function (event) {
        return event.which === 13 ? set_search(search_val) : null;
    };
    return (external_React_default.a.createElement("header", { className: "header" },
        external_React_default.a.createElement("a", { href: "/#" },
            external_React_default.a.createElement("img", { alt: "\u0432\u0441\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438", src: mainLogo, className: "header_logo" })),
        external_React_default.a.createElement("div", { className: "header_contacts" },
            external_React_default.a.createElement("div", { className: "header_contacts_phones" },
                external_React_default.a.createElement("a", { href: "tel:" + phone_1, className: "header_contacts_phones_one" }, phone_1),
                external_React_default.a.createElement("a", { href: "tel:" + phone_2, className: "header_contacts_phones_one" }, phone_2)),
            external_React_default.a.createElement("span", { className: "header_contacts_address" }, address),
            external_React_default.a.createElement("span", { className: "header_contacts_days" }, work_day),
            external_React_default.a.createElement("div", { className: "search" },
                external_React_default.a.createElement("input", { type: "text", className: "search_text", value: search_val, onKeyPress: press_enter, onChange: change_value, placeholder: "\u041F\u043E\u0438\u0441\u043A" }),
                external_React_default.a.createElement("button", { className: "search_button", onKeyPress: press_enter, onClick: function () { return set_search(search_val); } }, constant_search)))));
};

// CONCATENATED MODULE: ./src/components/footer/constants.ts
var ooo = "© ООО «Сервис-Консалтинг», 2004—2020";
var description = "Более 16 лет предоставляем высококачественные юридические услуги в Москве!";

// EXTERNAL MODULE: ./src/components/footer/footer.sass
var footer = __webpack_require__(46);

// CONCATENATED MODULE: ./src/components/footer/footer.tsx

//@ts-ignore


var Footer = function () {
    return (external_React_default.a.createElement("footer", { className: "footer" },
        external_React_default.a.createElement("p", { className: "footer_ooo" }, ooo),
        external_React_default.a.createElement("p", { className: "footer_description" }, description)));
};

// CONCATENATED MODULE: ./src/components/menu/constant.ts
var descript = "";
var href_component = [
    {
        name: "Бухгалтерські послуги",
        name_href: "/accounting_events",
        item_array: ["Податковий консалтинг", "Кадровий облік", "Бухгалтерський супровід", "Бухгалтерська звітність"],
        item_href: [
            "/accounting_events/tax_consulting",
            "/accounting_events/personnel_accounting",
            "/accounting_events/accounting_support",
            "/accounting_events/accounting"
        ]
    },
    {
        name: "Юридичні послуги",
        name_href: "/legal_services",
        item_array: ["Реєстрація юридичної особи", "Ліквідація юридичної особи", "Розробка договорів", "Посадові інструкії"],
        item_href: [
            "/legal_services/registration_of_a_legal_entity",
            "/legal_services/liquidation_of_a_legal_entity",
            "/legal_services/development_of_contracts",
            "/legal_services/job_descriptions"
        ]
    },
    {
        name: "Паспортно-візові послуги",
        name_href: "/passport_and_visa_services",
        item_array: ["Оформлення посвідки на тимчасове проживання", "Оформлення посвідки на постійне проживання",
            "Реєстрація місця проживання", "Страхування на період перебування в Україні", "Запрошення (робочі, комерційні)"],
        item_href: [
            "/passport_and_visa_services/temporary_residence",
            "/passport_and_visa_services/permanent_residence",
            "/passport_and_visa_services/registration_of_residence",
            "/passport_and_visa_services/insurance",
            "/passport_and_visa_services/invitation",
        ]
    },
    {
        name: "Event-management",
        name_href: "/event-management",
        item_array: ["Організація форумів, конференцій, семінарів", "Організація виставок та фестивалів", "Організація тренінгів, майстер-класів"],
        item_href: [
            "/event-management/forums",
            "/event-management/festivals",
            "/event-management/tranings"
        ]
    },
    {
        name: "Ліцензування",
        name_href: "/licensing",
        item_array: ["Ліцензування освітньої діяльності", "Погодження і реєстрація зовнішньої реклами", "Набуття права інтелектуальної власності"],
        item_href: [
            "/licensing/educational_activity",
            "/licensing/outdoor_advertising",
            "/licensing/intellectual_property"
        ]
    },
    {
        name: "Обратная связь",
        name_href: "/",
        item_array: ["О нас", "Заказать звонок"],
        item_href: [
            "/",
            "/"
        ]
    }
];

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js
var esm = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(27);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(10);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
react_router_createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = Object(esm["a" /* default */])();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, external_React_default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(external_React_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(external_React_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return external_React_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return external_React_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return external_React_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return external_React_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? external_React_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(external_React_default.a.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : tiny_invariant_esm(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return external_React_default.a.createElement(react_router_Router, _extends({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      external_React_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && external_React_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? external_React_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(external_React_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      return external_React_default.a.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = external_React_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(react_router_context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, react_router_key, global; }


//# sourceMappingURL=react-router.js.map

// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var react_router_dom_BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(external_React_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var react_router_dom_HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return external_React_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(external_React_default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var react_router_dom_normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var react_router_dom_forwardRef = external_React_default.a.forwardRef;

if (typeof react_router_dom_forwardRef === "undefined") {
  react_router_dom_forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = react_router_dom_forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== react_router_dom_forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return external_React_default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = react_router_dom_forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history;
    var location = react_router_dom_normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== react_router_dom_forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return external_React_default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = external_React_default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return external_React_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = react_router_dom_normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return external_React_default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext =
/*#__PURE__*/
external_React_default.a.createContext(null);

if (false) {}

/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(external_React_["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(external_React_["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(external_React_["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return external_React_default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (false) {}

/* harmony default export */ var components_Provider = (Provider);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? external_React_["useLayoutEffect"] : external_React_["useEffect"];
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js







 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  if (false) { var customStoreWarningMessage; }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? external_React_["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(external_React_["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(external_React_["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(external_React_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(external_React_["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(external_React_["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(external_React_["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(external_React_["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(external_React_["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(external_React_["useRef"])();
      var lastWrapperProps = Object(external_React_["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(external_React_["useRef"])();
      var renderIsScheduled = Object(external_React_["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(external_React_["useMemo"])(function () {
        return external_React_default.a.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(external_React_["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return external_React_default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? external_React_default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = external_React_default.a.forwardRef(function forwardConnectRef(props, ref) {
        return external_React_default.a.createElement(Connect, _extends({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject_isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject_isPlainObject(value)) {
    warning_warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning_warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function connect_match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = connect_match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = connect_match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = connect_match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (/*#__PURE__*/createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(external_React_["useContext"])(ReactReduxContext);

  if (false) {}

  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(external_React_["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore =
/*#__PURE__*/
createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch =
/*#__PURE__*/
createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(external_React_["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(external_React_["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(external_React_["useRef"])();
  var latestSelector = Object(external_React_["useRef"])();
  var latestSelectedState = Object(external_React_["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(external_React_["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (false) {}

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector =
/*#__PURE__*/
createSelectorHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js










setBatch(external_ReactDOM_["unstable_batchedUpdates"]);

// CONCATENATED MODULE: ./src/components/show.js
var show = function show() {
  if (document.readyState === "complete") show_method();else document.body.onload = function () {
    show_method();
  };
};

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
// EXTERNAL MODULE: ./src/components/menu/main_menu.sass
var main_menu = __webpack_require__(51);

// CONCATENATED MODULE: ./src/components/menu/main_menu.tsx

//@ts-ignore





var MainMenu = function (props) {
    var changeSel = props.changeSel, app_class = props.app_class, changePg = props.changePg;
    var page = props.changePage.page;
    var _a = Object(external_React_["useState"])(""), path = _a[0], set_path = _a[1];
    var _b = Object(external_React_["useState"])(""), past_href = _b[0], set_past_href = _b[1];
    var _c = Object(external_React_["useState"])(""), current_href = _c[0], set_current_href = _c[1];
    var _d = Object(external_React_["useState"])(""), plus_href = _d[0], set_plus_href = _d[1];
    var changeSelect = function (li_index) {
        return changeSel(li_index);
    };
    if (path !== window.location.href.split('/')[4])
        set_path(window.location.href.split('/')[4]);
    Object(external_React_["useEffect"])(function () {
        if (window.location.href.split('/')[4] === "")
            app_class(false);
        else
            app_class(true);
        set_current_href(window.location.href);
        if (past_href !== window.location.href) {
            set_past_href(current_href);
            set_current_href(window.location.href);
        }
    }, [app_class, window.location.href, current_href, past_href]);
    var change_sublist = function (index, href) {
        if (page === index && current_href === href)
            changePg(-1);
        else {
            changePg(plus_href === href ? -1 : index);
            set_plus_href(plus_href === href ? "" : href);
        }
    };
    show();
    return (external_React_default.a.createElement("div", { id: "main_menu", className: "main_menu hide_menu" }, Object.values(href_component).map(function (ul_item, ul_index) {
        var check_link = ul_index + 1 === Object.values(href_component).length ? true : false;
        return (external_React_default.a.createElement(external_React_default.a.Fragment, { key: ul_index },
            external_React_default.a.createElement("div", { className: "wrapper_div" },
                external_React_default.a.createElement("div", { className: "wrapper_div_link_href" }, !check_link ?
                    external_React_default.a.createElement(external_React_default.a.Fragment, null,
                        external_React_default.a.createElement(NavLink, { to: ul_item.name_href, className: "main_menu_title", onClick: function () { return change_sublist(ul_index, ul_item.name_href); } }, ul_item.name),
                        external_React_default.a.createElement("span", { className: "wrapper_div_link_href_plus" + (page === ul_index ? " wrapper_div_link_href_plus_color" : ""), onClick: function () { return change_sublist(ul_index, ul_item.name_href); } }, page === ul_index ? "-" : "+"))
                    :
                        external_React_default.a.createElement(Link, { to: ul_item.name_href, className: "main_menu_title", onClick: function () { return changeSelect(0); } }, ul_item.name)),
                external_React_default.a.createElement("ul", { id: ul_item.name, className: "main_menu_block" + (page === ul_index || check_link ? " main_menu_block_active" : "") }, Object.values(ul_item.item_array).map(function (li_item, li_index) {
                    return (external_React_default.a.createElement("li", { id: path, key: li_index, className: "main_menu_block_item" }, !check_link ? external_React_default.a.createElement(NavLink, { to: ul_item.item_href[li_index], className: "main_menu_block_item_link" }, li_item)
                        :
                            external_React_default.a.createElement(Link, { to: ul_item.item_href[li_index], className: "main_menu_block_item_link", onClick: function () { return changeSelect(li_index); } }, li_item)));
                })))));
    })));
};
var main_menu_mapStateToProps = function (state) {
    return {
        changeSelector: state.changeSelector,
        changePage: state.changePage,
    };
};
var main_menu_mapDispatchToProps = function (dispatch) {
    return {
        changeSel: function (cs) {
            dispatch({ type: 'CHANGE_SELECTOR', cs: cs });
        },
        changePg: function (pg) {
            dispatch({ type: 'CHANGE_PAGE', page: pg });
        }
    };
};
/* harmony default export */ var menu_main_menu = (connect_connect(main_menu_mapStateToProps, main_menu_mapDispatchToProps)(withRouter(MainMenu)));

// EXTERNAL MODULE: ./src/components/search/search_queries.json
var search_queries = __webpack_require__(41);

// EXTERNAL MODULE: ./src/components/search/search.sass
var search_search = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/search/search.tsx





//@ts-ignore

var SplitString = function (props) {
    var search = props.search, set_search = props.set_search, set_search_val = props.set_search_val, changePg = props.changePg;
    var without_double_spaces = search.replace(/\s+/g, ' ').trim();
    var src = without_double_spaces.toLowerCase().split(" ");
    var count_equals = 0;
    var result_array = external_React_default.a.createElement(external_React_default.a.Fragment, null, search_queries.map(function (item) {
        return (item.queries.map(function (string_item, navlink_index) {
            string_item = string_item.replace(/[,]/g, "");
            count_equals = 0;
            var split_string = string_item.toLowerCase().split(" ");
            src.map(function (search_item) {
                return (split_string.map(function (split_string_item) {
                    return (split_string_item === search_item ?
                        count_equals++
                        : null);
                }));
            });
            return (count_equals === src.length ?
                //@ts-ignore 
                external_React_default.a.createElement(Link, { className: "search_link", key: navlink_index, to: { pathname: item.href, propsSearch: without_double_spaces }, onClick: function () {
                        set_search("");
                        set_search_val("");
                        Object.values(href_component).map(function (ul_item, ul_index) {
                            return (ul_item.name_href === "/" + item.href.split("/")[1]) ?
                                ul_item.name_href === "/" ? changePg(-1) : changePg(ul_index) : null;
                        });
                    }, replace: true }, string_item)
                : null);
        }));
    }));
    return result_array;
};
var Search = function (props) {
    var search = props.search, set_search = props.set_search, set_search_val = props.set_search_val, changePg = props.changePg;
    return (external_React_default.a.createElement("div", { className: "search" + (search === "" ? " hide_block" : "") }, search !== "" ?
        external_React_default.a.createElement(SplitString, { search: search, set_search: set_search, set_search_val: set_search_val, changePg: changePg })
        : ""));
};
var search_mapStateToProps = function (state) {
    return {
        changeSelector: state.changeSelector,
        changePage: state.changePage,
    };
};
var search_mapDispatchToProps = function (dispatch) {
    return {
        changePg: function (pg) {
            dispatch({ type: 'CHANGE_PAGE', page: pg });
        }
    };
};
/* harmony default export */ var components_search_search = (connect_connect(search_mapStateToProps, search_mapDispatchToProps)(Search));

// CONCATENATED MODULE: ./src/App.tsx


//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

var App_App = function (props) {
    var _a = Object(external_React_["useState"])(""), searc = _a[0], set_search = _a[1];
    var _b = Object(external_React_["useState"])(""), search_val = _b[0], set_search_val = _b[1];
    var _c = Object(external_React_["useState"])(false), app_class = _c[0], set_app_class = _c[1];
    return (external_React_default.a.createElement("div", { className: "App" },
        external_React_default.a.createElement(Header, { set_search: set_search, search_val: search_val, set_search_val: set_search_val }),
        external_React_default.a.createElement("div", { className: (app_class ? "app_content" : "") + (searc !== "" ? " hide_block" : "") },
            external_React_default.a.createElement(menu_main_menu, { app_class: set_app_class }),
            props.children),
        external_React_default.a.createElement(components_search_search, { search: searc, set_search: set_search, set_search_val: set_search_val }),
        external_React_default.a.createElement(Footer, null)));
};

// EXTERNAL MODULE: ./src/components/pages/main_page/slider/slider.sass
var slider = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/infinite-react-carousel/lib/index.js
var lib = __webpack_require__(42);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/media/main_page/slider/1.png
/* harmony default export */ var _1 = (__webpack_require__.p + "5342e545450c5c346dd2722d29ba25e8.png");
// CONCATENATED MODULE: ./src/media/main_page/slider/2.png
/* harmony default export */ var _2 = (__webpack_require__.p + "8e5d7bd08da969f940b2eddcfd99a4a2.png");
// CONCATENATED MODULE: ./src/media/main_page/slider/3.png
/* harmony default export */ var _3 = (__webpack_require__.p + "2a2db1eac51f9c1d8305b38516621da5.png");
// CONCATENATED MODULE: ./src/media/main_page/slider/4.png
/* harmony default export */ var _4 = (__webpack_require__.p + "47ca9f33c6ca897a2592f48cba879212.png");
// CONCATENATED MODULE: ./src/components/pages/main_page/slider/constant.ts




var slide_1 = {
    title_1: "Деловые предложения",
    title_2: "Компетентная всесторонняя поддержка!",
    img: _1,
    img_alt: "Поддержка"
};
var slide_2 = {
    title_1: "Паспортно-визовые услуги",
    title_2: "Ваше доверие - лучшая поддержка!",
    img: _2,
    img_alt: "Паспортно-визовые услуги"
};
var slide_3 = {
    title_1: "Аутстаффинг",
    title_2: "Ваша экономия 34%!",
    img: _3,
    img_alt: "Аутстаффинг"
};
var slide_4 = {
    title_1: "Разрешение на работу",
    title_2: "Легально! Быстро! Удобно!",
    img: _4,
    img_alt: "Разрешение на работу"
};
var slides_array = [
    slide_1,
    slide_2,
    slide_3,
    slide_4
];

// CONCATENATED MODULE: ./src/components/pages/main_page/slider/slider.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


//@ts-ignore

//@ts-ignore

var MySlider = function () {
    var settings = {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        swipe: false,
        wheel: true
    };
    return (external_React_default.a.createElement("div", null,
        external_React_default.a.createElement(lib_default.a, __assign({}, settings, { className: "slider" }), slides_array.map(function (item, index) {
            return (external_React_default.a.createElement("div", { key: index, className: "slider_slide" },
                external_React_default.a.createElement("div", { className: "slider_slide_title" },
                    external_React_default.a.createElement("h2", { className: "title_1" }, item.title_1),
                    external_React_default.a.createElement("h2", { className: "title_2" }, item.title_2)),
                external_React_default.a.createElement("div", { className: "slider_slide_image" },
                    external_React_default.a.createElement("img", { alt: item.alt, src: item.img, className: "img" }))));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/main_page/main_page.sass
var main_page = __webpack_require__(154);

// CONCATENATED MODULE: ./src/components/pages/main_page/selector/constant.ts
var about_company = {
    item: "О нас",
    description: "Более 13 лет компания «Сервис-Консалтинг» предоставляет высококачественные юридические услуги в Москве. За все это время наша компания заслужила репутацию надежного и стабильного партнера. Постоянное сотрудничество с миграционной службой, опыт и знания позволяют нам давать клиентам консультации по главным проблемам и вопросам, связанных с трудовой деятельностью мигрантов в нашей стране."
};
var request_call = {
    item: "Заказать звонок",
    description: ""
};
var selection_array = [about_company, request_call];

// EXTERNAL MODULE: ./src/components/pages/main_page/selector/selector.sass
var selector_selector = __webpack_require__(155);

// CONCATENATED MODULE: ./src/components/pages/main_page/selector/form/constant.ts
var send = "Отправить сообщение";
var constant_reset = "Очистить форму";
var form_request_call = [
    "Организация",
    "Контактное лицо",
    "Телефон",
    "Удобное время",
    "Тема звонка"
];

// EXTERNAL MODULE: ./src/components/pages/main_page/selector/form/form.sass
var form_form = __webpack_require__(156);

// CONCATENATED MODULE: ./src/components/pages/main_page/selector/form/form.tsx

//@ts-ignore


var Form = function () {
    var _a = Object(external_React_["useState"])(""), field_1 = _a[0], set_field_1 = _a[1];
    var _b = Object(external_React_["useState"])(""), field_2 = _b[0], set_field_2 = _b[1];
    var _c = Object(external_React_["useState"])(""), field_3 = _c[0], set_field_3 = _c[1];
    var _d = Object(external_React_["useState"])(""), field_4 = _d[0], set_field_4 = _d[1];
    var _e = Object(external_React_["useState"])(""), field_5 = _e[0], set_field_5 = _e[1];
    var fields_array = [
        [field_1, set_field_1],
        [field_2, set_field_2],
        [field_3, set_field_3],
        [field_4, set_field_4],
        [field_5, set_field_5],
    ];
    var handleSubmit = function (e) {
        e.preventDefault();
        var body = {
            field_1: field_1,
            field_2: field_2,
            field_3: field_3,
            field_4: field_4,
            field_5: field_5
        };
        fetch('/sendMail', {
            method: 'POST',
            body: JSON.stringify(body),
        })
            .then(function (response) {
            console.log(response.status);
        })
            .catch(function (err) {
            console.log(500);
        });
        reset_form();
    };
    var reset_form = function () {
        for (var i = 0; i < fields_array.length; i++)
            fields_array[i][1]("");
    };
    var change_field = function (event, set_field) {
        return set_field(event.target.value);
    };
    return (external_React_default.a.createElement("div", { className: "wrapper_form" },
        external_React_default.a.createElement("form", { className: "form" },
            form_request_call.map(function (item, index) {
                return (external_React_default.a.createElement("div", { key: index, className: "form_field" },
                    external_React_default.a.createElement("span", { className: "form_field_text" }, item),
                    Object.keys(form_request_call).length > index + 1
                        ?
                            external_React_default.a.createElement("input", { type: "text", value: fields_array[index][0], className: "form_field_input", name: item, onChange: function (e) { return change_field(e, fields_array[index][1]); } })
                        :
                            external_React_default.a.createElement("textarea", { className: "form_field_textarea", value: fields_array[index][0], name: item, onChange: function (e) { return change_field(e, fields_array[index][1]); } })));
            }),
            external_React_default.a.createElement("div", { className: "form_field_button" },
                external_React_default.a.createElement("span", { className: "form_field_button_reset", onClick: reset_form }, constant_reset),
                external_React_default.a.createElement("span", { className: "form_field_button_send", onClick: handleSubmit }, send))),
        external_React_default.a.createElement("div", { className: "form_button" })));
};

// CONCATENATED MODULE: ./src/components/pages/main_page/selector/selector.tsx

//@ts-ignore



//@ts-ignore

var Selector = function (props) {
    var cs = props.changeSelector.cs;
    var changeSel = props.changeSel;
    var handle_change = function (index) {
        return changeSel(index);
    };
    return (external_React_default.a.createElement("div", { className: "selector" },
        external_React_default.a.createElement("div", { className: "selector_change_items" }, selection_array.map(function (item, index) {
            return (external_React_default.a.createElement("span", { key: index, className: "item" + (cs === index ? " active_item" : ""), onClick: function () { return handle_change(index); } }, item.item));
        })),
        external_React_default.a.createElement("div", { className: "selector_description_items" }, selection_array[cs].description === "" ? external_React_default.a.createElement(Form, null) :
            external_React_default.a.createElement("span", { className: "description active_description" }, selection_array[cs].description))));
};
var selector_mapStateToProps = function (state) {
    return {
        changeSelector: state.changeSelector
    };
};
var selector_mapDispatchToProps = function (dispatch) {
    return {
        changeSel: function (cs) {
            dispatch({ type: 'CHANGE_SELECTOR', cs: cs });
        }
    };
};
/* harmony default export */ var main_page_selector_selector = (connect_connect(selector_mapStateToProps, selector_mapDispatchToProps)(Selector));

// EXTERNAL MODULE: ./src/components/pages/main_page/menu/menu.sass
var menu = __webpack_require__(157);

// CONCATENATED MODULE: ./src/components/pages/main_page/menu/constant.ts
var href_component_1 = [
    {
        name: "Бухгалтерські послуги",
        name_href: "/accounting_events",
        item_array: ["Податковий консалтинг", "Кадровий облік", "Бухгалтерський супровід", "Бухгалтерська звітність"],
        item_href: [
            "/accounting_events/tax_consulting",
            "/accounting_events/personnel_accounting",
            "/accounting_events/accounting_support",
            "/accounting_events/accounting"
        ]
    },
    {
        name: "Event-management",
        name_href: "/event-management",
        item_array: ["Організація форумів, конференцій, семінарів", "Організація виставок та фестивалів", "Організація тренінгів, майстер-класів"],
        item_href: [
            "/event-management/forums",
            "/event-management/festivals",
            "/event-management/tranings"
        ]
    },
    {
        name: "Ліцензування",
        name_href: "/licensing",
        item_array: ["Ліцензування освітньої діяльності", "Погодження і реєстрація зовнішньої реклами", "Набуття права інтелектуальної власності"],
        item_href: [
            "/licensing/educational_activity",
            "/licensing/outdoor_advertising",
            "/licensing/intellectual_property"
        ]
    }
];
var href_component_2 = [
    {
        name: "Паспортно-візові послуги",
        name_href: "/passport_and_visa_services",
        item_array: ["Оформлення посвідки на тимчасове проживання", "Оформлення посвідки на постійне проживання",
            "Реєстрація місця проживання", "Страхування на період перебування в Україні", "Запрошення (робочі, комерційні)"],
        item_href: [
            "/passport_and_visa_services/temporary_residence",
            "/passport_and_visa_services/permanent_residence",
            "/passport_and_visa_services/registration_of_residence",
            "/passport_and_visa_services/insurance",
            "/passport_and_visa_services/invitation",
        ]
    },
    {
        name: "Юридичні послуги",
        name_href: "/legal_services",
        item_array: ["Реєстрація юридичної особи", "Ліквідація юридичної особи", "Розробка договорів", "Посадові інструкії"],
        item_href: [
            "/legal_services/registration_of_a_legal_entity",
            "/legal_services/liquidation_of_a_legal_entity",
            "/legal_services/development_of_contracts",
            "/legal_services/job_descriptions"
        ]
    }
];
var href_component_array = [href_component_1, href_component_2];

// CONCATENATED MODULE: ./src/components/pages/main_page/menu/menu.tsx



//@ts-ignore


var Menu = function (props) {
    var changePg = props.changePg;
    return (external_React_default.a.createElement("div", { className: "menu" }, href_component_array.map(function (href_item, href_index) {
        return (external_React_default.a.createElement("div", { key: href_index }, Object.values(href_item).map(function (ul_item, ul_index) {
            return (external_React_default.a.createElement(external_React_default.a.Fragment, { key: ul_index },
                ul_index + 1 !== Object.values(href_item).length ? "" : external_React_default.a.createElement("div", null),
                external_React_default.a.createElement("div", null,
                    external_React_default.a.createElement(NavLink, { to: ul_item.name_href, className: "menu_title", onClick: function () { changePg(href_index * 2 + ul_index); } }, ul_item.name),
                    external_React_default.a.createElement("ul", { className: "menu_block" }, Object.values(ul_item.item_array).map(function (li_item, li_index) {
                        return (external_React_default.a.createElement("li", { key: li_index, className: "menu_block_item" },
                            external_React_default.a.createElement(NavLink, { to: ul_item.item_href[li_index], className: "menu_block_item_link", onClick: function () { return changePg(href_index * 2 + ul_index); } }, li_item)));
                    })))));
        })));
    })));
};
var menu_mapStateToProps = function (state) {
    return {
        changePage: state.changePage,
    };
};
var menu_mapDispatchToProps = function (dispatch) {
    return {
        changePg: function (pg) {
            dispatch({ type: 'CHANGE_PAGE', page: pg });
        }
    };
};
/* harmony default export */ var menu_menu = (connect_connect(menu_mapStateToProps, menu_mapDispatchToProps)(Menu));

// CONCATENATED MODULE: ./src/components/pages/main_page/main_page.tsx

//@ts-ignore


//@ts-ignore

//@ts-ignore


var MainPage = function () {
    show();
    return (external_React_default.a.createElement("div", { className: "main_page" },
        external_React_default.a.createElement(MySlider, null),
        external_React_default.a.createElement("div", { className: "main_page_description" },
            external_React_default.a.createElement("div", { className: "main_page_description_selector" },
                external_React_default.a.createElement(main_page_selector_selector, null)),
            external_React_default.a.createElement(menu_menu, null))));
};

// EXTERNAL MODULE: ./src/components/pages/legal_services/legal_services.sass
var legal_services = __webpack_require__(158);

// CONCATENATED MODULE: ./src/components/pages/legal_services/constant.ts
var constant_title = "Юридичні послуги";
var main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/check_title.tsx

var check_title = function (search, title) {
    var original_str = title.toLowerCase().split(" ");
    var lower_title = title.toLowerCase().replace(/[,]/g, "");
    var lower_search = search.toLowerCase().replace(/[,]/g, "");
    var split_title = title.split(" ");
    var split_string = function () {
        if (lower_title !== lower_search)
            return (lower_title.replace(lower_search, "").split(" "));
        else
            return search;
    };
    var check_first_letter = function (check_string) {
        var split_check_string = check_string.replace(/\s/g, '');
        split_check_string = split_check_string.replace(/[,]/g, "");
        for (var i = 0; i < split_title.length; i++) {
            var check_index = split_title[i].toLowerCase() === split_check_string && (i + 1 === split_title.length) ? "" : " ";
            if (split_title[i] === split_check_string)
                return split_check_string + check_index;
            if (split_title[i].toLowerCase() === split_check_string && split_title[i] !== split_check_string)
                return split_check_string.charAt(0).toUpperCase() + split_check_string.substr(1) + check_index;
            if (i + 1 === split_title.length)
                return check_string;
        }
    };
    var t = split_string();
    return (external_React_default.a.createElement("div", null, typeof t === "object" ?
        t.map(function (item, index) {
            console.log(index);
            return (external_React_default.a.createElement(external_React_default.a.Fragment, { key: index }, item === "" ?
                external_React_default.a.createElement("span", { className: "search_value" }, (index > 0 ? " " : "") + check_first_letter(original_str[index])) : " " +
                check_first_letter(item)));
        })
        :
            external_React_default.a.createElement("span", { className: "search_value" }, t)));
};

// CONCATENATED MODULE: ./src/components/pages/legal_services/legal_services.tsx



//@ts-ignore

//@ts-ignore

var LegalServices = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "legal_services" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, constant_title)) : constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/accounting_events/personnel_accounting/personnel_accounting.sass
var personnel_accounting = __webpack_require__(159);

// CONCATENATED MODULE: ./src/components/pages/accounting_events/personnel_accounting/constant.ts
var personnel_accounting_constant_title = "Кадровий облік";
var constant_main_text = [
    {
        tag: "span",
        text: [
            "Запорука успішності бізнесу ",
        ]
    },
    {
        tag: "",
        text: [
            " - людський ресурс, тому важливо мати  правильно та ефективно побудовану систему управління людським ресурсом. "
        ]
    },
    {
        tag: "p",
        text: [
            "Наша компанія надає наступні послуги:"
        ]
    },
    {
        tag: "li",
        text: [
            "-	розробка та впровадження організаційної структури організації;",
            "-	організація кадрової політики організації; ",
            "-	оцінка персоналу;",
            "-	підбір персоналу;",
            "-	корпоративне навчання;",
            "-	розробка локальних нормативних актів (накази, розпорядження, положення);",
            "-	розробка договорів (трудовий, цивільно-правова угода, контракт);",
            "-	розробка посадових інструкцій. ",
        ]
    }
];

// EXTERNAL MODULE: ./src/components/common_styles.sass
var common_styles = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/pages/accounting_events/personnel_accounting/personnel_accounting.tsx



//@ts-ignore

//@ts-ignore


var PersonnelAccounting = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "personnel_accounting" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, personnel_accounting_constant_title)) : personnel_accounting_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/accounting_events/tax_consulting/tax_consulting.sass
var tax_consulting = __webpack_require__(160);

// CONCATENATED MODULE: ./src/components/pages/accounting_events/tax_consulting/constant.ts
var tax_consulting_constant_title = "Податковий консалтинг";
var tax_consulting_constant_main_text = [
    {
        tag: "span",
        text: [
            "Податковий консалтинг",
        ]
    },
    {
        tag: "",
        text: [
            " – потреба часу, спрямована на врегулювання відносин у сфері справляння податків і зборів."
        ]
    },
    {
        tag: "p",
        text: [
            "Звернення в нашу компанію надає Вам гарантію на отримання професійної консультації з питань оподаткування та податково аудиту, а саме:"
        ]
    },
    {
        tag: "li",
        text: [
            "-	розробка моделі оподаткування  підприємства (організації);",
            "-	аналіз діючої системи оподаткування;",
            "-	планування і оптимізація системи оподаткування; ",
            "-	податковий аудит;",
            "-	складання податкових декларацій;",
            "-	консультації щодо податкових пільг передбачених державою.",
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/accounting_events/tax_consulting/tax_consulting.tsx



//@ts-ignore

//@ts-ignore


var TaxConsulting = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "tax_consulting" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, tax_consulting_constant_title)) : tax_consulting_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, tax_consulting_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/legal_services/job_descriptions/job_descriptions.sass
var job_descriptions = __webpack_require__(161);

// CONCATENATED MODULE: ./src/components/pages/legal_services/job_descriptions/constant.ts
var job_descriptions_constant_title = "Посадові інструкії";
var job_descriptions_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/legal_services/job_descriptions/job_descriptions.tsx



//@ts-ignore

//@ts-ignore


var JobDescriptions = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "job_descriptions" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, job_descriptions_constant_title)) : job_descriptions_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, job_descriptions_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/legal_services/development_of_contracts/development_of_contracts.sass
var development_of_contracts = __webpack_require__(162);

// CONCATENATED MODULE: ./src/components/pages/legal_services/development_of_contracts/constant.ts
var development_of_contracts_constant_title = "Розробка договорів";
var development_of_contracts_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/legal_services/development_of_contracts/development_of_contracts.tsx



//@ts-ignore

//@ts-ignore


var DevelopmentOfContracts = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "development_of_contracts" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, development_of_contracts_constant_title)) : development_of_contracts_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, development_of_contracts_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/legal_services/registration_of_a_legal_entity/registration_of_a_legal_entity.sass
var registration_of_a_legal_entity = __webpack_require__(163);

// CONCATENATED MODULE: ./src/components/pages/legal_services/registration_of_a_legal_entity/constant.ts
var registration_of_a_legal_entity_constant_title = "Реєстрація юридичної особи";
var registration_of_a_legal_entity_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/legal_services/registration_of_a_legal_entity/registration_of_a_legal_entity.tsx



//@ts-ignore

//@ts-ignore


var RegistrationOfALegalEntity = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "registration_of_a_legal_entity" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, registration_of_a_legal_entity_constant_title)) : registration_of_a_legal_entity_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, registration_of_a_legal_entity_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/accounting_events/accounting_events.sass
var accounting_events = __webpack_require__(164);

// CONCATENATED MODULE: ./src/components/pages/accounting_events/constant.ts
var accounting_events_constant_title = "Бізнес заходи";
var accounting_events_constant_main_text = "Бізнес-заходи потребують окремого підходу, тому що вони відносяться до іміджевих зустрічей. Наша компанія спеціалізується на створенні креативних івентів, які зможуть підтримати корпоративну культуру вашої компанії. Ми проведемо форум, конференцію чи семінар, враховуючи всі ваші побажання. Збір інформації та розробка програми з чітким розподілом часових рамок, розрахунок бюджету, підбір спікерів, робота з гостями, організація розміщення іногородніх гостей,  макетування та розсилка запрошень – і це ще не повний перелік послуг, які ми надаємо. Локацію обираємо виходячи з потреб замовника, бюджету та територіального розміщення.  За необхідності ми готові створити зони для кава-брейків, фуршетів, прийомів, обідів. Ми можемо провести міжнародну конференцію, враховуючи особливості культури, традиції та смаки відвідувачів з різних країн. Щоб залишити позитивне враження про свій захід, ми рекомендуємо зробити учасникам заходу приємний і корисний подарунок з фірмовим знаком. Обираючи нас – ви обираєте якість та незабутні враження від проведеного заходу!";

// CONCATENATED MODULE: ./src/components/pages/accounting_events/accounting_events.tsx



//@ts-ignore

//@ts-ignore


var AccountingEvents = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "accounting_events" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, accounting_events_constant_title)) : accounting_events_constant_title),
        external_React_default.a.createElement("p", { className: "common_text" }, accounting_events_constant_main_text)));
};

// EXTERNAL MODULE: ./src/components/pages/accounting_events/accounting/accounting.sass
var accounting = __webpack_require__(165);

// CONCATENATED MODULE: ./src/components/pages/accounting_events/accounting/constant.ts
var accounting_constant_title = "Бухгалтерська звітність";
var accounting_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/accounting_events/accounting/accounting.tsx



//@ts-ignore

//@ts-ignore


var Accounting = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "accounting" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, accounting_constant_title)) : accounting_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, accounting_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/accounting_events/accounting_support/accounting_support.sass
var accounting_support = __webpack_require__(166);

// CONCATENATED MODULE: ./src/components/pages/accounting_events/accounting_support/constant.ts
var accounting_support_constant_title = "Бухгалтерський супровід";
var accounting_support_constant_main_text = [
    {
        tag: "p",
        text: [
            "Надаємо комплекс якісних послуг з бухгалтерського супроводу фізичних осіб підприємців та юридичних осіб різних форм власності та видів діяльності, а саме:"
        ]
    },
    {
        tag: "li",
        text: [
            "-	діагностика стану бухгалтерського обліку;",
            "-	консультування з питань ведення бухгалтерського обліку та подання звітності;",
            "-	розрахунок і формування платіжного доручення на сплату єдиного соціального внеску;",
            "-	складання та подання податкової декларації платника податку;",
            "-	підготовка реєстраційних заявок для отримання електронно-цифрових підписів;",
            "-	допомога в спілкуванні (листуванні) з контролюючими органами;",
            "-	розрахунок лікарняних, відпусток;",
            "-	подання повідомлення до ДФСУ про прийом співробітника на роботу;",
            "-	ведення обліку заробітної плати.",
        ]
    },
    {
        tag: "p",
        text: [
            "Співпрацюючи з нами ви отримаєте надійного та кваліфікованого партнера, мінімізувавши при цьому свої витрати."
        ]
    },
];

// CONCATENATED MODULE: ./src/components/pages/accounting_events/accounting_support/accounting_support.tsx



//@ts-ignore

//@ts-ignore


var AccountingSupport = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "accounting_support" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, accounting_support_constant_title)) : accounting_support_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, accounting_support_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/legal_services/liquidation_of_a_legal_entity/liquidation_of_a_legal_entity.sass
var liquidation_of_a_legal_entity = __webpack_require__(167);

// CONCATENATED MODULE: ./src/components/pages/legal_services/liquidation_of_a_legal_entity/constant.ts
var liquidation_of_a_legal_entity_constant_title = "Ліквідація юридичної особи";
var liquidation_of_a_legal_entity_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/legal_services/liquidation_of_a_legal_entity/liquidation_of_a_legal_entity.tsx



//@ts-ignore

//@ts-ignore


var LiquidationOfALegalEntity = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "liquidation_of_a_legal_entity" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, liquidation_of_a_legal_entity_constant_title)) : liquidation_of_a_legal_entity_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, liquidation_of_a_legal_entity_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/passport_and_visa_services/passport_and_visa_services.sass
var passport_and_visa_services = __webpack_require__(168);

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/constant.ts
var passport_and_visa_services_constant_title = "Паспортно-візові послуги";
var passport_and_visa_services_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/passport_and_visa_services.tsx



//@ts-ignore

//@ts-ignore


var PassportAndVisaServices = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "passport_and_visa_services" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, passport_and_visa_services_constant_title)) : passport_and_visa_services_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, passport_and_visa_services_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/passport_and_visa_services/temporary_residence/temporary_residence.sass
var temporary_residence = __webpack_require__(169);

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/temporary_residence/constant.ts
var temporary_residence_constant_title = "оформлення посвідки на тимчасове проживання";
var temporary_residence_constant_main_text = [
    {
        tag: "span",
        class: "bold_text",
        text: [
            "Посвідка на тимчасове (постійне) місце проживання ",
        ]
    },
    {
        tag: "",
        text: [
            "оформляється іноземцям та особам без громадянства, які на законних підставах тимчасово перебувають на території України та мають всі необхідні документи для подачі до Державної міграційної служби України."
        ]
    },
    {
        tag: "p",
        text: [
            "Перелік документів необхідних для оформлення залежить від Вашої ситуації, мети візиту, підстав для оформлення тимчасової (постійної) посвідки на проживання в Україні."
        ]
    },
    {
        tag: "span",
        class: "bold_text cursive_text margin-l",
        text: [
            "Орієнтовний перелік документів:"
        ]
    },
    {
        tag: "li",
        class: "cursive_text",
        text: [
            "- паспортний документ іноземця або документ що посвідчує особу без громадянства, з візою типу D;",
            "- переклад на українську мову паспортного документа або документа що посвідчує особу без громадянства нотаріально завірений (нотаріальний переклад входить у вартість послуги);",
            "- дійсний поліс медичного страхування (входить у вартість послуги);",
            "- документ, що підтверджує сплату адміністративного збору, або документ про звільнення від його сплати.",
        ]
    },
    {
        tag: "span",
        class: "bold_text",
        text: [
            "Термін виконання – 15 робочих днів.",
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/temporary_residence/temporary_residence.tsx



//@ts-ignore

//@ts-ignore


var TemporaryResidence = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "temporary_residence" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, temporary_residence_constant_title)) : temporary_residence_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, temporary_residence_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: item.class }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style " + item.class, key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/passport_and_visa_services/permanent_residence/permanent_residence.sass
var permanent_residence = __webpack_require__(170);

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/permanent_residence/constant.ts
var permanent_residence_constant_title = "оформлення посвідки на постійне проживання";
var permanent_residence_constant_main_text = [
    {
        tag: "span",
        text: [
            "Посвідка на тимчасове (постійне) місце проживання ",
        ]
    },
    {
        tag: "",
        text: [
            "оформляється іноземцям та особам без громадянства, які на законних підставах тимчасово перебувають на території України та мають всі необхідні документи для подачі до Державної міграційної служби України."
        ]
    },
    {
        tag: "p",
        text: [
            "Перелік документів необхідних для оформлення залежить від Вашої ситуації, мети візиту, підстав для оформлення тимчасової (постійної) посвідки на проживання в Україні.",
            "Орієнтовний перелік документів:"
        ]
    },
    {
        tag: "li",
        text: [
            "- паспортний документ іноземця або документ що посвідчує особу без громадянства, з візою типу D;",
            "- переклад на українську мову паспортного документа або документа що посвідчує особу без громадянства нотаріально завірений (нотаріальний переклад входить у вартість послуги);",
            "- дійсний поліс медичного страхування (входить у вартість послуги);",
            "- документ, що підтверджує сплату адміністративного збору, або документ про звільнення від його сплати.",
        ]
    },
    {
        tag: "span",
        text: [
            "Термін виконання – 15 робочих днів.",
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/permanent_residence/permanent_residence.tsx



//@ts-ignore

//@ts-ignore


var PermanentResidence = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "permanent_residence" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, permanent_residence_constant_title)) : permanent_residence_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, permanent_residence_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/passport_and_visa_services/registration_of_residence/registration_of_residence.sass
var registration_of_residence = __webpack_require__(171);

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/registration_of_residence/constant.ts
var registration_of_residence_constant_title = "Реєстрація місця проживання";
var registration_of_residence_constant_main_text = [
    {
        tag: "p",
        text: [
            "Консалтингове агенство All Consulting надає додаткові послуги для іноземців та громадян України:",
            "",
        ]
    },
    {
        tag: "ul",
        li_tags: [
            [
                {
                    tag: "",
                    class: "bold_text cursive_text",
                    text: "- реєстрація місця проживання в м.Києві та Київській області (від 6 місяців)"
                },
                {
                    tag: "",
                    class: "",
                    text: " здійснюється через договір оренди."
                },
                {
                    tag: "",
                    class: "bold_text",
                    text: " Термін виконання 1-2 дні."
                }
            ],
            [
                {
                    tag: "",
                    class: "bold_text cursive_text",
                    text: "- відкриття рахунків в банківських установах країни (для іноземців)."
                },
                {
                    tag: "",
                    class: "",
                    text: " Перелік документів: оригінал вітчизняного паспорта та посвідки на постійне проживання."
                },
                {
                    tag: "",
                    class: "bold_text",
                    text: " Термін виконання 1 день."
                }
            ],
            [
                {
                    tag: "",
                    class: "bold_text cursive_text",
                    text: "- отримання ідентифікаційного податкового номера (для іноземців)."
                },
                {
                    tag: "",
                    class: "",
                    text: " Перелік документів: вітчизняний паспорт та засвідчений в установленому законодавством порядку його переклад українською мовою, копію такого перекладу (крім осіб, які мають посвідки на постійне проживання або посвідки на тимчасове проживання в Україні)."
                },
                {
                    tag: "",
                    class: "bold_text",
                    text: " Термін виконання від 3 до 7 робочих днів. Термін виконання 1 день."
                }
            ],
            [
                {
                    tag: "",
                    class: "bold_text cursive_text",
                    text: "- нострифікація дипломів."
                },
                {
                    tag: "",
                    class: "",
                    text: " Перелік документів:"
                },
                {
                    tag: "li",
                    class: "list_style",
                    text: [
                        "- засвідчені в установленому законодавством порядку копію та переклад українською мовою Документа (за необхідності - пред’явлення оригіналу);",
                        "- засвідчені в установленому законодавством порядку копію і переклад українською мовою додатка до Документа та/або інших документів, які містять інформацію про зміст навчальної програми (за необхідності - пред’явлення оригіналів);",
                        "- заяву;",
                        "- заяву (згоду) власника Документа на обробку його персональних даних відповідно до вимог Закону України «Про захист персональних даних»."
                    ]
                }
            ],
        ],
        text: [""]
    },
    {
        tag: "span",
        class: "margin-l",
        text: [
            "Нотаріально засвідчені копії документів включені до вартості послуги."
        ]
    },
    {
        tag: "span",
        class: "bold_text",
        text: [
            " Термін виконання від 60 до 90 робочих днів."
        ]
    },
    {
        tag: "span",
        class: "bold_text",
        text: [
            "Апостиль документів про освіту."
        ]
    },
    {
        tag: "p",
        class: "",
        text: [
            "Для проставлення апостиля необхідно подати:"
        ]
    },
    {
        tag: "ul",
        li_tags: [
            [
                {
                    tag: "",
                    class: "",
                    text: "- оригінал документа про освіту державного зразка, на якому необхідно проставити апостиль;"
                }
            ],
            [
                {
                    tag: "",
                    class: "",
                    text: "- дві якісні ксерокопії цього документа без нотаріального або будь-якого засвідчення;"
                }
            ],
            [
                {
                    tag: "",
                    class: "",
                    text: "- в разі звільнення від сплати за послуги – оригінал та копію документа, що підтверджує право на звільнення від сплати (для власників документів);"
                }
            ],
            [
                {
                    tag: "",
                    class: "bold_text cursive_text",
                    text: "- згода на обробку персональних даних"
                },
                {
                    tag: "",
                    class: "",
                    text: " (від власника та заявника) встановленого зразка;"
                }
            ],
            [
                {
                    tag: "",
                    class: "",
                    text: "- документи подаються в прозорому файлі;"
                }
            ],
            [
                {
                    tag: "",
                    class: "",
                    text: "- під час візиту заявник має пред'явити свій паспорт."
                }
            ],
        ],
        text: [""]
    },
    {
        tag: "span",
        class: "bold_text",
        text: [
            "Термін виконання від 40 робочих днів.",
        ],
    },
    {
        tag: "p",
        class: "",
        text: [
            "Наша команда гарантує Вам професійну консультацію з подальшим ефективним виконанням замовленої послуги."
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/registration_of_residence/registration_of_residence.tsx



//@ts-ignore

//@ts-ignore


var RegistrationOfResidence = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "registration_of_residence" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, registration_of_residence_constant_title)) : registration_of_residence_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, registration_of_residence_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                console.log(item.tag === "");
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: item.class }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            item.tag === "ul" ?
                                item.li_tags.map(function (tag_item_li, li_index) {
                                    return (external_React_default.a.createElement("li", { key: li_index, className: "list_style" }, tag_item_li.map(function (li, index_li) {
                                        return (li.tag === "" ?
                                            external_React_default.a.createElement("span", { key: index_li, className: li.class }, li.text)
                                            :
                                                external_React_default.a.createElement("ul", { key: index_li }, li.text.map(function (li_in_li, index) {
                                                    return (external_React_default.a.createElement("li", { key: index, className: li.class }, li.text));
                                                })));
                                    })));
                                })
                                : "");
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/passport_and_visa_services/insurance/insurance.sass
var insurance = __webpack_require__(172);

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/insurance/constant.ts
var insurance_constant_title = "Страхування на період перебування в Україні";
var insurance_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/insurance/insurance.tsx



//@ts-ignore

//@ts-ignore


var Insurance = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "insurance" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, insurance_constant_title)) : insurance_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, insurance_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/passport_and_visa_services/invitation/invitation.sass
var invitation = __webpack_require__(173);

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/invitation/constant.ts
var invitation_constant_title = "Запрошення ( робочі, комерційні )";
var invitation_constant_main_text = [
    {
        tag: "p",
        text: [
            "Пропонуємо консультаційні послуги з отримання різних видів запрошень для фізичних та юридичних осіб.",
            "Ми надаємо послуги з оформлення запрошень, консультуємо у виборі типу візи та приймаючої сторони."
        ]
    },
    {
        tag: "span",
        class: "cursive_text",
        text: [
            "Фізичним та юридичним особам заборонено законом вести",
        ]
    },
    {
        tag: "span",
        class: "cursive_text red_text bold_text",
        text: [
            " бізнес: запрошення для нерезидентів.",
        ]
    },
    {
        tag: "span",
        class: "cursive_text",
        text: [
            " Тому наша компанія не виступає в ролі сторони, що запрошує.",
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/passport_and_visa_services/invitation/invitation.tsx



//@ts-ignore

//@ts-ignore


var Invitation = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "invitation" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, invitation_constant_title)) : invitation_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, invitation_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: item.class }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/event-management/event-management.sass
var event_management = __webpack_require__(174);

// CONCATENATED MODULE: ./src/components/pages/event-management/constant.ts
var event_management_constant_title = "event-management";
var event_management_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/event-management/event-management.tsx



//@ts-ignore

//@ts-ignore


var EventManagement = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "event_management" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, event_management_constant_title)) : event_management_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, event_management_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/event-management/forums/forums.sass
var forums = __webpack_require__(175);

// CONCATENATED MODULE: ./src/components/pages/event-management/forums/constant.ts
var forums_constant_title = "Організація форумів, конференцій";
var forums_constant_main_text = [
    {
        tag: "p",
        text: [
            "Наша компанія спеціалізується на створенні креативних івентів, ми організуємо та проведемо форум, конференцію чи семінар, враховуючи всі ваші побажання, підтримуючи корпоративну культуру вашої компанії.",
            "Бізнес-заходи потребують окремого підходу, тому до їх організації залучають спеціалістів з організації та підготовки іміджевих зустрічей.",
            "Збір інформації та розробка програми з чітким розподілом часових рамок, розрахунок бюджету, підбір спікерів, робота з гостями, організація розміщення іногородніх гостей, кава-брейк, фуршет, обід, макетування та розсилка запрошень – і це ще не повний перелік послуг, які ми надаємо. Локацію заходу ми обираємо виходячи з потреб та можливостей замовника.",
            "Обираючи нас – ви обираєте якість та незабутні враження від проведеного заходу!"
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/event-management/forums/forums.tsx




//@ts-ignore

//@ts-ignore

var Forums = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "forums" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, forums_constant_title)) : forums_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, forums_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/event-management/festivals/festivals.sass
var festivals = __webpack_require__(176);

// CONCATENATED MODULE: ./src/components/pages/event-management/festivals/constant.ts
var festivals_constant_title = "Організація виставок та фестивалів";
var festivals_constant_main_text = [
    {
        tag: "p",
        text: [
            "Наша команда пропонує послуги по організації фестивалів та виставок на будь-яку тематику. У нас ви замовите креативний комплексний підхід до організації свого заходу. В наші послуги входить: вибір тематики, розробка плану, підготовка та проведення заходу, укладання договорів, створення організаційної групи та розподіл робіт, складання плану та визначення списку запрошених та учасників, підготовка інформаційних матеріалів: програм, буклетів, запрошень, анкет для відвідувачів, комплексна організація заходу, по завершенню аналіз результатів проведення.",
            "Всі Ваші побажання буде враховано при організації фестивалю або виставки. Кожне рішення буде обговорено та узгоджено."
        ]
    },
];

// CONCATENATED MODULE: ./src/components/pages/event-management/festivals/festivals.tsx



//@ts-ignore

//@ts-ignore


var Festivals = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "festivals" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, festivals_constant_title)) : festivals_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, festivals_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/event-management/tranings/tranings.sass
var tranings = __webpack_require__(177);

// CONCATENATED MODULE: ./src/components/pages/event-management/tranings/constant.ts
var tranings_constant_title = "Організація тренінгів";
var tranings_constant_main_text = [
    {
        tag: "p",
        text: [
            "Наша компанія пропонує послуги з організації семінарів, тренінгів, практикумів, конференцій, майстер-класів, коучингу. В нашій команді є фахівців з неформального навчання з багаторічним досвідом роботи. Програми навчальних заходів розробляються індивідуально під замовника та спрямовані на розвиток на мотивацію вашої команди.",
            "Корпоративні тренінги – один з важливих елементів розвитку результативності роботи компанії.",
            "Місія нашої компанії – впровадження в вашу компанію актуальні світові технології менеджменту, де світові практики адаптовані до реального бізнес-середовища.",
            "За вашим запитом, ми організуємо та проведемо захід на будь-яку тематику. Бонусом до наших проектів є послуга безкоштовного консультування по застосуванню отриманих знань на практиці."
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/event-management/tranings/tranings.tsx



//@ts-ignore

//@ts-ignore


var Tranings = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "tranings" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, tranings_constant_title)) : tranings_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, tranings_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/licensing/licensing.sass
var licensing = __webpack_require__(178);

// CONCATENATED MODULE: ./src/components/pages/licensing/constant.ts
var licensing_constant_title = "Ліцензування";
var licensing_constant_main_text = [
    {
        tag: "",
        text: [
            ""
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/licensing/licensing.tsx



//@ts-ignore

//@ts-ignore


var Licensing = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "licensing" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, licensing_constant_title)) : licensing_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, licensing_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/licensing/educational_activity/educational_activity.sass
var educational_activity = __webpack_require__(179);

// CONCATENATED MODULE: ./src/components/pages/licensing/educational_activity/constant.ts
var educational_activity_constant_title = "Ліцензування освітньої діяльності";
var educational_activity_constant_main_text = [
    {
        tag: "",
        text: [
            "Пропонуємо послуги з організації "
        ]
    },
    {
        tag: "span",
        text: [
            "ліцензування ",
        ]
    },
    {
        tag: "",
        text: [
            "освітньої діяльності у сфері:"
        ]
    },
    {
        tag: "li",
        class: "bold_text",
        text: [
            "- дошкільної освіти",
            "- повної загальної середньої освіти",
            "- вищої освіти"
        ]
    },
    {
        tag: "span",
        class: "margin-l",
        text: [
            "Також до вашої уваги пропонуємо послуги із розробки та впровадження",
        ]
    },
    {
        tag: "span",
        class: "bold_text cursive_text",
        text: [
            " бізнес плану",
        ]
    },
    {
        tag: "span",
        class: "",
        text: [
            " на",
        ]
    },
    {
        tag: "span",
        class: "",
        text: [
            " навчальний",
        ]
    },
    {
        tag: "span",
        class: "bold_text cursive_text",
        text: [
            " дошкільний",
        ]
    },
    {
        tag: "span",
        class: "bold_text cursive_text",
        text: [
            " заклад, загальноосвітній",
        ]
    },
    {
        tag: "span",
        class: "",
        text: [
            " навчальний",
        ]
    },
    {
        tag: "span",
        class: "bold_text cursive_text",
        text: [
            " заклад",
        ]
    },
    {
        tag: "span",
        class: "",
        text: [
            " або",
        ]
    },
    {
        tag: "span",
        class: "bold_text cursive_text",
        text: [
            " дитячий центр.",
        ]
    },
    {
        tag: "p",
        class: "",
        text: [
            "",
        ]
    },
    {
        tag: "span",
        class: "bold_text",
        text: [
            "Терміни виконання та вартість",
        ]
    },
    {
        tag: "span",
        class: "",
        text: [
            " залежить від ваших побажань та наявних матеріалів і обговорюються під час консультації.",
        ]
    },
];

// CONCATENATED MODULE: ./src/components/pages/licensing/educational_activity/educational_activity.tsx



//@ts-ignore

//@ts-ignore


var EducationalActivity = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "educational_activity" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, educational_activity_constant_title)) : educational_activity_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, educational_activity_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: item.class }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style " + item.class, key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/licensing/outdoor_advertising/outdoor_advertising.sass
var outdoor_advertising = __webpack_require__(180);

// CONCATENATED MODULE: ./src/components/pages/licensing/outdoor_advertising/constant.ts
var outdoor_advertising_constant_title = "Погодження і реєстрація зовнішньої реклами";
var outdoor_advertising_constant_main_text = [
    {
        tag: "span",
        class: "",
        text: [
            "Компанія ALL CONSULTING",
        ]
    },
    {
        tag: "",
        text: [
            " надає послуги із погодження на розміщення зовнішньої реклами."
        ]
    },
    {
        tag: "p",
        text: [
            "В сучасному світі важко собі уявити життя без реклами товарів та послуг. Безумовно інтернет реклама витісняє рекламу на бордах та фасадах будинків, проте вона і надалі залишається актуальною.",
            "Для розміщення зовнішньої реклами рекламодавцю необхідно мати дозвіл встановленого зразка.",
            "Наші консультанти допоможуть зібрати та підготувати необхідний пакет документів та подати їх до органу видачі дозволу.",
            "Орієнтовний перелік документів залежить від форми рекламного засобу і обговорюється під час консультації з нашим фахівцем.",
        ]
    },
    {
        tag: "span",
        class: "margin-l",
        text: [
            "Термін виконання",
        ]
    },
    {
        tag: "",
        text: [
            " - 3 - 7 робочих днів."
        ]
    },
];

// CONCATENATED MODULE: ./src/components/pages/licensing/outdoor_advertising/outdoor_advertising.tsx



//@ts-ignore

//@ts-ignore


var OutdoorAdvertising = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "outdoor_advertising" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, outdoor_advertising_constant_title)) : outdoor_advertising_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, outdoor_advertising_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text " + item.class }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// EXTERNAL MODULE: ./src/components/pages/licensing/intellectual_property/intellectual_property.sass
var intellectual_property = __webpack_require__(181);

// CONCATENATED MODULE: ./src/components/pages/licensing/intellectual_property/constant.ts
var intellectual_property_constant_title = "Набуття права інтелектуальної власності";
var intellectual_property_constant_main_text = [
    {
        tag: "",
        text: [
            "",
        ]
    }
];

// CONCATENATED MODULE: ./src/components/pages/licensing/intellectual_property/intellectual_property.tsx



//@ts-ignore

//@ts-ignore


var IntellectualProperty = function (props) {
    show();
    var search = "";
    if (typeof props.location.propsSearch !== "undefined")
        search = props.location.propsSearch;
    return (external_React_default.a.createElement("div", { className: "intellectual_property" },
        external_React_default.a.createElement("h1", { className: "common_title" }, search !== "" ? (check_title(search, intellectual_property_constant_title)) : intellectual_property_constant_title),
        external_React_default.a.createElement("div", { className: "common_text" }, intellectual_property_constant_main_text.map(function (item, index) {
            return (Object.values(item.text).map(function (tag_item, tag_index) {
                return (item.tag === "span" ? external_React_default.a.createElement("span", { key: tag_index, className: "bold_text" }, tag_item) :
                    item.tag === "" ? external_React_default.a.createElement("span", { key: tag_index }, tag_item) :
                        item.tag === "p" ? external_React_default.a.createElement("p", { key: tag_index }, tag_item) :
                            external_React_default.a.createElement("li", { className: "list_style", key: tag_index }, tag_item));
            }));
        }))));
};

// CONCATENATED MODULE: ./src/GetSwitch.tsx


//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

var GetSwitch = function () {
    return (external_React_default.a.createElement(react_router_Switch, null,
        external_React_default.a.createElement(react_router_Route, { exact: true, path: '/', component: MainPage }),
        external_React_default.a.createElement(react_router_Route, { exact: true, path: '/accounting_events', component: AccountingEvents }),
        external_React_default.a.createElement(react_router_Route, { path: '/accounting_events/tax_consulting', component: TaxConsulting }),
        external_React_default.a.createElement(react_router_Route, { path: '/accounting_events/personnel_accounting', component: PersonnelAccounting }),
        external_React_default.a.createElement(react_router_Route, { path: '/accounting_events/accounting_support', component: AccountingSupport }),
        external_React_default.a.createElement(react_router_Route, { path: '/accounting_events/accounting', component: Accounting }),
        external_React_default.a.createElement(react_router_Route, { exact: true, path: '/legal_services', component: LegalServices }),
        external_React_default.a.createElement(react_router_Route, { path: '/legal_services/registration_of_a_legal_entity', component: RegistrationOfALegalEntity }),
        external_React_default.a.createElement(react_router_Route, { path: '/legal_services/liquidation_of_a_legal_entity', component: LiquidationOfALegalEntity }),
        external_React_default.a.createElement(react_router_Route, { path: '/legal_services/development_of_contracts', component: DevelopmentOfContracts }),
        external_React_default.a.createElement(react_router_Route, { path: '/legal_services/job_descriptions', component: JobDescriptions }),
        external_React_default.a.createElement(react_router_Route, { exact: true, path: '/passport_and_visa_services', component: PassportAndVisaServices }),
        external_React_default.a.createElement(react_router_Route, { path: '/passport_and_visa_services/temporary_residence', component: TemporaryResidence }),
        external_React_default.a.createElement(react_router_Route, { path: '/passport_and_visa_services/permanent_residence', component: PermanentResidence }),
        external_React_default.a.createElement(react_router_Route, { path: '/passport_and_visa_services/registration_of_residence', component: RegistrationOfResidence }),
        external_React_default.a.createElement(react_router_Route, { path: '/passport_and_visa_services/insurance', component: Insurance }),
        external_React_default.a.createElement(react_router_Route, { path: '/passport_and_visa_services/invitation', component: Invitation }),
        external_React_default.a.createElement(react_router_Route, { exact: true, path: '/event-management', component: EventManagement }),
        external_React_default.a.createElement(react_router_Route, { path: '/event-management/forums', component: Forums }),
        external_React_default.a.createElement(react_router_Route, { path: '/event-management/festivals', component: Festivals }),
        external_React_default.a.createElement(react_router_Route, { path: '/event-management/tranings', component: Tranings }),
        external_React_default.a.createElement(react_router_Route, { exact: true, path: '/licensing', component: Licensing }),
        external_React_default.a.createElement(react_router_Route, { path: '/licensing/educational_activity', component: EducationalActivity }),
        external_React_default.a.createElement(react_router_Route, { path: '/licensing/outdoor_advertising', component: OutdoorAdvertising }),
        external_React_default.a.createElement(react_router_Route, { path: '/licensing/intellectual_property', component: IntellectualProperty })));
};

// CONCATENATED MODULE: ./src/actionTypes/index.tsx
var CHANGE_SELECTOR = "CHANGE_SELECTOR";
var CHANGE_PAGE = "CHANGE_PAGE";

// CONCATENATED MODULE: ./src/reducers/selector.tsx
//@ts-ignore

var initialSelectorState = {
    cs: 0
};
var changeSelector = function (state, action) {
    if (state === void 0) { state = initialSelectorState; }
    if (action.type === CHANGE_SELECTOR) {
        return { cs: action.cs };
    }
    return state;
};

// CONCATENATED MODULE: ./src/reducers/page.tsx
//@ts-ignore

var initialPageState = {
    page: -1
};
var changePage = function (state, action) {
    if (state === void 0) { state = initialPageState; }
    if (action.type === CHANGE_PAGE) {
        return { page: action.page };
    }
    return state;
};

// CONCATENATED MODULE: ./src/reducers/index.tsx

//@ts-ignore

//@ts-ignore

/* harmony default export */ var reducers = (combineReducers({
    changeSelector: changeSelector,
    changePage: changePage,
}));

// CONCATENATED MODULE: ./src/store.tsx

//@ts-ignore

var store_store = createStore(reducers);
/* harmony default export */ var src_store = (store_store);

// CONCATENATED MODULE: ./src/index.tsx



//@ts-ignore



//@ts-ignore

//@ts-ignore

external_ReactDOM_default.a.render(external_React_default.a.createElement(components_Provider, { store: src_store },
    external_React_default.a.createElement(external_React_default.a.StrictMode, null,
        external_React_default.a.createElement(react_router_dom_HashRouter, null,
            external_React_default.a.createElement(App_App, null,
                external_React_default.a.createElement(GetSwitch, null))))), document.getElementById('root'));


/***/ })
/******/ ]);