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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/previous-colour.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/colour.js":
/*!***********************!*\
  !*** ./src/colour.js ***!
  \***********************/
/*! exports provided: applyNextColour, initialiseAvailableColours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNextColour", function() { return applyNextColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialiseAvailableColours", function() { return initialiseAvailableColours; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

var _require = __webpack_require__(/*! ./utils */ "./src/utils.js"),
  dd = _require.dd,
  getFriendlyDisplay = _require.getFriendlyDisplay,
  getNextIndex = _require.getNextIndex,
  isNonEmptyArray = _require.isNonEmptyArray,
  isNonEmptyObject = _require.isNonEmptyObject,
  isNonEmptyString = _require.isNonEmptyString;
var _require2 = __webpack_require__(/*! ./shared */ "./src/shared.js"),
  getLibraryByName = _require2.getLibraryByName,
  getSelectedTextLayers = _require2.getSelectedTextLayers,
  getTextColourSwatchForLayer = _require2.getTextColourSwatchForLayer;
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
var document = sketch.getSelectedDocument();
var defaultColourName = "grey/600";

/**
 * Apply the next text colour, depending on the choice of direction. If we reach
 * the end of the list, wrap back to the start.
 *
 * @param  {boolean}  reverse
 *     Whether to reverse the direction, decreasing font order of colours.
 */
function applyNextColour() {
  var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var textLayers = getSelectedTextLayers();
  if (!isNonEmptyArray(textLayers)) {
    dd("Please select a layer");
  }
  var referenceOrder = initialiseAvailableColours();
  textLayers.forEach(function (layer) {
    var currentColour = getTextColourSwatchForLayer(layer);
    var nextColour = getNextColour(currentColour, referenceOrder, reverse);
    if (!isNonEmptyObject(nextColour)) {
      dd("Couldn't determine the appropriate next colour");
    }
    if (nextColour.referencingColor) {
      layer.style.textColor = nextColour.referencingColor;
    }
  });
}

/**
 * Perform the necessary actions to retrieve the list of available colours from
 * the given library.
 */
function initialiseAvailableColours() {
  // Get the desired colour library by name.
  var colourLibrary = getLibraryByName("Colours");

  // Import any found colours into the current document.
  return importColoursFromLibrary(colourLibrary);
}

/**
 * Given a library reference, import all text styles into the current document
 * for access by the script.
 *
 * @param  {object}  library
 *     The library from which to import text styles.
 */
function importColoursFromLibrary(library) {
  if (!isNonEmptyObject(library)) {
    dd("Expected non-empty object <library>, received ".concat(getFriendlyDisplay(library), "."));
  }
  var importableColours = library.getImportableSwatchReferencesForDocument(document);
  if (!isNonEmptyArray(importableColours)) {
    dd("No importable text styles could be found in the library \"".concat(libraryName, "\"."));
  }

  // Import all shared text styles into the document, just in case.
  var styles = [];
  importableColours.forEach(function (style) {
    return styles.push(style.import());
  });
  return styles;
}

/**
 * Get the next appropriate colour from the provided reference. For colours
 * labelled "colour/shade", we ignore shades and look for the next primary
 * colour.
 *
 * If we're at the end of the reference array, we wrap to the other end.
 *
 * @param  {object}  currentSwatch
 *     The current colour swatch applied to the layer.
 * @param  {array}  referenceOrder
 *     The list of colours to use as a reference.
 * @param  {boolean}  reverse
 *     Whether to reverse direction, moving backwards.
 */
function getNextColour(currentSwatch, referenceOrder) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // If we don't have valid reference, we can't continue, as we can't pick a
  // style from nothing.
  if (!isNonEmptyArray(referenceOrder)) {
    dd("Couldn't find the list of available colours to reference");
  }
  var currentColour = referenceOrder.find(function (reference) {
    return reference.name === currentSwatch.name;
  });

  // If we can't find a current colour, revert to a default.
  if (!isNonEmptyObject(currentColour)) {
    return referenceOrder.find(function (reference) {
      return reference.name === defaultColourName;
    });
  }
  var uniqueColours = getUniqueColoursWithShade(referenceOrder, currentColour.name);
  var currentIndex = uniqueColours.findIndex(function (swatch) {
    return swatch.name === currentColour.name;
  });
  var nextIndex = getNextIndex(currentIndex, uniqueColours, {
    reverse: reverse,
    wrap: true
  });
  return uniqueColours[nextIndex];
}

/**
 * Given all colours as a reference, reduce the list to a unique set of colours
 * matching the same shade. For example, "red/600" would product "red/600",
 * "blue/600", "purple/600", etc.
 */
function getUniqueColoursWithShade(referenceOrder, colourName) {
  // If we don't have valid reference, we can't continue, as we can't pick a
  // style from nothing.
  if (!isNonEmptyArray(referenceOrder)) {
    dd("Couldn't find the list of available colours to reference");
  }
  if (!isNonEmptyString(colourName)) {
    dd("Expected non-empty string <colourName>, received ".concat(getFriendlyDisplay(colourName)));
  }
  var _colourName$split = colourName.split('/'),
    _colourName$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_colourName$split, 2),
    _colourName$split2$ = _colourName$split2[1],
    desiredShade = _colourName$split2$ === void 0 ? "600" : _colourName$split2$;
  return referenceOrder.filter(function (swatch) {
    return swatch.name.includes("/".concat(desiredShade)) || swatch.name === "white";
  });
}

/***/ }),

/***/ "./src/previous-colour.js":
/*!********************************!*\
  !*** ./src/previous-colour.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Apply the previous colour to the text.
 *
 * Font colours are imported based on a given library name. This is required so
 * that all colours can be referenced from any document, even if that document
 * doesn't yet use any of the colours from the library.
 *
 * The sequence of colours is determined by the arrangement of colours in the
 * library - which is usually alphabetical.
 *
 * If no text colour can be found, the colours wrap back to the start of the
 * list.
 *
 * If no colour can be found, a default grey 600 is applied.
 */

var _require = __webpack_require__(/*! ./colour */ "./src/colour.js"),
  applyNextColour = _require.applyNextColour;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  applyNextColour(true);
});

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! exports provided: getSelectedTextLayers, getLibraryByName, getTextColourSwatchForLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextLayers", function() { return getSelectedTextLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLibraryByName", function() { return getLibraryByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextColourSwatchForLayer", function() { return getTextColourSwatchForLayer; });
var _require = __webpack_require__(/*! ./utils */ "./src/utils.js"),
  dd = _require.dd,
  getFriendlyDisplay = _require.getFriendlyDisplay,
  isNonEmptyString = _require.isNonEmptyString;
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
var libraries = sketch.getLibraries();
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

/**
 * Given a library name, retrieve a reference to that library. If the library
 * cannot be found, halt execution and display a message to the user.
 *
 * @param  {string}  libraryName
 *     The name of the library to retrieve.
 */
function getLibraryByName(libraryName) {
  if (!isNonEmptyString(libraryName)) {
    dd("Expected non-empty string <libraryName>, received ".concat(getFriendlyDisplay(libraryName), "."));
  }
  var libraries = sketch.Library.getLibraries();
  var library = libraries.find(function (library) {
    return library.name === libraryName;
  });
  if (!library) {
    dd("The library \"".concat(libraryName, "\" couldn't be found."));
  }
  return library;
}

/**
 * For the given layer, retrieve a reference to the matching colour swatch,
 * based on the "textColour" of the given layer.
 *
 * If no swatch is found, returns undefined;
 *
 * @param  {object}  layer
 *     The layer from which to retrieve a matching swatch.
 */
function getTextColourSwatchForLayer(layer) {
  var originalColour = layer.style.textColor;
  var matchingSwatch;
  libraries.forEach(function (library) {
    // TODO: Only perform these imports once per script run
    var importableSwatches = library.getImportableSwatchReferencesForDocument(document);
    importableSwatches.forEach(function (swatch) {
      var importedSwatch = swatch.import();
      if (importedSwatch.color === originalColour) {
        matchingSwatch = importedSwatch;
      }
    });
  });
  return matchingSwatch;
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

//# sourceMappingURL=__previous-colour.js.map