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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/decrease-font-size.js");
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

/***/ "./src/decrease-font-size.js":
/*!***********************************!*\
  !*** ./src/decrease-font-size.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size */ "./src/size.js");
/**
 * Apply the next smaller text style to the selected layer(s).
 *
 * Font styles are imported based on a given library name. This is required so
 * that all styles can be referenced from any document, even if that document
 * doesn't yet use any of the text styles from the library.
 *
 * The correct sequence of fonts is determined by the font size, regardless of
 * what the styles are named, or what order they appear.
 *
 * If no smaller style can be found, no change is made.
 *
 * If no current style is applied, the default, base style is applied.
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_size__WEBPACK_IMPORTED_MODULE_0__["applyNextFontSize"])(true);
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

/***/ "./src/size.js":
/*!*********************!*\
  !*** ./src/size.js ***!
  \*********************/
/*! exports provided: applyNextFontSize, initialiseAvailableFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNextFontSize", function() { return applyNextFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialiseAvailableFontStyles", function() { return initialiseAvailableFontStyles; });
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lewishowles/helpers/dist/general.js */ "./node_modules/@lewishowles/helpers/dist/general.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/shared.js");
/* harmony import */ var _lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lewishowles/helpers/dist/array.js */ "./node_modules/@lewishowles/helpers/dist/array.js");
/* harmony import */ var _lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lewishowles/helpers/dist/object.js */ "./node_modules/@lewishowles/helpers/dist/object.js");
/* harmony import */ var _lewishowles_helpers_dist_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lewishowles/helpers/dist/number.js */ "./node_modules/@lewishowles/helpers/dist/number.js");







var document = sketch_dom__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();

/**
 * Apply the next font size, either larger or smaller depending on the choice
 * to increase or decrease.
 *
 * This also attempts to apply the existing colour variable and font weight to
 * the new text style, meaning they don't have to be re-set.
 *
 * @param  {boolean}  reverse
 *     Whether to reverse the direction, decreasing font size.
 */
function applyNextFontSize() {
  var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var textLayers = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getSelectedTextLayers"])();
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(textLayers)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Please select a layer");
  }
  var referenceOrder = initialiseAvailableFontStyles();
  textLayers.forEach(function (layer) {
    var nextStyle = getNextStyle(layer.sharedStyleId, referenceOrder, reverse);
    if (!Object(_lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__["isNonEmptyObject"])(nextStyle)) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Couldn't determine the appropriate next style");
    }

    // Retrieve the current colour swatch applied to the layer before
    // updating it.
    var swatch = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getTextColourSwatchForLayer"])(layer);
    // Retrieve the current font weight.
    var originalFontWeight = layer.style.fontWeight;
    layer.sharedStyleId = nextStyle.id;
    layer.style = nextStyle.style;

    // Reinstate the original colour.
    if (swatch && swatch.referencingColor) {
      layer.style.textColor = swatch.referencingColor;
    }

    // Reinstate the original font weight.
    layer.style.fontWeight = originalFontWeight;
  });
}

/**
 * Perform the necessary actions to retrieve the list of available font styles
 * from the given library.
 */
function initialiseAvailableFontStyles() {
  // Get the desired font library by name.
  // TODO: Make this user input that is stored for next time.
  // TODO: When the input is stored, allow it to be changed.
  var fontLibrary = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["getLibraryByName"])("Fonts");

  // Import any found styles into the current document.
  var importedTextStyles = importSharedTextStylesFromLibrary(fontLibrary);

  // Retrieve our reference order for the document's shared text styles, based
  // on increasing font size.
  return sortTextStylesByFontSize(importedTextStyles);
}

/**
 * Given a library reference, import all text styles into the current document
 * for access by the script.
 *
 * @param  {object}  library
 *     The library from which to import text styles.
 */
function importSharedTextStylesFromLibrary(library) {
  if (!Object(_lewishowles_helpers_dist_object_js__WEBPACK_IMPORTED_MODULE_5__["isNonEmptyObject"])(library)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Expected non-empty object <library>, received ".concat(Object(_lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyDisplay"])(library), "."));
  }
  var importableTextStyles = library.getImportableTextStyleReferencesForDocument(document);
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(importableTextStyles)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("No importable text styles could be found in the library \"".concat(libraryName, "\"."));
  }

  // Import all shared text styles into the document, just in case.
  importableTextStyles.forEach(function (style) {
    return style.import();
  });
  return importableTextStyles;
}

/**
 * Sort the given text styles by the font size property, giving us a base list
 * from which to perform a comparison.
 *
 * Only text styles with names matching those imported are considered.
 * Unfortunately we have to use names as the IDs of "importable" text styles
 * from the library change once they are imported.
 *
 * @param  {array}  importedTextStyles
 *     The list of text styles that were imported, allowing us to exclude any
 *     other found text styles.
 */
function sortTextStylesByFontSize(importedTextStyles) {
  if (!document.sharedTextStyles) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Text styles were imported from the library, but could not be found in the document. Something unexpected may have gone wrong.");
  }
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(importedTextStyles)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Expected non-empty array <importedTextStyles>, received ".concat(Object(_lewishowles_helpers_dist_general_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyDisplay"])(importedTextStyles)));
  }
  var importedStyleNames = importedTextStyles.map(function (style) {
    return style.name;
  });
  var textStyles = document.sharedTextStyles.filter(function (style) {
    return importedStyleNames.includes(style.name);
  });
  textStyles.sort(function (a, b) {
    return a.style.fontSize - b.style.fontSize;
  });
  return textStyles;
}

/**
 * Get the next appropriate style from the provided reference.
 *
 * If we're at the end of the reference array, the same style will be returned.
 *
 * @param  {string}  currentSharedStyleId
 *     The ID of the current style.
 * @param  {array}  referenceOrder
 *     The list of styles to use as a reference.
 * @param  {boolean}  reverse
 *     Whether to reverse direction, moving backwards.
 */
function getNextStyle(currentSharedStyleId, referenceOrder) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // If we don't have valid reference, we can't continue, as we can't pick a
  // style from nothing.
  if (!Object(_lewishowles_helpers_dist_array_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(referenceOrder)) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["dd"])("Couldn't find the list of available styles to reference");
  }
  var currentStyleIndex = referenceOrder.findIndex(function (reference) {
    return reference.id === currentSharedStyleId;
  });

  // If we don't have a sensible currentStyleIndex, default to the base font
  // size.
  if (!Object(_lewishowles_helpers_dist_number_js__WEBPACK_IMPORTED_MODULE_6__["isNumber"])(currentStyleIndex) || currentStyleIndex < 0) {
    return referenceOrder.find(function (style) {
      return style.style.fontSize === 16;
    });
  }

  // Determine if we're at either end of the array.
  var stuckAtStart = reverse && currentStyleIndex === 0;
  var stuckAtEnd = !reverse && currentStyleIndex === referenceOrder.length - 1;
  if (stuckAtStart || stuckAtEnd) {
    return referenceOrder[currentStyleIndex];
  }

  // Return the appropriate next style.
  if (reverse) {
    return referenceOrder[currentStyleIndex - 1];
  }
  return referenceOrder[currentStyleIndex + 1];
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

//# sourceMappingURL=__decrease-font-size.js.map