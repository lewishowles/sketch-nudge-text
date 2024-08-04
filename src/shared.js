const sketch = require("sketch/dom");
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers.layers;
const { dd, getFriendlyDisplay, isNonEmptyArray, isNonEmptyObject, isNonEmptyString, isNumber } = require("./utils");

/**
 * Increase the font size of the currently selected layers to the next size
 * found in the reference order. Each layer is treated separately, allowing
 * multiple layers of different sizes to be increased at the same time. If the
 * current size is the largest size, no changes are made.
 */
export function increaseFontSize() {
	applyNextFontSize();
}

/**
 * Decrease the font size of the currently selected layers to the next size
 * found in the reference order. Each layer is treated separately, allowing
 * multiple layers of different sizes to be increased at the same time. If the
 * current size is the smallest size, no changes are made.
 */
export function decreaseFontSize() {
	applyNextFontSize(false);
}

/**
 * Apply the next font size, either larger or smaller depending on the choice
 * to increase or decrease.
 *
 * @param  {boolean}  increase
 *     Whether to increase the font size, or decrease it.
 */
function applyNextFontSize(increase = true) {
	const referenceOrder = initialiseAvailableFontStyles();
	const textLayers = selectedLayers.filter(layer => layer.type === "Text");

	textLayers.forEach(layer => {
		const nextStyle = getNextStyle(layer.sharedStyleId, referenceOrder, increase);

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
export function initialiseAvailableFontStyles() {
	if (!isNonEmptyArray(selectedLayers)) {
		dd("Please select a layer");
	}

	// Get the desired font library by name.
	// todo: Make this user input that is stored for next time.
	// todo: When the input is stored, allow it to be changed.
	const libraryName = "Fonts";
	const fontLibrary = getFontLibraryReference(libraryName);

	// Import any found styles into the current document.
	const importedTextStyles = importSharedTextStylesFromLibrary(fontLibrary);

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
        dd(`Expected non-empty string <libraryName>, received ${getFriendlyDisplay(libraryName)}.`);
	}

	const libraries = sketch.Library.getLibraries();
	const fontLibrary = libraries.find(library => library.name === libraryName);

	if (!fontLibrary) {
        dd(`The style library "${libraryName}" couldn't be found.`);
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
        dd(`Expected non-empty object <library>, received ${getFriendlyDisplay(library)}.`);
	}

	const importableTextStyles = library.getImportableTextStyleReferencesForDocument(document);

	if (!isNonEmptyArray(importableTextStyles)) {
		dd(`No importable text styles could be found in the library "${libraryName}".`);
	}

	// Import all shared text styles into the document, just in case.
	importableTextStyles.forEach(style => style.import());

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
		dd(`Text styles were imported from the library, but could not be found in the document. Something unexpected may have gone wrong.`);
	}

	if (!isNonEmptyArray(importedTextStyles)) {
		dd(`Expected non-empty array <importedTextStyles>, received ${getFriendlyDisplay(importedTextStyles)}`);
	}

	const importedStyleNames = importedTextStyles.map(style => style.name);
	const textStyles = document.sharedTextStyles.filter(style => importedStyleNames.includes(style.name));

	textStyles.sort((a, b) => a.style.fontSize - b.style.fontSize);

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
function getNextStyle(currentSharedStyleId, referenceOrder, forwards = true) {
	// If we don't have valid reference, we can't continue, as we can't pick a
	// style from nothing.
	if (!isNonEmptyArray(referenceOrder)) {
		dd("Couldn't find the list of available styles to reference");
	}

	const currentStyleIndex = referenceOrder.findIndex(reference => reference.id === currentSharedStyleId);

	// If we don't have a sensible currentStyleIndex, default to the base font
	// size.
	if (!isNumber(currentStyleIndex) || currentStyleIndex < 0) {
		return referenceOrder.find(style => style.style.fontSize === 16);
	}

	// Determine if we're at either end of the array.
	const stuckAtStart = !forwards && currentStyleIndex === 0;
	const stuckAtEnd = forwards && currentStyleIndex === referenceOrder.length - 1;

	if (stuckAtStart || stuckAtEnd) {
		return referenceOrder[currentStyleIndex];
	}

	// Return the appropriate next style.
	if (!forwards) {
		return referenceOrder[currentStyleIndex - 1];
	}

	return referenceOrder[currentStyleIndex + 1];
}