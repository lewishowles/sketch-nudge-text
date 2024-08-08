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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/increase-font-size.js");
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

/***/ "./src/increase-font-size.js":
/*!***********************************!*\
  !*** ./src/increase-font-size.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Apply the next larger text style to the selected layer(s).
 *
 * Font styles are imported based on a given library name. This is required so
 * that all styles can be referenced from any document, even if that document
 * doesn't yet use any of the text styles from the library.
 *
 * The correct sequence of fonts is determined by the font size, regardless of
 * what the styles are named, or what order they appear.
 *
 * If no larger style can be found, no change is made.
 *
 * If no current style is applied, the default, base style is applied.
 */

var _require = __webpack_require__(/*! ./size */ "./src/size.js"),
  applyNextFontSize = _require.applyNextFontSize;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  applyNextFontSize();
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
var _require = __webpack_require__(/*! ./utils */ "./src/utils.js"),
  dd = _require.dd,
  getFriendlyDisplay = _require.getFriendlyDisplay,
  isNonEmptyArray = _require.isNonEmptyArray,
  isNonEmptyObject = _require.isNonEmptyObject,
  isNumber = _require.isNumber;
var _require2 = __webpack_require__(/*! ./shared */ "./src/shared.js"),
  getLibraryByName = _require2.getLibraryByName,
  getSelectedTextLayers = _require2.getSelectedTextLayers,
  getTextColourSwatchForLayer = _require2.getTextColourSwatchForLayer;
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
var document = sketch.getSelectedDocument();

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
  var textLayers = getSelectedTextLayers();
  if (!isNonEmptyArray(textLayers)) {
    dd("Please select a layer");
  }
  var referenceOrder = initialiseAvailableFontStyles();
  textLayers.forEach(function (layer) {
    var nextStyle = getNextStyle(layer.sharedStyleId, referenceOrder, reverse);
    if (!isNonEmptyObject(nextStyle)) {
      dd("Couldn't determine the appropriate next style");
    }

    // Retrieve the current colour swatch applied to the layer before
    // updating it.
    var swatch = getTextColourSwatchForLayer(layer);
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
  var fontLibrary = getLibraryByName("Fonts");

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
  if (!isNonEmptyObject(library)) {
    dd("Expected non-empty object <library>, received ".concat(getFriendlyDisplay(library), "."));
  }
  var importableTextStyles = library.getImportableTextStyleReferencesForDocument(document);
  if (!isNonEmptyArray(importableTextStyles)) {
    dd("No importable text styles could be found in the library \"".concat(libraryName, "\"."));
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
    dd("Text styles were imported from the library, but could not be found in the document. Something unexpected may have gone wrong.");
  }
  if (!isNonEmptyArray(importedTextStyles)) {
    dd("Expected non-empty array <importedTextStyles>, received ".concat(getFriendlyDisplay(importedTextStyles)));
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
  if (!isNonEmptyArray(referenceOrder)) {
    dd("Couldn't find the list of available styles to reference");
  }
  var currentStyleIndex = referenceOrder.findIndex(function (reference) {
    return reference.id === currentSharedStyleId;
  });

  // If we don't have a sensible currentStyleIndex, default to the base font
  // size.
  if (!isNumber(currentStyleIndex) || currentStyleIndex < 0) {
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

//# sourceMappingURL=__increase-font-size.js.map