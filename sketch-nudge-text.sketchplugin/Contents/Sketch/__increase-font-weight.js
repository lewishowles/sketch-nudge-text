var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/increase-font-weight.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/increase-font-weight.js":
/*!*************************************!*\
  !*** ./src/increase-font-weight.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Apply the next font weight from the defined series of preferred weights.
 * If the current weight isn't in the series, the default "regular" weight is
 * chosen instead.
 */

var _require = __webpack_require__(/*! ./weight */ "./src/weight.js"),
  applyNextFontWeight = _require.applyNextFontWeight;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  applyNextFontWeight();
});

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! exports provided: getSelectedTextLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextLayers", function() { return getSelectedTextLayers; });
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
var document = sketch.getSelectedDocument();
var selectedLayers = document.selectedLayers.layers;

/**
 * Retrieve the currently selected layers, filtering out anything but a text
 * layer
 */
function getSelectedTextLayers() {
  return selectedLayers.filter(function (layer) {
    return layer.type === "Text";
  });
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: isNonEmptyString, isNonEmptyObject, isNonEmptyArray, isNumber, getNextIndex, getFriendlyDisplay, dd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyString", function() { return isNonEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyObject", function() { return isNonEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextIndex", function() { return getNextIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyDisplay", function() { return getFriendlyDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dd", function() { return dd; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

/**
 * Determine whether the given variable is a string and has a non-zero length.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
function isNonEmptyString(variable) {
  return typeof variable === "string" && variable.length > 0;
}

/**
 * Determine whether the given variable is an object and has at least one
 * property.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
function isNonEmptyObject(variable) {
  return !Array.isArray(variable) && variable !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(variable) === "object" && Object.keys(variable).length > 0;
}

/**
 * Determine whether the given variable is an array and has at least one entry.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
function isNonEmptyArray(variable) {
  return Array.isArray(variable) && variable.length > 0;
}

/**
 * Determine whether the given variable is a number, and not NaN.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
function isNumber(variable) {
  return typeof variable === "number" && !isNaN(variable);
}

/**
 * Get the next index, given the current index and the reference list.
 *
 * @param  {number}  index
 *     The current index.
 * @param  {array}  reference
 *     The reference list.
 * @param  {boolean}  options.reverse
 *     Whether to reverse direction, decreasing the index.
 * @param  {boolean}  options.wrap
 *     Whether to wrap to the other end of the list if at the end.
 */
function getNextIndex(index, reference) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse,
    _ref$wrap = _ref.wrap,
    wrap = _ref$wrap === void 0 ? false : _ref$wrap;
  if (!isNumber(index) || !isNonEmptyArray(reference)) {
    return 0;
  }
  var length = reference.length;
  if (reverse) {
    index--;
  } else {
    index++;
  }
  if (wrap) {
    if (index < 0) {
      return length - 1;
    }
    if (index >= length) {
      return 0;
    }
  } else {
    if (index < 0) {
      return 0;
    }
    if (index >= length) {
      return length - 1;
    }
  }
  return index;
}

/**
 * Display the type of the given variable in a human-friendly way.
 *
 * @param  {mixed}  variable
 *     The variable to display.
 */
function getFriendlyDisplay(variable) {
  if (variable === null) {
    return "<null>";
  }
  if (variable === undefined) {
    return "<undefined>";
  }
  if (typeof variable === "string") {
    return "".concat(variable, " <string>");
  }
  if (Array.isArray(variable)) {
    return "".concat(variable.map(getFriendlyDisplay).join(", "), " <array[").concat(variable.length, "]>");
  }
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(variable) === "object") {
    return "<object[".concat(Object.keys(variable).length, "]>");
  }
  if (variable === NaN) {
    return "<NaN>";
  }
  if (typeof variable === 'number' && Number.isFinite(variable)) {
    return "<number>";
  }
}

/**
 * dd (Die and Display)
 *
 * Display the given message to the user, and throw an error containing that
 * message to halt execution.
 *
 * @param  {string}  message
 *     The message to display to the user.
 */
function dd(message) {
  if (!isNonEmptyString(message)) {
    dd("Expected non-empty string <message>, received ".concat(getFriendlyDisplay(message), "."));
  }
  UI.message(message);
  throw new Error(message);
}

/***/ }),

/***/ "./src/weight.js":
/*!***********************!*\
  !*** ./src/weight.js ***!
  \***********************/
/*! exports provided: applyNextFontWeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNextFontWeight", function() { return applyNextFontWeight; });
var _require = __webpack_require__(/*! ./utils */ "./src/utils.js"),
  dd = _require.dd,
  getNextIndex = _require.getNextIndex,
  isNonEmptyArray = _require.isNonEmptyArray;
var _require2 = __webpack_require__(/*! ./shared */ "./src/shared.js"),
  getSelectedTextLayers = _require2.getSelectedTextLayers;
var referenceWeights = [5,
// Regular
6,
// Medium
8,
// Semibold
9 // Bold
];

/**
 * Apply the next font weight in the set of defined options.
 *
 * @param  {boolean}  reverse
 *     Whether to reverse the direction, decreasing font weight.
 */
function applyNextFontWeight() {
  var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var textLayers = getSelectedTextLayers();
  if (!isNonEmptyArray(textLayers)) {
    dd("Please select a layer");
  }
  textLayers.forEach(function (layer) {
    var currentIndex = referenceWeights.findIndex(function (weight) {
      return weight === layer.style.fontWeight;
    });
    var nextIndex = getNextIndex(currentIndex, referenceWeights, {
      reverse: reverse
    });
    if (nextIndex < 0) {
      dd("Couldn't determine the appropriate next weight");
    }
    layer.style.fontWeight = referenceWeights[nextIndex];
  });
}

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__increase-font-weight.js.map