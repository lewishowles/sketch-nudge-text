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

/***/ "./node_modules/@lewishowles/helpers/dist/array.js":
/*!*********************************************************!*\
  !*** ./node_modules/@lewishowles/helpers/dist/array.js ***!
  \*********************************************************/
/*! exports provided: arrayLength, firstDefined, getNextIndex, head, isNonEmptyArray, lastDefined, pluck, tail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLength", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstDefined", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextIndex", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastDefined", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return b; });
/* harmony import */ var _is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-non-empty-object-C6mupIXN.js */ "./node_modules/@lewishowles/helpers/dist/is-non-empty-object-C6mupIXN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return _is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/@lewishowles/helpers/dist/number.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string.js */ "./node_modules/@lewishowles/helpers/dist/string.js");



function g(n) {
  return Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(n) ? n.length : 0;
}
function h(n) {
  if (Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(n)) {
    for (let t = 0; t < n.length; t++)
      if (n[t] !== void 0)
        return n[t];
  }
}
function d(n, t, { reverse: f = !1, wrap: u = !1 } = {}) {
  if (!Object(_number_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(n) || !Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(t))
    return 0;
  const i = t.length;
  if (n < 0 || n >= i)
    return 0;
  if (f ? n-- : n++, u) {
    if (n < 0)
      return i - 1;
    if (n >= i)
      return 0;
  } else {
    if (n < 0)
      return 0;
    if (n >= i)
      return i - 1;
  }
  return n;
}
function p(n) {
  if (Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(n))
    return n[0];
}
function N(n) {
  if (Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(n)) {
    for (let t = n.length - 1; t >= 0; t--)
      if (n[t] !== void 0)
        return n[t];
  }
}
function E(n, t) {
  return !Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(n) || !Object(_string_js__WEBPACK_IMPORTED_MODULE_2__["isNonEmptyString"])(t) ? [] : n.reduce((f, u) => (Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["b"])(u) && f.push(u[t]), f), []);
}
function b(n) {
  if (Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(n))
    return n[n.length - 1];
}



/***/ }),

/***/ "./node_modules/@lewishowles/helpers/dist/general.js":
/*!***********************************************************!*\
  !*** ./node_modules/@lewishowles/helpers/dist/general.js ***!
  \***********************************************************/
/*! exports provided: getFriendlyDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyDisplay", function() { return f; });
function f(n) {
  if (n === null)
    return "<null>";
  if (n === void 0)
    return "<undefined>";
  if (typeof n == "string")
    return [n, `<string[${n.length}]>`].filter((t) => t).join(" ");
  if (Array.isArray(n))
    return `<array[${n.length}]>`;
  if (typeof n == "object")
    return `<object[${Object.keys(n).length}]>`;
  if (isNaN(n))
    return "<NaN>";
  if (n === 1 / 0 || n === -1 / 0)
    return "<infinity>";
  if (typeof n == "number" && Number.isFinite(n))
    return "<number>";
}



/***/ }),

/***/ "./node_modules/@lewishowles/helpers/dist/is-non-empty-object-C6mupIXN.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lewishowles/helpers/dist/is-non-empty-object-C6mupIXN.js ***!
  \********************************************************************************/
/*! exports provided: a, b, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return r; });
function r(t) {
  return Array.isArray(t) && t.length > 0;
}
function n(t) {
  return typeof t == "object" && !Array.isArray(t) && t !== null;
}
function s(t) {
  return n(t) && Object.keys(t).length > 0;
}



/***/ }),

/***/ "./node_modules/@lewishowles/helpers/dist/number.js":
/*!**********************************************************!*\
  !*** ./node_modules/@lewishowles/helpers/dist/number.js ***!
  \**********************************************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return n; });
function n(e) {
  return typeof e == "number" && !isNaN(e);
}



/***/ }),

/***/ "./node_modules/@lewishowles/helpers/dist/object.js":
/*!**********************************************************!*\
  !*** ./node_modules/@lewishowles/helpers/dist/object.js ***!
  \**********************************************************/
/*! exports provided: deepCopy, deepMerge, get, isNonEmptyObject, isObject, pick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return d; });
/* harmony import */ var _is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-non-empty-object-C6mupIXN.js */ "./node_modules/@lewishowles/helpers/dist/is-non-empty-object-C6mupIXN.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyObject", function() { return _is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string.js */ "./node_modules/@lewishowles/helpers/dist/string.js");


function l(n) {
  if (!n || typeof n != "object")
    return n;
  const i = Array.isArray(n) ? [] : {};
  for (const r in n)
    Object.hasOwn(n, r) && (i[r] = l(n[r]));
  return i;
}
function s(n, ...i) {
  if (!Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(i))
    return n;
  const r = i.shift();
  if (!Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["a"])(n) || !Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r))
    return s(n, ...i);
  const f = { ...n };
  for (const u in r)
    Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["a"])(r[u]) ? (f[u] || (f[u] = {}), f[u] = s(f[u], r[u])) : f[u] = r[u];
  return s(f, ...i);
}
function p(n, i) {
  return !Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["b"])(n) || !Object(_string_js__WEBPACK_IMPORTED_MODULE_1__["isNonEmptyString"])(i) ? null : i.split(".").reduce((r, f) => Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["b"])(r) && Object.hasOwn(r, f) ? r[f] : null, n);
}
function d(n, i) {
  return !Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["b"])(n) || !Object(_is_non_empty_object_C6mupIXN_js__WEBPACK_IMPORTED_MODULE_0__["i"])(i) ? {} : i.reduce((r, f) => (Object.hasOwn(n, f) && (r[f] = n[f]), r), {});
}



/***/ }),

/***/ "./node_modules/@lewishowles/helpers/dist/string.js":
/*!**********************************************************!*\
  !*** ./node_modules/@lewishowles/helpers/dist/string.js ***!
  \**********************************************************/
/*! exports provided: isNonEmptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyString", function() { return n; });
function n(t) {
  return typeof t == "string" && t.length > 0;
}



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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lewishowles/helpers/dist/general.js */ "./node_modules/@lewishowles/helpers/dist/general.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/shared.js");
/* harmony import */ var _lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lewishowles/helpers/dist/array.js */ "./node_modules/@lewishowles/helpers/dist/array.js");
/* harmony import */ var _lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lewishowles/helpers/dist/object.js */ "./node_modules/@lewishowles/helpers/dist/object.js");
/* harmony import */ var _lewishowles_helpers_dist_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lewishowles/helpers/dist/string.js */ "./node_modules/@lewishowles/helpers/dist/string.js");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_8__);









var document = sketch_dom__WEBPACK_IMPORTED_MODULE_7___default.a.getSelectedDocument();

// The name of the colour to apply if no colour swatch is present on a text
// layer.
var defaultColourName = "grey/600";
// The Settings key for the current shade variable.
var CURRENT_SHADE_STORAGE_KEY = "howles:sketch-nudge-text:current-shade";

/**
 * Apply the next text colour, depending on the choice of direction. If we reach
 * the end of the list, wrap back to the start.
 *
 * @param  {boolean}  reverse
 *     Whether to reverse the direction, decreasing font order of colours.
 */
function applyNextColour() {
  var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var textLayers = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getSelectedTextLayers"])();
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(textLayers)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Please select a layer");
  }
  var referenceOrder = initialiseAvailableColours();
  textLayers.forEach(function (layer) {
    var currentColour = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getTextColourSwatchForLayer"])(layer);
    var nextColour = getNextColour(currentColour, referenceOrder, reverse);
    if (!Object(_lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__["isNonEmptyObject"])(nextColour)) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Couldn't determine the appropriate next colour");
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
  var colourLibrary = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getLibraryByName"])("Colours");

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
  if (!Object(_lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__["isNonEmptyObject"])(library)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Expected non-empty object <library>, received ".concat(Object(_lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyDisplay"])(library), "."));
  }
  var importableColours = library.getImportableSwatchReferencesForDocument(document);
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(importableColours)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("No importable text styles could be found in the library \"".concat(libraryName, "\"."));
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
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(referenceOrder)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Couldn't find the list of available colours to reference");
  }
  var currentColour = referenceOrder.find(function (reference) {
    return reference.name === currentSwatch.name;
  });

  // If we can't find a current colour, revert to a default.
  if (!Object(_lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__["isNonEmptyObject"])(currentColour)) {
    return referenceOrder.find(function (reference) {
      return reference.name === defaultColourName;
    });
  }
  var uniqueColours = getUniqueColoursWithShade(referenceOrder, currentColour.name);
  var currentIndex = uniqueColours.findIndex(function (swatch) {
    return swatch.name === currentColour.name;
  });
  var nextIndex = Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["getNextIndex"])(currentIndex, uniqueColours, {
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
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(referenceOrder)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Couldn't find the list of available colours to reference");
  }
  if (!Object(_lewishowles_helpers_dist_string_js__WEBPACK_IMPORTED_MODULE_6__["isNonEmptyString"])(colourName)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Expected non-empty string <colourName>, received ".concat(Object(_lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyDisplay"])(colourName)));
  }
  var previousShade = sketch_settings__WEBPACK_IMPORTED_MODULE_8___default.a.settingForKey(CURRENT_SHADE_STORAGE_KEY) || "600";
  var _colourName$split = colourName.split('/'),
    _colourName$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_colourName$split, 2),
    _colourName$split2$ = _colourName$split2[1],
    desiredShade = _colourName$split2$ === void 0 ? previousShade : _colourName$split2$;

  // Update the current shade to match that of the current colour. We do this
  // on each move for simplicity, but also for completeness, as the shade may
  // change between colour jumps.
  sketch_settings__WEBPACK_IMPORTED_MODULE_8___default.a.setSettingForKey(CURRENT_SHADE_STORAGE_KEY, desiredShade);
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
/* harmony import */ var _colour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colour */ "./src/colour.js");
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


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_colour__WEBPACK_IMPORTED_MODULE_0__["applyNextColour"])(true);
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
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lewishowles/helpers/dist/general.js */ "./node_modules/@lewishowles/helpers/dist/general.js");
/* harmony import */ var _lewishowles_helpers_dist_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lewishowles/helpers/dist/string.js */ "./node_modules/@lewishowles/helpers/dist/string.js");




var libraries = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.getLibraries();
var document = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
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
  if (!Object(_lewishowles_helpers_dist_string_js__WEBPACK_IMPORTED_MODULE_3__["isNonEmptyString"])(libraryName)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Expected non-empty string <libraryName>, received ".concat(Object(_lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyDisplay"])(libraryName), "."));
  }
  var libraries = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.Library.getLibraries();
  var library = libraries.find(function (library) {
    return library.name === libraryName;
  });
  if (!library) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("The library \"".concat(libraryName, "\" couldn't be found."));
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
/*! exports provided: dd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dd", function() { return dd; });
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_0__);


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
  sketch_ui__WEBPACK_IMPORTED_MODULE_0___default.a.message(message);
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

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

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