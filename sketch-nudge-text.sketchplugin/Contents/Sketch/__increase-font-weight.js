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

/***/ "./src/increase-font-weight.js":
/*!*************************************!*\
  !*** ./src/increase-font-weight.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weight */ "./src/weight.js");
/**
 * Apply the next font weight from the defined series of preferred weights.
 * If the current weight isn't in the series, the default "regular" weight is
 * chosen instead.
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_weight__WEBPACK_IMPORTED_MODULE_0__["applyNextFontWeight"])();
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
/* harmony import */ var _lewishowles_helpers_dist_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lewishowles/helpers/dist/string.js */ "./node_modules/@lewishowles/helpers/dist/string.js");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sketch/ui */ "sketch/ui");
/* harmony import */ var sketch_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sketch_ui__WEBPACK_IMPORTED_MODULE_1__);



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
  if (!Object(_lewishowles_helpers_dist_string_js__WEBPACK_IMPORTED_MODULE_0__["isNonEmptyString"])(message)) {
    dd("Expected non-empty string <message>, received ".concat(getFriendlyDisplay(message), "."));
  }
  sketch_ui__WEBPACK_IMPORTED_MODULE_1___default.a.message(message);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lewishowles/helpers/dist/array.js */ "./node_modules/@lewishowles/helpers/dist/array.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/shared.js");



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
  var textLayers = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["getSelectedTextLayers"])();
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_1__["isNonEmptyArray"])(textLayers)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["dd"])("Please select a layer");
  }
  textLayers.forEach(function (layer) {
    var currentIndex = referenceWeights.findIndex(function (weight) {
      return weight === layer.style.fontWeight;
    });
    var nextIndex = Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_1__["getNextIndex"])(currentIndex, referenceWeights, {
      reverse: reverse
    });
    if (nextIndex < 0) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["dd"])("Couldn't determine the appropriate next weight");
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