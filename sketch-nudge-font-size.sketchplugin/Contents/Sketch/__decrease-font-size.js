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

/***/ "./src/decrease-font-size.js":
/*!***********************************!*\
  !*** ./src/decrease-font-size.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

var _require = __webpack_require__(/*! ./shared */ "./src/shared.js"),
  decreaseFontSize = _require.decreaseFontSize;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  decreaseFontSize();
});

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! exports provided: increaseFontSize, decreaseFontSize, initialiseAvailableFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseFontSize", function() { return increaseFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseFontSize", function() { return decreaseFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialiseAvailableFontStyles", function() { return initialiseAvailableFontStyles; });
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");
var document = sketch.getSelectedDocument();
var selectedLayers = document.selectedLayers.layers;
var _require = __webpack_require__(/*! ./utils */ "./src/utils.js"),
  dd = _require.dd,
  getFriendlyDisplay = _require.getFriendlyDisplay,
  isNonEmptyArray = _require.isNonEmptyArray,
  isNonEmptyObject = _require.isNonEmptyObject,
  isNonEmptyString = _require.isNonEmptyString,
  isNumber = _require.isNumber;

/**
 * Increase the font size of the currently selected layers to the next size
 * found in the reference order. Each layer is treated separately, allowing
 * multiple layers of different sizes to be increased at the same time. If the
 * current size is the largest size, no changes are made.
 */
function increaseFontSize() {
  applyNextFontSize();
}

/**
 * Decrease the font size of the currently selected layers to the next size
 * found in the reference order. Each layer is treated separately, allowing
 * multiple layers of different sizes to be increased at the same time. If the
 * current size is the smallest size, no changes are made.
 */
function decreaseFontSize() {
  applyNextFontSize(false);
}

/**
 * Apply the next font size, either larger or smaller depending on the choice
 * to increase or decrease.
 *
 * @param  {boolean}  increase
 *     Whether to increase the font size, or decrease it.
 */
function applyNextFontSize() {
  var increase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var referenceOrder = initialiseAvailableFontStyles();
  var textLayers = selectedLayers.filter(function (layer) {
    return layer.type === "Text";
  });
  textLayers.forEach(function (layer) {
    var nextStyle = getNextStyle(layer.sharedStyleId, referenceOrder, increase);
    if (!isNonEmptyObject(nextStyle)) {
      dd("Couldn't determine the appropriate next style");
    }
    layer.sharedStyleId = nextStyle.id;
    layer.style = nextStyle.style;
  });
}

/**
 * Perform the necessary actions to retrieve the list of available font styles
 * from the given library.
 */
function initialiseAvailableFontStyles() {
  if (!isNonEmptyArray(selectedLayers)) {
    dd("Please select a layer");
  }

  // Get the desired font library by name.
  // todo: Make this user input that is stored for next time.
  // todo: When the input is stored, allow it to be changed.
  var libraryName = "Fonts";
  var fontLibrary = getFontLibraryReference(libraryName);

  // Import any found styles into the current document.
  var importedTextStyles = importSharedTextStylesFromLibrary(fontLibrary);

  // Retrieve our reference order for the document's shared text styles, based
  // on increasing font size.
  return sortTextStylesByFontSize(importedTextStyles);
}

/**
 * Given a library name, retrieve a reference to that library. If the library
 * cannot be found, halt execution and display a message to the user.
 *
 * @param  {string}  libraryName
 *     The name of the library that contains the font styles to use.
 */
function getFontLibraryReference(libraryName) {
  if (!isNonEmptyString(libraryName)) {
    dd("Expected non-empty string <libraryName>, received ".concat(getFriendlyDisplay(libraryName), "."));
  }
  var libraries = sketch.Library.getLibraries();
  var fontLibrary = libraries.find(function (library) {
    return library.name === libraryName;
  });
  if (!fontLibrary) {
    dd("The style library \"".concat(libraryName, "\" couldn't be found."));
  }
  return fontLibrary;
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
 * @param  {boolean}  forwards
 *     Whether to move forwards through the reference.
 */
function getNextStyle(currentSharedStyleId, referenceOrder) {
  var forwards = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
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
  var stuckAtStart = !forwards && currentStyleIndex === 0;
  var stuckAtEnd = forwards && currentStyleIndex === referenceOrder.length - 1;
  if (stuckAtStart || stuckAtEnd) {
    return referenceOrder[currentStyleIndex];
  }

  // Return the appropriate next style.
  if (!forwards) {
    return referenceOrder[currentStyleIndex - 1];
  }
  return referenceOrder[currentStyleIndex + 1];
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: isNonEmptyString, isNonEmptyObject, isNonEmptyArray, isNumber, getFriendlyDisplay, dd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyString", function() { return isNonEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyObject", function() { return isNonEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
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

//# sourceMappingURL=__decrease-font-size.js.map